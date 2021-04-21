import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartList from './CartList';
import OrderAmount from '../Cart/OrderAmount';

const Cart = () => {
  // 새로운 상태 값 정의
  const [cartItem, setCartItem] = useState([]); // useState: 배열 return[상태값, 상태를 바꿀 수 있는 값], useState(초기 값)
  const [count, setCount] = useState(1);

  // side effect (= componentDidMount & componentUpdate)
  // 장바구니 데이터 받기
  useEffect(() => {
    fetch('data/cartItem.json', {
      // method: 'GET',
      // body: JSON.stringfy({}),
    })
      .then(res => res.json())
      .then(res => setCartItem(res.cartItem));
    window.scrollTo(0, 0);
  }, []); // 배열 안의 인자 값 상태가 바뀌었을 때만, 첫번째 인자인 ()콜백 함수 호출

  // 아이템 삭제
  const handleDelete = id => {
    const restItems = cartItem.filter(item => item.id !== id);
    setCartItem(restItems);
  };

  // 장바구니 비우기
  const deleteAll = () => {
    setCartItem([]);
  };

  //수량 변경
  const handleCount = e => {
    const insertNum = /^[0-5]*$/;

    if (!insertNum.test(e.target.value)) return;
    if (Number(e.target.value) > 5) {
      e.target.value = 5;
    }
    setCount(Number(e.target.value));
  };

  const handlePlus = item => {
    const index = cartItem.indexOf(item);
    const itemArray = [...cartItem];
    const count = itemArray[index].quantity + 1;

    itemArray[index].quantity = count >= 5 ? 5 : count;
    setCartItem(itemArray);
  };

  const handleMinus = item => {
    const index = cartItem.indexOf(item);
    const itemArray = [...cartItem]; // 배열 복제
    const count = itemArray[index].quantity - 1;

    itemArray[index].quantity = count >= 1 ? count : 1;
    setCartItem(itemArray);
  };

  //main effect
  return (
    <Container>
      <CartList
        cartItem={cartItem}
        handleCount={handleCount}
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        handleDelete={handleDelete}
        deleteAll={deleteAll}
      />
      <OrderAmount cartItem={cartItem} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`;

export default Cart;
