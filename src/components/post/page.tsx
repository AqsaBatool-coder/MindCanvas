"use client";
import Image from 'next/image';
import React, { useState } from 'react';

interface PostProps {
  title: string;
  content: string;
  author: string;
  date: string;
  imageUrl?: string; // Optional image URL for the post
}

// Reusable Post Component
const Post: React.FC<PostProps> = ({ title, content, author, date, imageUrl }) => {
    const [isFilled, setIsFilled] = useState(false);
    const HandleLike = () => {
        setIsFilled(!isFilled);
    }
  return (
    <article className="max-w-xl mx-auto p-4 mb-6 shadow-md rounded-lg bg-white">
        <div className="flex items-center justify-between mb-4">
            <span className='text-xl text-bold text-primary font-bold'>~{author}</span>
            {imageUrl && <Image src={imageUrl} alt={title} height={40} width={40} className=" rounded-full border-[2px] border-primary" />}
        </div>
      
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div onClick={HandleLike} className='flex justify-evenly'>
            {isFilled ? (
                 <Image src='/icons/heart.png' alt={title} height={30} width={30} className="mr-2" />
                ):(
                <Image src='/icons/heart-e.png' alt={title} height={30} width={30} className="mr-2" />
                )
             }
        <Image src='/icons/comment.png' alt={title} height={30} width={30} className="mr-2" />
        <Image src='/icons/share.png' alt={title} height={20} width={25} />
        </div>
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>
    </article>
  );
};

export default Post;
