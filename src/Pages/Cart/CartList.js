import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import CartItem from './CartItem';

const CartList = ({ cartItem, handleCount, handlePlus, handleMinus, handleDelete, deleteAll }) => {
  const history = useHistory();
  return (
    <Container>
      <CartTitle>장바구니({cartItem.length})</CartTitle>
      <CartContainer>
        {cartItem.length ? (
          cartItem.map((cartItem, idx) => (
            <CartItem
              key={idx}
              item={cartItem}
              handleCount={handleCount}
              handlePlus={handlePlus}
              handleMinus={handleMinus}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <>
            <CartEmpty> 장바구니에 담긴 상품이 없습니다.</CartEmpty>
            <CartText>척테일러, 척 70, 잭퍼셀, 원스타 등 지금 컨버스의 다양한 상품을 찾아보세요.</CartText>
            <ShoppingButton onClick={() => history.push('/main')}>쇼핑 계속하기</ShoppingButton>
          </>
        )}
      </CartContainer>
      <CartClearBtn onClick={() => deleteAll()}>장바구니 비우기</CartClearBtn>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 20px;
`;

const CartTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #444;
`;

const CartContainer = styled.div`
  padding-top: 20px;
  border-top: 1px solid #000;
`;

const CartEmpty = styled.p`
  width: 705px;
  padding: 20px 0;
  text-align: center;
  letter-spacing: -0.025em;
  font-size: 23px;
  font-weight: bold;
`;

const CartText = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

const ShoppingButton = styled.button`
  display: block;
  width: 330px;
  height: 50px;
  margin: 0 auto;
  margin-top: 30px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  background-color: #000;
  border: 1px solid;
  transition: 250ms;

  &:hover {
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
`;

// 장바구니 비우기
const CartClearBtn = styled.button`
  float: right;
  width: 140px;
  height: 40px;
  margin-top: 20px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: -0.025em;
  border: 1px solid #e5e5e5;
  background-color: #fff;
`;

export default CartList;
