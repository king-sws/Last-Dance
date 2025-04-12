'use client';

import { useMemo } from 'react';
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
  // Add ref for the entire section to trigger animations
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const reviews = useMemo<ReviewData[]>(() => [
    {
      id: 1,
      content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
      name: 'Sophia Ramirez',
      imgSrc: '/people-1.jpg',
      company: 'PixelForge',
      rating: 5
    },
    {
      id: 2,
      content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
      name: 'Ethan Caldwell',
      imgSrc: '/people-2.jpg',
      company: 'NexaWave',
      rating: 5
    },
    {
      id: 3,
      content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
      name: 'Liam Bennett',
      imgSrc: '/people-3.jpg',
      company: 'CodeCraft',
      rating: 5
    },
    {
      id: 4,
      content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
      name: 'Noah Williams',
      imgSrc: '/people-4.jpg',
      company: 'BrightWeb',
      rating: 4
    },
    {
      id: 5,
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Ava Thompson',
      imgSrc: '/people-5.jpg',
      company: 'TechMosaic',
      rating: 5
    },
    {
      id: 6,
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan Lee',
      imgSrc: '/people-6.jpg',
      company: 'Skyline Digital',
      rating: 5
    }
  ], []);

  // Optimized duplicated reviews
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
            Trusted by 
            <div className="block sm:inline">
              <span className="text-purple-400 sm:ml-1">
                <FlipWords
                  words={["Innovative Startups", "Enterprise Teams", "Global Brands", "Tech Leaders"]}
                  className=""
                  duration={4000}
                />
              </span>
            </div>
          </h3>
          <p className="text-xl text-zinc-400">
            Delivering solutions that 
            <span className="block sm:inline">
              <span className="text-emerald-400 sm:ml-1">
                <FlipWords
                  words={["exceed expectations", "drive growth", "solve real problems", "innovate"]}
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
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative h-[420px] md:h-[500px] overflow-hidden"
        >
          {/* Infinite Scroll Track */}
          <div className="absolute inset-0 flex items-center w-full">
            <div className="animate-infinite-scroll flex gap-6 md:gap-8 w-max">
              {[...duplicatedReviews, ...duplicatedReviews].map((review, index) => (
                <div 
                  key={`${review.id}-${index}`}
                  className="w-[300px] sm:w-[320px] lg:w-[380px] flex-shrink-0"
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(24,24,27,1)_0%,_rgba(24,24,27,0)_10%,_rgba(24,24,27,0)_90%,_rgba(24,24,27,1)_100%)]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Review;