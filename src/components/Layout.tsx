import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';

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
    <div className="min-h-screen flex flex-col bg-white text-black font-body selection:bg-orange selection:text-white overflow-x-hidden">
      {children}
    </div>
  );
}
