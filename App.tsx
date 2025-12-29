
import React, { createContext, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import CardDetail from './pages/CardDetail';
import Daily from './pages/Daily';
import About from './pages/About';

// Define the Zen Sound Context
export const ZenSoundContext = createContext<{ playZenPing: () => void } | undefined>(undefined);

const App: React.FC = () => {
  // Memoize the AudioContext to ensure it's created only once
  const audioContext = React.useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return audioContext.current;
  }, []);

  const playZenPing = useCallback(() => {
    // Zen sound temporarily disabled as per user request
    // console.log("playZenPing: Sound disabled.");
  }, []); // Empty dependency array as it does nothing

  return (
    <ZenSoundContext.Provider value={{ playZenPing }}>
      <div className="min-h-screen relative"> {/* Main wrapper for particles, removed overflow-hidden */}
        <div className="gold-dust-particles"></div> {/* Particles background */}
        <div className="min-h-screen flex flex-col overflow-x-hidden relative z-10" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}> {/* Original content wrapper, with safe area padding */}
          <TopBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/card/:slug" element={<CardDetail />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </ZenSoundContext.Provider>
  );
};

export default App;
