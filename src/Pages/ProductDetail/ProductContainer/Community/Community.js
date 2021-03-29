import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CommunityList from './Components/CommunityList';

function Community() {
  const [feed, setFeed] = useState([]);
  const [offset, setOffset] = useState(1);
  const pagnation = feed.slice(0, 8 * offset);

  const handleView = () => {
    setOffset(offset + 1);
  };

  const handleClose = () => {
    setOffset(offset - 1);
  };

  useEffect(() => {
    fetch('data/feedData.json')
      .then(res => res.json())
      .then(res => setFeed(res.feeds));
  }, []);

  return (
    <CommunityBox>
      <CommunityTitle>
        <h1>CONVERSONG COMMUNITY</h1>
      </CommunityTitle>
      <Description>
        <p className="communityDescription">
          컨컨송 커뮤니티가 전하는 송스타그램 속 <strong className="hashTag">#컨컨송스타일</strong>
        </p>
        <CommunityList feed={pagnation} />
        <Button more onClick={handleView}>
          더보기
        </Button>
        <Button onClick={handleClose}>닫기</Button>
      </Description>
    </CommunityBox>
  );
}

const CommunityBox = styled.div`
  border-top: 1px solid black;
  padding: 24px 0 70px 0;
  width: 85%;
  margin: 0 auto;
`;

const CommunityTitle = styled.div`
  h1 {
    font-size: 36px;
    letter-spacing: -0.025em;
    font-weight: 700;
  }
`;

const Description = styled.div`
  margin-top: 10px;
  .communityDescription {
    font-size: 14px;
    .hashTag {
      font-weight: bold;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: white;
  border: 1px solid #bfbfbf;
  color: #bfbfbf;
  font-size: 16px;
  height: 40px;
  margin-bottom: ${props => (props.more ? '10px' : '0px')};
`;
export default Community;
