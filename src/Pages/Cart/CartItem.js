import React from 'react';
import styled from 'styled-components';

function CartItem({ item, item: { id, img, name, color, size, quantity, price }, handleCount, handlePlus, handleMinus, handleDelete }) {
  return (
    <ItemBox>
      <ProductImg src={img} alt={`${name}의 상품 이미지`} />
      <ProductContainer>
        <ProductInfo>
          <ProductName>{name}</ProductName>
          <ProductOptions>
            <span>{color}</span>
            <span> / </span>
            <span>{size}</span>
            <p>수량: {quantity}</p>
          </ProductOptions>
        </ProductInfo>
        <ItemOption>
          <Price>{(price * quantity).toLocaleString()}원</Price>
          <CountBtnContainer>
            <CountBtn onClick={() => handleMinus(item)}>
              <i className="fas fa-minus" />
            </CountBtn>
            <CountInput onChange={handleCount} value={quantity} />
            <CountBtn onClick={() => handlePlus(item)}>
              <i className="fas fa-plus" />
            </CountBtn>
          </CountBtnContainer>
          {5 <= quantity && <CountAlert>5개까지 구매 가능</CountAlert>}
          <DeleteBtn onClick={() => handleDelete(id)}>삭제</DeleteBtn>
        </ItemOption>
      </ProductContainer>
    </ItemBox>
  );
}

const ItemBox = styled.div`
  display: flex;
  width: 705px;
  height: 163px;
  padding: 20px;
  border: 1px solid #e5e5e5;
  color: #000000;
`;

const ProductImg = styled.img`
  width: 98px;
  height: 123px;
  margin-right: 15px;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ProductInfo = styled.div`
  flex-direction: column;
`;

const ProductName = styled.h4`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.05em;
`;

const ProductOptions = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
`;

const CountBtnContainer = styled.div`
  display: flex;
  margin-top: 16px;
`;

const CountBtn = styled.button`
  width: 36px;
  height: 36px;
  font-size: 12px;
  background-color: #fafafa;
  border: 1px solid #e5e5e5;

  // +-아이콘
  svg {
    color: gray;
  }
`;

const CountInput = styled.input`
  width: 36px;
  height: 36px;
  text-align: center;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  border-right: none;
  border-left: none;
  font-size: 14px;
`;

const ItemOption = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountAlert = styled.div`
  padding-top: 8px;
  text-align: right;
  font-size: 12px;
  color: red;
`;

const Price = styled.span`
  text-align: right;
`;

const DeleteBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  text-decoration: underline;
  color: #757575;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

export default CartItem;
