import React, { useState } from 'react';
import styled from 'styled-components';
import OrderModal from './OrderModal';

const OrderAmount = ({ cartItem }) => {
  const totalPrice = cartItem.length !== 0 && cartItem.map(total => total.quantity * total.price).reduce((a, b) => a + b);
  const price = totalPrice ? totalPrice.toLocaleString() : 0;
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    // document.body.style.overflow = modal ? 'auto' : 'hidden';
    setModal(!modal);
  };

  return (
    <AmountBox>
      <CartTitle>주문금액</CartTitle>
      <OrderTotals>
        <PriceBox>
          <div>
            <PriceText>상품금액</PriceText>
            <PriceValue>{price} 원</PriceValue>
          </div>
          <div>
            <PriceText>배송비</PriceText>
            <PriceValue>0 원</PriceValue>
          </div>
          <div>
            <PriceText>총 할인 금액</PriceText>
            <PriceValue>0 원</PriceValue>
          </div>
          <TotalPrice>
            <TotalPriceText>총 결제 금액</TotalPriceText>
            <TotalPriceValue>{price} 원</TotalPriceValue>
          </TotalPrice>
        </PriceBox>
        <OrderBtn onClick={handleModal}>주문하기</OrderBtn>
      </OrderTotals>
      {modal && <OrderModal handleModal={handleModal} />}
    </AmountBox>
  );
};

const AmountBox = styled.div`
  width: 325px;
  height: 345px;
  margin-left: 30px;
  padding: 20px;
  background-color: #f4f4f4;
`;

const CartTitle = styled.h3`
  display: block;
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.025em;
  color: #444;
`;

const OrderTotals = styled.div`
  width: 282px;
  height: 265px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
`;

const PriceBox = styled.div`
  height: 175px;
  border-bottom: 1px solid #e5e5e5;
  padding: 20px;

  div {
    margin-bottom: 18px;
  }
`;

const PriceText = styled.span`
  font-size: 14px;
  letter-spacing: -0.025em;
  color: #757575;
`;

const PriceValue = styled.span`
  float: right;
  font-size: 16px;
`;

const TotalPrice = styled.div`
  margin-top: 30px;
`;

const TotalPriceText = styled.span`
  font-weight: bold;
  color: #000000;
  font-size: 18px;
  /* float: ${props => props.value && 'right'}; */
`;

const TotalPriceValue = styled(TotalPriceText)`
  float: right;
`;

const OrderBtn = styled.button`
  width: 242px;
  height: 50px;
  margin: 20px;
  padding: 16px 0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  color: #ffffff;
  background-color: #000000;
  border: 1px solid #000000;
  transition: 250ms;

  &:hover {
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #000000;
  }
`;

export default OrderAmount;
