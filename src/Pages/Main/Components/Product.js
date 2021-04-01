import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

function Product({ product: { id, name, price, image } }) {
  const [isFavorite, setFavorite] = useState(false);
  const history = useHistory();
  const toDetail = e => {
    const { localName } = e.target;
    if (localName === 'svg' || localName === 'path' || localName === 'button') return;
    else history.push(`/product/${id}`);
  };

  return (
    <ProductContainer onClick={toDetail}>
      <Img src={image[0]} />
      <ImgHover src={image[1]} />
      <AddFavorite isFavorite={isFavorite} onClick={() => setFavorite(!isFavorite)}>
        <i className="fas fa-heart" />
      </AddFavorite>
      <WishSuccess isFavorite={isFavorite}>LOVE IT</WishSuccess>
      <WishSuccess isFavorite={isFavorite}>LOVE IT</WishSuccess>
      <WishSuccess isFavorite={isFavorite}>LOVE IT</WishSuccess>
      <WishSuccess isFavorite={isFavorite}>LOVE IT</WishSuccess>
      <WishSuccess isFavorite={isFavorite}>LOVE IT</WishSuccess>
      <InfoContainer>
        <Info>{name}</Info>
        <Info>{Number(price).toLocaleString()} 원</Info>
      </InfoContainer>
    </ProductContainer>
  );
}

const Img = styled.img`
  position: absolute;
  width: 252px;
  height: 315px;
  transition: 600ms;
`;

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  width: 268px;
  margin-bottom: 16px;
  padding: 0 8px;
  cursor: pointer;
  &:hover ${Img} {
    opacity: 0;
  }
`;

const ImgHover = styled.img`
  width: 252px;
  height: 315px;
`;

const loveIt = keyframes`
  0% {
    opacity : 0;
  }
  50% {
    opacity : 1;
  }
  100% {
    opacity : 0;
  }
`;

const WishSuccess = styled.span`
  position: absolute;
  left: 26px;
  right: 0;
  margin: 0 auto;
  width: 100%;
  font-size: 60px;
  pointer-events: none;
  opacity: 0;
  color: #f9d5e5;
  &:nth-of-type(1) {
    top: 60px;
    animation-delay: 60ms;
    color: #eeac99;
  }
  &:nth-of-type(2) {
    top: 120px;
    animation-delay: 120ms;
    color: #ff6f69;
  }
  &:nth-of-type(3) {
    top: 180px;
    animation-delay: 180ms;
    color: #e06377;
  }
  &:nth-of-type(4) {
    top: 240px;
    animation-delay: 240ms;
    color: #c83349;
  }
  ${({ isFavorite }) =>
    isFavorite &&
    css`
      animation: ${loveIt} 700ms;
    `}
`;

const AddFavorite = styled.button`
  position: absolute;
  width: 44px;
  height: 44px;
  padding: 0;
  font-size: 18px;
  background: none;
  border: none;
  &:hover {
    font-size: 25px;
    transition: 250ms;
  }
  svg {
    opacity: 0.4;
  }
  ${({ isFavorite }) => isFavorite && `svg{opacity:1; color:#ff6f69;}`}
`;

const InfoContainer = styled.div`
  margin-top: 12px;
`;

const Info = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.025em;
`;

export default Product;
