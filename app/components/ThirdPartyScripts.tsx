"use client";
import { useEffect } from 'react';

const requestIdleCallback = window.requestIdleCallback || ((cb: IdleRequestCallback) => setTimeout(cb, 1));

export default function ThirdPartyScripts() {
  useEffect(() => {
    const loadScript = (src: string) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    requestIdleCallback(() => {
      loadScript('https://third-party-script.com');
    });
  }, []);

  return null;
}