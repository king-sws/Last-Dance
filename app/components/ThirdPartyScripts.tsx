"use client";
import { useEffect } from 'react';

export default function ThirdPartyScripts() {
  useEffect(() => {
    const loadScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    window.requestIdleCallback(() => {
      loadScript('https://third-party-script.com');
    });
  }, []);

  return null;
}