"use client";
import "./BlogPosts.css";
import React from "react";

const BlogPosts: React.FC = () => {
  return (
    <>
      <h1 className="blogTitle titleFont">Blog</h1>
      <p className="blogTitle">Something about blog posts here</p>
      <div className="blogContainer">
        <ul className="blogGallery">

          <li className="blogpost">
              <h2>Neurodiversity in Tech: My journey to becoming a Junior Developer</h2>
              <p>A summary of the post here</p>
              <p>Published date</p>
          </li>

          <li className="blogpost">
              <h2>Title</h2>
              <p>A summary of the post here</p>
              <p>Published date</p>
          </li>

          <li className="blogpost">
              <h2>Title</h2>
              <p>A summary of the post here</p>
              <p>Published date</p>
          </li>

          <li className="blogpost">
              <h2>Title</h2>
              <p>A summary of the post here</p>
              <p>Published date</p>
          </li>
          
        </ul>
      </div>
    </>
  );
};

export default BlogPosts;
