import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import { Doodle } from './Doodle';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    });
    
    // @ts-ignore
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // @ts-ignore
      delete window.lenis;
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-body selection:bg-orange selection:text-white overflow-x-hidden relative min-w-[1280px]">
      {/* Global Background Doodles Layer (Universally subtle opacity-4%) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.04] overflow-hidden select-none">
        {/* Paws scattered at different heights */}
        <Doodle type="paw" className="top-[10%] left-[6%] w-24 h-24 rotate-[15deg] text-orange" />
        <Doodle type="paw" className="top-[35%] right-[8%] w-28 h-28 rotate-[-20deg] text-orange" />
        <Doodle type="paw" className="top-[60%] left-[8%] w-20 h-20 rotate-[35deg] text-orange" />
        <Doodle type="paw" className="top-[85%] right-[10%] w-32 h-32 rotate-[-10deg] text-orange" />

        {/* Bones scattered */}
        <Doodle type="bone" className="top-[22%] right-[12%] w-20 h-20 rotate-[45deg] text-orange" />
        <Doodle type="bone" className="top-[52%] left-[10%] w-24 h-24 rotate-[-35deg] text-orange" />
        <Doodle type="bone" className="top-[78%] right-[6%] w-22 h-22 rotate-[15deg] text-orange" />

        {/* Playful sparkles and swirls */}
        <Doodle type="sparkle" className="top-[15%] left-[45%] w-12 h-12 text-orange" />
        <Doodle type="dog" className="top-[45%] right-[40%] w-24 h-24 rotate-[15deg] text-orange" />
        <Doodle type="sparkle" className="top-[72%] left-[50%] w-16 h-16 text-orange" />
      </div>

      {/* Main Content Wrapper (Placed above background doodles) */}
      <div className="relative z-10 flex-grow flex flex-col">
        {children}
      </div>
    </div>
  );
}
