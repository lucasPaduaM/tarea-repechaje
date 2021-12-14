import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();
  console.log(userId);

  useEffect(async () => {
    const response = await axios.get(`https://repechaje-backend.herokuapp.com/posts/${userId}`);
    setPosts(response.data);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <p>{post.id}</p>
          <img src={post.image} alt="imagen" />
        </>
      ))}
    </div>
  );
};

export default Posts;
