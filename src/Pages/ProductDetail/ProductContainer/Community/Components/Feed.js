import React, { useState } from 'react';
import styled from 'styled-components';

function Feed({ feed, handleModal }) {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };

  const feedClick = () => {
    handleModal(feed);
  };

  return (
    <FeedImage key={feed.id} onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={feedClick}>
      <img src={feed.image} alt="songStarImg"></img>
      <div className={hover ? 'hoverOn' : 'hoverOff'}>
        <img src={feed.profile_img} alt="profile" className="profileImg"></img>
        <div className="feedName">{feed.name}</div>
        <div className="feedDate">{feed.date}</div>
        <span className="feedContent">{feed.text}</span>
        <span className="feedTag">{feed.hashTag}</span>
      </div>
    </FeedImage>
  );
}

const FeedImage = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  .profileImg {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    z-index: 200;
    bottom: 10px;
    left: 10px;
  }

  .feedName {
    position: absolute;
    z-index: 200;
    bottom: 25px;
    left: 45px;
    font-size: 12px;
    display: block;
    color: #fff;
    font-weight: bold;
  }
  .feedDate {
    position: absolute;
    z-index: 200;
    bottom: 15px;
    left: 45px;
    font-size: 10px;
    display: block;
    color: #fff;
  }
  .hoverOn {
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 0.7;
      }
    }

    .profileImg {
      top: 10px;
      opacity: 1;
      z-index: 100;
    }
    .feedName {
      top: 13px;
    }
    .feedDate {
      top: 25px;
    }
    position: relative;
    animation: fadein 1s;
    transform: translateY(-100%);
    opacity: 0.7;
    background-color: black;
    display: flex;
    width: 100%;
    height: 250px;
    justify-content: center;

    .feedContent {
      position: absolute;
      font-size: 13px;
      font-weight: 600;
      color: white;
      top: 50px;
      left: 20px;
      line-height: 15px;
    }
    .feedTag {
      position: absolute;
      font-size: 13px;
      font-weight: 600;
      color: white;
      bottom: 20px;
      left: 20px;
      line-height: 15px;
    }
  }

  .hoverOff {
    width: 100%;
    height: 250px;
    .feedContent,
    .feedTag {
      display: none;
    }
  }
`;

export default Feed;
