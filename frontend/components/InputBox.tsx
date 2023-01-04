import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import axios from 'axios';

import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef<HTMLInputElement>(null);
  const filePickerRef = useRef<HTMLInputElement>(null);

  const [imageToPost, setImageToPost] = useState<any>(null);
  const [imageToUpload, setImageToUpload] = useState<any>(null);

  const sendPost = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!inputRef?.current?.value) return;
    const formData = new FormData();
    // formData.append('files.post_image', imageToPost && imageToPost);

    const data = {
      message: inputRef.current.value,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
    };

    formData.append('data', JSON.stringify(data));

    formData.append('files.post_image', imageToUpload);

    await fetch('http://localhost:1337/api/posts', {
      method: 'POST',
      body: formData,
      headers: {},
    });
  };

  const addImageToPost = (e: React.ChangeEvent<HTMLElement>) => {
    const reader = new FileReader();
    const files = (e.target as HTMLInputElement).files;

    if (files) {
      setImageToUpload(files[0]);

      reader.readAsDataURL(files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent?.target?.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session?.user?.image || ''}
          width={40}
          height={40}
          layout="fixed"
          alt="Profile Image"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session?.user?.name || ''}?`}
          />
          <button type="submit" hidden onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              className="h-10 object-contain"
              src={imageToPost}
              alt="Post image"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filePickerRef?.current?.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
