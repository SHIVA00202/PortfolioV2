import { useRef, useState, useCallback } from 'react';
import { AssetPreloadContext } from './assetPreloadContextBase';

export const AssetPreloadProvider = ({ children }) => {
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(0);
  const [total, setTotal] = useState(0);

  const startedRef = useRef(false);

  const startPreload = useCallback((urls = []) => {
    if (startedRef.current) return Promise.resolve();
    startedRef.current = true;

    setStatus("loading");
    setTotal(urls.length);

    let loadedCount = 0;

    return Promise.all(
      urls.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;

            img.onload = img.onerror = () => {
              loadedCount += 1;
              setLoaded(loadedCount);
              setProgress(Math.round((loadedCount / urls.length) * 100));
              resolve();
            };
          })
      )
    ).then(() => {
      setStatus("done");
    });
  }, []);

  return (
    <AssetPreloadContext.Provider
      value={{
        status,
        progress,
        total,
        loaded,
        startPreload,
      }}
    >
      {children}
    </AssetPreloadContext.Provider>
  );
};
