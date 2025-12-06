/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const triangleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate light intensity based on distance from mouse to triangle
  const calculateLightIntensity = () => {
    if (!triangleRef.current) return 0;
    
    const rect = triangleRef.current.getBoundingClientRect();
    const triangleCenterX = rect.left + rect.width / 2;
    const triangleCenterY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - triangleCenterX, 2) + 
      Math.pow(mousePosition.y - triangleCenterY, 2)
    );
    
    const maxDistance = 400;
    const intensity = Math.max(0, 1 - distance / maxDistance);
    return intensity;
  };

  const lightIntensity = calculateLightIntensity();

  return (
    <div className="h-screen w-screen fixed inset-0 bg-black text-white flex items-center justify-center p-4 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl animate-pulse" 
           style={{ animationDuration: '6s', animationDelay: '1s' }} />

      {/* Spotlight effect following mouse */}
      <div
        className="absolute pointer-events-none transition-all duration-100 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: '700px',
          height: '700px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, rgba(6, 182, 212, 0.05) 35%, transparent 65%)',
        }}
      />

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated scan line */}
      <div 
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"
        style={{
          animation: mounted ? 'scan 8s linear infinite' : 'none',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full">
        <div className="text-center space-y-5">
          
          {/* Enhanced Glowing Triangle Logo */}
          <div className="flex justify-center mb-4">
            <div 
              ref={triangleRef}
              className="relative"
              style={{
                filter: `drop-shadow(0 0 ${25 + lightIntensity * 35}px rgba(6, 182, 212, ${lightIntensity * 0.7}))`,
                transition: 'filter 0.2s ease-out',
              }}
            >
              <svg 
                width="70" 
                height="70" 
                viewBox="0 0 100 100" 
                fill="none"
                className="transition-all duration-300"
                style={{
                  transform: `scale(${1 + lightIntensity * 0.1})`,
                }}
              >
                <path
                  d="M50 10 L90 85 L10 85 Z"
                  fill="url(#triangleGradient)"
                  stroke="url(#strokeGradient)"
                  strokeWidth="1.5"
                />
                
                <defs>
                  <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop 
                      offset="0%" 
                      style={{ 
                        stopColor: '#06b6d4', 
                        stopOpacity: 0.15 + lightIntensity * 0.35 
                      }} 
                    />
                    <stop 
                      offset="100%" 
                      style={{ 
                        stopColor: '#06b6d4', 
                        stopOpacity: 0.08 + lightIntensity * 0.2 
                      }} 
                    />
                  </linearGradient>
                  <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop 
                      offset="0%" 
                      style={{ 
                        stopColor: '#06b6d4', 
                        stopOpacity: 0.4 + lightIntensity * 0.6 
                      }} 
                    />
                    <stop 
                      offset="100%" 
                      style={{ 
                        stopColor: '#14b8a6', 
                        stopOpacity: 0.3 + lightIntensity * 0.5 
                      }} 
                    />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Enhanced inner glow */}
              <div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  opacity: lightIntensity * 0.6,
                  transition: 'opacity 0.2s ease-out',
                }}
              >
                <div 
                  className="w-16 h-16"
                  style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, transparent 70%)',
                  }}
                />
              </div>

              {/* Pulse ring effect */}
              <div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  opacity: lightIntensity * 0.4,
                }}
              >
                <div 
                  className="w-20 h-20 rounded-full border border-cyan-400/30"
                  style={{
                    animation: mounted ? 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' : 'none',
                  }}
                />
              </div>
            </div>
          </div>

          {/* 404 Number with glow */}
          <div className="relative mb-4">
            <h1 
              className="text-7xl md:text-8xl font-bold text-white/90 relative"
              style={{
                textShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
              }}
            >
              404
            </h1>
          </div>

          {/* Text with better hierarchy */}
          <div className="space-y-2 mb-5">
            <h2 className="text-xl md:text-2xl font-semibold text-white/85">
              Page Not Found
            </h2>
            <p className="text-xs md:text-sm text-white/50 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Enhanced Code Block */}
          <div className="inline-block w-full max-w-md mb-6">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl p-4 text-left font-mono text-xs shadow-2xl hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                {[
                  { color: '#ef4444', glow: 'rgba(239, 68, 68, 0.3)' },
                  { color: '#eab308', glow: 'rgba(234, 179, 8, 0.3)' },
                  { color: '#22c55e', glow: 'rgba(34, 197, 94, 0.3)' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full"
                    style={{ 
                      backgroundColor: item.color,
                      boxShadow: `0 0 10px ${item.glow}`
                    }}
                  />
                ))}
              </div>
              <div className="space-y-1 text-zinc-300">
                <div className="text-cyan-400">// Error Details</div>
                <div>
                  <span className="text-teal-400">const</span>{' '}
                  <span className="text-white">error</span> = {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">status</span>: <span className="text-amber-400">404</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">message</span>: <span className="text-green-400">"Not found"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">timestamp</span>: <span className="text-purple-400">"{new Date().toISOString().split('.')[0]}Z"</span>
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white border border-cyan-400/20 rounded-lg flex items-center justify-center gap-3 transition-all font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transform overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform relative z-10" />
              <span className="relative z-10">Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Corner Accents */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-cyan-500/8 to-transparent rounded-tl-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-teal-500/8 to-transparent rounded-br-full pointer-events-none" />

      {/* Bottom edge glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }

        @keyframes scan {
          0% {
            top: 0%;
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;