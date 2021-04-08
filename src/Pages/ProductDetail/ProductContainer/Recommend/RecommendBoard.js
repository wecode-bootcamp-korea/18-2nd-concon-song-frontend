import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import RecommendList from './Components/RecommendList';

const TOTAL_SLIDES = 8;

function RecommendBoard({ product }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    currentSlide >= TOTAL_SLIDES ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  };
  return (
    <RecommendBox>
      <RecommendTitle>
        <h1>추천 상품</h1>
        <RecommendList product={product} />
      </RecommendTitle>
    </RecommendBox>
  );
}

const RecommendBox = styled.div`
  border-top: 1px solid black;
  padding: 24px 0 70px 0;
  width: 85%;
  margin: 0 auto;
`;

const RecommendTitle = styled.div`
  h1 {
    font-size: 36px;
    letter-spacing: -0.025em;
    font-weight: 700;
  }
`;

export default RecommendBoard;
