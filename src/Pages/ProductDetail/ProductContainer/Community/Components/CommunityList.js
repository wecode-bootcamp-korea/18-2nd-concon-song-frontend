import React, { useState } from 'react';

import styled from 'styled-components';
import Feed from './Feed';
import CommunityModal from './CommunityModal';

function CommunityList({ feed }) {
  const [modal, setModal] = useState(false);
  const [feedIndex, SetFeedIndex] = useState(null);
  const [feedIndexNum, setFeedIndexNum] = useState(null);

  // document.body.style.overflow = 'none';

  const handleModal = index => {
    document.body.style.overflow = modal ? 'auto' : 'hidden';

    setModal(!modal);
    SetFeedIndex(index);
    setFeedIndexNum(index.id - 1);
  };

  const handleAdd = () => {
    feedIndexNum === feed.length - 1 ? setFeedIndexNum(0) : setFeedIndexNum(feedIndexNum + 1);
  };

  const handleSub = () => {
    feedIndexNum === 0 ? setFeedIndexNum(feed.length - 1) : setFeedIndexNum(feedIndexNum - 1);
  };

  const handleKey = e => {};

  const showScreen = feed.filter((feed, idx) => idx === feedIndexNum);
  return (
    <CommunityFeeds>
      {feed &&
        feed.map(feed => {
          return <Feed key={feed.id} feed={feed} handleModal={handleModal} />;
        })}
      {modal && (
        <CommunityModal
          feedIndex={feedIndex}
          showScreen={showScreen}
          handleModal={handleModal}
          handleAdd={handleAdd}
          handleSub={handleSub}
          feedIndexNum={feedIndexNum}
          handleKey={handleKey}
        />
      )}
    </CommunityFeeds>
  );
}

const CommunityFeeds = styled.div`
  position: relative;
  margin: 20px 0;
  display: grid;
  grid-column-gap: 14px;
  grid-row-gap: 14px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  img {
    width: 100%;
    height: 100%;
  }
`;

export default CommunityList;
