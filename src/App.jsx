import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Loader } from "./component/Loader";

import { AssetPreloadProvider } from "./lib/AssetPreloadProvider";
import { useAssetPreload } from "./lib/useAssetPreload";

function AppContent() {
  const { startPreload } = useAssetPreload();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    startPreload([
      "/bghero.png",
      "/bghero1.jpeg",
      "/bghero1.png",
      "/doctor.png",
      "/enyugma.png",
      "/esummit.png",
      "/gotbackground.png",
      "/Gym.png",
      "/noise.gif",
      "/OPCODE.png",
      "/primary.png",
      "/PrimaryC.png",
      "/PrimaryLeft.png",
      "/primaryR.png",
      "/Rest.png",
      "/react.png",
    ]);
  }, [startPreload]);

  return (
    <>
      <Loader onLoadComplete={() => setReady(true)} />
      {ready && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <AssetPreloadProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AssetPreloadProvider>
  );
}

export default App;
