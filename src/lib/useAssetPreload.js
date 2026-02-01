import { useContext } from "react";
import { AssetPreloadContext } from "./assetPreloadContextBase";

export function useAssetPreload() {
  const ctx = useContext(AssetPreloadContext);

  if (!ctx) {
    throw new Error("useAssetPreload must be used within AssetPreloadProvider");
  }

  return ctx;
}
