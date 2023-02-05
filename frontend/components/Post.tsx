import React from 'react';
import Image from 'next/image';

interface IPostProps {
  name: string;
  email: string;
  image: string;
  postImage: any;
  message: string;
  timestamp: Date;
}

function Post({
  name,
  email,
  image,
  postImage,
  message,
  timestamp,
}: IPostProps) {
  console.log(postImage);
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full"
            src={image}
            width={40}
            alt="profile image"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image
            alt="post image"
            src={'http://localhost:1337' + postImage}
            objectFit="cover"
            layout="fill"
          ></Image>
        </div>
      )}
    </div>
  );
}

export default Post;
