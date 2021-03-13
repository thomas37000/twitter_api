/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Card.css";

export default function Card({ post }) {
  const [isImg, setIsImg] = useState(true);

  return (
    <div className="card">
      <div className="headerCard">
        <img
          className="cardImg"
          src={post.user.avatar_url}
          alt={post.user.name}
        />
        <div className="cardImg">
          {post ? (
            <div className="getImg">
              <img src={post.media_url} alt="" />
            </div>
          ) : (
            <div className="hideImg">
              <img src={post.media_url} alt="" />
            </div>
          )}
        </div>
      </div>
      <div className="cardBody">
        <h3>{post.content}</h3>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.text}</p>
        <button>
          <a href={post.pub_url} className="socialLink">
            link
          </a>
        </button>
        <div className="date">{post.pub_date}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  post: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    media_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pub_date: PropTypes.string.isRequired,
    pub_url: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};
