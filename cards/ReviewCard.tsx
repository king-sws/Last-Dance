'use client';

import { memo } from 'react';
import Image from 'next/image';

interface ReviewCardProps {
  content: string;
  name: string;
  imgSrc: string;
  company: string;
  rating: number;
}

const ReviewCard = memo(({
  content,
  name,
  imgSrc,
  company,
  rating = 5
}: ReviewCardProps) => (
  <article className="h-full p-6 bg-zinc-800/80 backdrop-blur-sm rounded-xl border border-zinc-700/50 hover:border-cyan-400/30 transition-colors duration-300">
    <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < rating ? "text-yellow-400" : "text-zinc-600"}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>

    <blockquote className="relative mb-6">
      <span className="absolute -top-3 -left-2 text-cyan-400/40 text-2xl">“</span>
      <p className="text-zinc-300 line-clamp-3 pl-4">{content}</p>
      <span className="absolute -bottom-3 -right-2 text-cyan-400/40 text-2xl">”</span>
    </blockquote>

    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10 rounded-lg overflow-hidden border-2 border-cyan-400/30">
        <Image
          src={imgSrc}
          alt={name}
          width={40}
          height={40}
          className="object-cover"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzMzMzMzMyIvPjwvc3ZnPg=="
        />
      </div>
      <div>
        <h3 className="text-zinc-100 font-medium truncate">{name}</h3>
        <p className="text-cyan-400 text-sm truncate">{company}</p>
      </div>
    </div>
  </article>
));

ReviewCard.displayName = 'ReviewCard';
export default ReviewCard;