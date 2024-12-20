'use client';
import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, altText, title }) => {
  return (
    <div className="border-2 overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-center text-zinc-600 text-lg font-bold hover:scale-105 transition-all duration-200">
      <div>
        <Image
          alt={altText}
          loading="lazy"
          width={400}
          height={250}
          className="object-cover w-full"
          src={imageSrc}
          style={{ color: 'transparent' }}
        />
      </div>
      <div className="px-4 flex justify-center items-center h-[70px]">
        <span className="text-lg md:text-xl lg:text-2xl font-semibold text-sky-800">{title}</span>
      </div>
    </div>
  );
};



export default Card;

