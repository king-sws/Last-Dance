'use client';

import { useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FlipWords } from "./ui/flip-words";
import ReviewCard from "@/cards/ReviewCard";
import { motion } from 'framer-motion';
import { Quote, ShieldCheck } from 'lucide-react';

const Review = () => {
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reviews = useMemo(() => [
    {
      id: 1,
      content: 'Oussama delivered exactly what we needed for our e-commerce platform. Clean code, good performance, and met all deadlines. Would work with him again.',
      name: 'Sarah M.',
      imgSrc: '/people-1.jpg',
      company: 'E-commerce Startup',
      rating: 5
    },
    {
      id: 2,
      content: 'Great React developer. Helped us migrate from jQuery to modern stack. Communication was clear and the final product worked well.',
      name: 'Ahmed K.',
      imgSrc: '/people-2.jpg',
      company: 'Local Business',
      rating: 4
    },
    {
      id: 3,
      content: 'Professional work on our healthcare dashboard. Understood our requirements and delivered a secure, functional solution on time.',
      name: 'Dr. Maria R.',
      imgSrc: '/people-3.jpg',
      company: 'Medical Practice',
      rating: 5
    },
    {
      id: 4,
      content: 'Solid full-stack developer. Built our task management app from scratch. Good problem-solving skills and reliable delivery.',
      name: 'James L.',
      imgSrc: '/people-4.jpg',
      company: 'Tech Startup',
      rating: 4
    },
    {
      id: 5,
      content: 'Oussama helped optimize our website performance significantly. Page load times improved and our SEO rankings went up. Recommended.',
      name: 'Lisa Chen',
      imgSrc: '/people-5.jpg',
      company: 'Digital Agency',
      rating: 5
    },
    {
      id: 6,
      content: 'Good experience working together. Delivered a responsive web application that met our specifications. Professional and skilled.',
      name: 'Omar B.',
      imgSrc: '/people-6.jpg',
      company: 'Small Business',
      rating: 4
    },
    {
      id: 7,
      content: 'Excellent work on our restaurant ordering system. The UI is intuitive and the backend handles high traffic smoothly. Very pleased with the results.',
      name: 'Carlos R.',
      imgSrc: '/people-1.jpg',
      company: 'Restaurant Chain',
      rating: 5
    },
    {
      id: 8,
      content: 'Built a custom CRM for our team. Great attention to detail and responsive to our feedback throughout the project.',
      name: 'Jennifer W.',
      imgSrc: '/people-2.jpg',
      company: 'Sales Agency',
      rating: 5
    },
    {
      id: 9,
      content: 'Oussama helped modernize our legacy system. Professional approach and delivered quality code that our team can maintain easily.',
      name: 'Robert H.',
      imgSrc: '/people-3.jpg',
      company: 'Manufacturing Co.',
      rating: 4
    },
    {
      id: 10,
      content: 'Developed a real-time analytics dashboard for us. Exceeded expectations with performance optimization and user experience.',
      name: 'Sophia L.',
      imgSrc: '/people-4.jpg',
      company: 'Marketing Firm',
      rating: 5
    },
    {
      id: 11,
      content: 'Reliable and skilled developer. Created a booking platform that handles our scheduling needs perfectly. Would definitely hire again.',
      name: 'Michael T.',
      imgSrc: '/people-5.jpg',
      company: 'Service Business',
      rating: 5
    },
    {
      id: 12,
      content: 'Great collaboration on our mobile-responsive web app. Clean code, good documentation, and timely delivery throughout the project.',
      name: 'Diana P.',
      imgSrc: '/people-6.jpg',
      company: 'Consulting Firm',
      rating: 4
    }
  ], []);

  const duplicatedReviews = useMemo(() => [...reviews, ...reviews, ...reviews], [reviews]);

  return (
    <section 
      ref={sectionRef}
      id="reviews" 
      className="relative py-26 bg-zinc-950 overflow-hidden"
    >
      {/* 1. Subtle Architectural Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
      
      <div className="container px-4 mx-auto relative z-10">
        
        {/* 2. Professional Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffe1c1]/10 border border-[#ffe1c1]/20 text-[#ffe1c1] text-[10px] font-mono tracking-[0.3em] uppercase mb-6">
            <ShieldCheck className="w-3 h-3" />
            Verified_Trust_Protocol
          </div>
          
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Professional <span className="italic font-serif font-light text-[#ffe1c1]">Endorsements.</span>
          </h3>
          
          <div className="flex items-center gap-4 text-zinc-500 font-light text-lg">
            <span>Direct feedback from</span>
            <span className="text-zinc-200 underline decoration-[#ffe1c1]/40 underline-offset-8">
              <FlipWords
                words={["Industry Partners", "Global Startups", "Tech Founders", "Project Owners"]}
                duration={3000}
                className="text-zinc-200"
              />
            </span>
          </div>
        </div>

{/* 3. The Marquee System */}
<div className="space-y-8 relative">
  
  {/* Row 1 */}
  <div className="relative overflow-hidden group">
    {/* Fade Edges - Higher Z-Index */}
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-30 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-30 pointer-events-none" />
    
    <div 
      className="flex gap-6 w-max relative z-20"
      style={{ 
        animation: 'marquee-left 80s linear infinite',
        animationPlayState: isPausedRow1 ? 'paused' : 'running'
      }}
      onMouseEnter={() => setIsPausedRow1(true)}
      onMouseLeave={() => setIsPausedRow1(false)}
    >
      {duplicatedReviews.map((review, index) => (
        <div key={`row1-${index}`} className="w-[350px] lg:w-[450px] px-3">
           <ReviewCard {...review} />
        </div>
      ))}
    </div>
  </div>

  {/* Row 2 */}
  <div className="relative overflow-hidden group">
    {/* Fade Edges - Higher Z-Index */}
    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-30 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-30 pointer-events-none" />
    
    <div 
      className="flex gap-6 w-max relative z-20"
      style={{ 
        animation: 'marquee-right 80s linear infinite',
        animationPlayState: isPausedRow2 ? 'paused' : 'running'
      }}
      onMouseEnter={() => setIsPausedRow2(true)}
      onMouseLeave={() => setIsPausedRow2(false)}
    >
      {duplicatedReviews.map((review, index) => (
        <div key={`row2-${index}`} className="w-[350px] lg:w-[450px] px-3">
           <ReviewCard {...review} />
        </div>
      ))}
    </div>
  </div>
</div>

        {/* 4. Bottom Metric */}
        {/* <div className="mt-20 flex justify-center">
            <div className="flex items-center gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                <div className="text-center">
                    <p className="text-white font-bold text-2xl">98%</p>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Retention_Rate</p>
                </div>
                <div className="h-8 w-px bg-zinc-800" />
                <div className="text-center">
                    <p className="text-white font-bold text-2xl">50+</p>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">Global_Deployments</p>
                </div>
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default Review