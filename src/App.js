import React from "react";
import { useSelector } from "react-redux";
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import User from "./components/User";

const App = () => {
  //Recupération des données stockées dans le STORE de redux
  const posts = useSelector((state) => state.postReducer);

  console.log(posts);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
