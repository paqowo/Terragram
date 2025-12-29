
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
    const ctx = getAudioContext();
    if (!ctx) return;

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(1000, ctx.currentTime); // Start at 1000Hz
    oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1); // Decay to 800Hz
    
    gainNode.gain.setValueAtTime(0.08, ctx.currentTime); // Initial volume (0.05 to 0.1 range)
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5); // Decay over 0.5 seconds

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.5); // Stop after 0.5 seconds
  }, [getAudioContext]);

  return (
    <ZenSoundContext.Provider value={{ playZenPing }}>
      <div className="min-h-screen relative overflow-hidden"> {/* Main wrapper for particles */}
        <div className="gold-dust-particles"></div> {/* Particles background */}
        <div className="min-h-screen flex flex-col overflow-x-hidden relative z-10"> {/* Original content wrapper */}
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
