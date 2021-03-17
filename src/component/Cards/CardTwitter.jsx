/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function CardTwitter({ post }) {
  const bg = `url(${post.media_url})`;
  const bgBefore = {
    '--before': bg,
  };

  const nous = `url(${post.user.name})`;
  const avecNous = {
    '--avecNousBg': nous,
  };

  const spanText = post.content;
  const spanUser = post.user.name;
  const changeContent = spanText.includes('@');
  const changeSpanText = `url(${post.user.name})`;
  const spanTextColor = {
    '--Text': changeSpanText,
  };

  function test() {
    const str = document.getElementById('test').innerHTML;
    const txt = str.replace('@', 'TEST');
    document.getElementById('test').innerHTML = txt;
  }

  return (
    <>
      {!!post.media_url ? (
        <div className='cardWithImg' style={bgBefore}>
          <div className='cardBodyWithImg'>
            <div className='content' style={spanTextColor}>
              <p>{post.content}</p>
            </div>
            <div className='cardImg'>
              {!!post.media_url ? (
                <div className='getImg'>
                  <img src={post.media_url} alt='' />
                </div>
              ) : (
                <div className='hideImg'>
                  <img src={post.media_url} alt='' />
                </div>
              )}
            </div>
          </div>
          <div className='userCard'>
            <img
              className='logoUser'
              src={post.user.avatar_url}
              alt={post.user.name}
            />
            <h3 className='name'>@{post.user.name}</h3>
          </div>
          <div className='footerCard'>
            <h3 className='hashtag'>{post.user.name}</h3>
            <img
              className='logoUser'
              src={post.user.avatar_url}
              alt={post.search}
            />
          </div>
        </div>
      ) : (
        <>
          {!!post.user.name === 'avecnous' ? (
            <div className='card' style={avecNous}>
              <div className='cardBodyNoImg'>
                <div className='content' style={spanTextColor} id='test'>
                  <p>{post.content}</p>
                </div>
                <div className='hideImg'>
                  <img src={post.media_url} alt='' />
                </div>
                <div className='userCard'>
                  <img
                    className='logoUser'
                    src={post.user.avatar_url}
                    alt={post.user.name}
                  />
                  <h3 className='name'>@{post.user.name}</h3>
                </div>
                <div className='footerCard'>
                  <h3 className='hashtag'>{post.user.name}</h3>
                  <img
                    className='logoUser'
                    src={post.user.avatar_url}
                    alt={post.search}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className='card'>
              <div className='cardBodyNoImg'>
                <div className='content' style={spanTextColor} id='test'>
                  <p>{post.content}</p>
                </div>
                <div className='hideImg'>
                  <img src={post.media_url} alt='' />
                </div>
                <div className='userCard'>
                  <img
                    className='logoUser'
                    src={post.user.avatar_url}
                    alt={post.user.name}
                  />
                  <h3 className='name'>@{post.user.name}</h3>
                </div>
                <div className='footerCard'>
                  <h3 className='hashtag'>{post.user.name}</h3>
                  <img
                    className='logoUser'
                    src={post.user.avatar_url}
                    alt={post.search}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

CardTwitter.propTypes = {
  post: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    network: PropTypes.string.isRequired,
    pub_date: PropTypes.string.isRequired,
    pub_url: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
