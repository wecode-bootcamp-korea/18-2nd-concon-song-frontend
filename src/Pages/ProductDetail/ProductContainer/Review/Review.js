import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const IMG_REVIEW = [
  'https://postfiles.pstatic.net/MjAyMTA0MDNfMTQ5/MDAxNjE3NDE5NTM4MjYz.RYR3v2NFsXsmISC0Y3qJtPx6rqqhPHjKHC7CGpFGybcg.dszFAlurofIUdWKpMkTs0Uomn4MngJYQdNM0NfCPQw4g.PNG.maplesosser/image.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMTA0MDNfMTQy/MDAxNjE3NDE5NTQxMDE5.ZpwirVRkErOUTTPe_D0eeHNGdXWVize0fLaVr4oHffEg.xdBGPZmCPp4xq-BShIWEuS0wtdGc_1Rv6bcasjtzMMIg.PNG.maplesosser/image.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMTA0MDNfMzMg/MDAxNjE3NDE5NTM1NTA5.pf0_0ytCufhcsrOxiTmjLHk0IrrrG9M_zYkr8Ok9Cd4g.uqMRFUCRV7Kqtgcq1BoN7FNvlbNcauvV8_Gd3kwZHwkg.PNG.maplesosser/image.png?type=w966',
  'https://postfiles.pstatic.net/MjAyMTA0MDNfMjI3/MDAxNjE3NDE5NTMyMjE5.NROJiSS0C86unf7rIKiTrH1srGGINyp4t8dRA-Pa8QUg.4j7rGU-09z4EJVUv9KripBO7gqTBh5yFSBSWRT7ta0Qg.PNG.maplesosser/image.png?type=w966',
];

function Review() {
  const [count, setCount] = useState(2);
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const slideRef = useRef(null);
  const handleStar = index => {
    for (let i = 0; i < 5; i++) {
      if (i < index) clicked[i] = true;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ReviewContainer>
      <ReviewTitle>
        <div className="reviewTitle">REVIEW({count})</div>
        <div className="arrows">
          <i class="fas fa-arrow-left"></i>
          <i class="fas fa-arrow-right"></i>
        </div>
      </ReviewTitle>

      <div className="reviewStar">
        {clicked.map((star, idx) => {
          return <i key={idx} onClick={() => handleStar(star)} className="far fa-star" id={clicked[idx] ? 'red' : null}></i>;
        })}
      </div>

      <ReviewContent>
        {IMG_REVIEW.map((item, idx) => {
          return <IMG src={item} key={idx} />;
        })}
        ;
      </ReviewContent>
      <ReviewList></ReviewList>
    </ReviewContainer>
  );
}

const ReviewContainer = styled.div`
  border-top: 1px solid black;
  padding: 24px 0 70px 0;
  width: 85%;
  margin: 0 auto;
  .reviewTitle {
    font-size: 36px;
    font-weight: 700;
  }
  .reviewStar {
    margin-top: 10px;
    svg {
      color: #c7c7c7;
      cursor: pointer;
    }
    &:hover svg {
      color: rgb(212, 180, 0);
    }

    svg:hover ~ svg {
      color: #c7c7c7;
    }

    #red {
      color: red;
    }
  }
`;

const ReviewTitle = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  .arrows {
    .fa-arrow-right {
      margin-left: 20px;
    }
  }
`;

const ReviewContent = styled.div`
  display: flex;
`;

const ReviewList = styled.div`
  overflow: hidden;
  width: 100%;
`;

const IMG = styled.img`
  width: 50%;
  height: 50vh;
`;

export default Review;
