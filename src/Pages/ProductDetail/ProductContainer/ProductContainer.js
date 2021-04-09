import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Review from './Review/Review';
import Community from './Community/Community';
import RecommendBoard from './Recommend/RecommendBoard';

function ProductContainer({ handleStar, product, product: { name, id, description, images } }) {
  const [showDetail, setShowDetail] = useState(false);
  const [moreText, setMoreText] = useState(true);

  const showMore = () => {
    setShowDetail(!showDetail);
    setMoreText(!moreText);
  };

  return (
    <Products>
      <MainImage>{images && <img className="mainImage" src={images[0]} alt="mainImg" />}</MainImage>
      <SubContainer>
        {images &&
          images.slice(1, images.length).map(images => {
            return (
              <SubImage key={id}>
                <img src={images} alt="subImage" />
              </SubImage>
            );
          })}
        <button className="btnshowMore" onClick={showMore}>
          {moreText ? '더보기+' : '닫기-'}
        </button>
        <DetailBox>
          {!moreText && (
            <ProductInfo>
              <DetailContent>{name}</DetailContent>
              <ProductDetail>{description}</ProductDetail>
            </ProductInfo>
          )}
        </DetailBox>
      </SubContainer>
      {product.length !== 0 && <RecommendBoard product={product} />}
      <Community />
    </Products>
  );
}

const Products = styled.div`
  display: flex;
  flex-direction: column;
  height: 600%;
  width: 980px;
  padding-bottom: 100px;
  img {
    width: 100%;
  }
`;

const MainImage = styled.div``;

const SubContainer = styled.div`
  width: 85%;
  margin: -40px auto 20px;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;

  .btnshowMore {
    border: none;
    outline: none;
    background: transparent;
    color: #757575;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 20px;
  }
`;

const SubImage = styled.div`
  margin-bottom: 51px;
  width: 49%;
  display: flex;
  flex-wrap: wrap;
`;
const DetailBox = styled.div``;

const DetailContent = styled.div`
  padding: 40px 0;
  font-size: 24px;
  font-weight: normal;
`;

const ProductInfo = styled.div``;

const ProductDetail = styled.div`
  font-size: 14px;
  line-height: 1.15;
  font-family: 'proxima nova', 'proxima-nova', 'Nanum Gothic', Helvetica, Arial, sans-serif;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  margin-bottom: 50px;
`;

export default ProductContainer;
