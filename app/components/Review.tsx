'use client';

import { useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FlipWords } from "./ui/flip-words";
import ReviewCard from "@/cards/ReviewCard";
import { motion } from 'framer-motion';

interface ReviewData {
  id: number;
  content: string;
  name: string;
  imgSrc: string;
  company: string;
  rating: number;
}

const Review = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  // Realistic reviews based on actual freelance/contract work patterns
  const reviews = useMemo<ReviewData[]>(() => [
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
    }
  ], []);

  // Only duplicate twice instead of 4 times for better performance
  const duplicatedReviews = useMemo(() => [...reviews, ...reviews], [reviews]);

  return (
    <section 
      ref={sectionRef}
      id="reviews" 
      className="relative py-16 md:py-24 bg-zinc-900 z-[1] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/5 opacity-15" />

      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center h-auto mb-8 md:h-[100px] md:mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-2">
            Client 
            <div className="block sm:inline">
              <span className="text-purple-400 sm:ml-1">
                <FlipWords
                  words={["Feedback", "Testimonials", "Reviews", "Experiences"]}
                  className=""
                  duration={4000}
                />
              </span>
            </div>
          </h3>
          <p className="text-xl text-zinc-400">
            Real feedback from 
            <span className="block sm:inline">
              <span className="text-emerald-400 sm:ml-1">
                <FlipWords
                  words={["satisfied clients", "completed projects", "successful partnerships", "delivered solutions"]}
                  className=""
                  duration={3200}
                />
              </span>
            </span>
          </p>
        </motion.div>

        {/* Carousel Container with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="relative h-[420px] md:h-[500px] overflow-hidden"
        >
          {/* Infinite Scroll Track */}
          <div className="absolute inset-0 flex items-center w-full">
            <div 
              className="flex gap-6 md:gap-8 w-max animate-infinite-scroll"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              style={{
                willChange: 'transform',
                transform: 'translateZ(0)', // Force GPU acceleration
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
            >
              {duplicatedReviews.map((review, index) => (
                <div 
                  key={`${review.id}-${index}`}
                  className="w-[300px] sm:w-[320px] lg:w-[380px] flex-shrink-0"
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlay - pointer-events-none to allow hover through */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(24,24,27,1)_0%,_rgba(24,24,27,0)_10%,_rgba(24,24,27,0)_90%,_rgba(24,24,27,1)_100%)] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Review;