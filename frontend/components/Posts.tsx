import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Post from './Post';

export interface IPost {
  id: number;
  attributes: {
    name: string;
    message: string;
    email: string;
    image: string;
    postImage: any;
    createdAt: Date;
    post_image: any;
  };
}

function Posts() {
  const {
    isLoading,
    isError,
    data: posts,
  } = useFetch('http://localhost:1337/api/posts?populate=*');

  console.log(posts);
  return (
    <div>
      {posts?.data.map((post: IPost) => (
        <Post
          key={post.id}
          timestamp={post.attributes.createdAt}
          name={post.attributes.name}
          message={post.attributes.message}
          email={post.attributes.email}
          image={post.attributes.image}
          postImage={post.attributes.post_image.data.attributes.url}
        />
      ))}
    </div>
  );
}

export default Posts;
