import React from 'react';
import styled from 'styled-components';

const OrderModal = ({ handleModal }) => {
  const handleConfirm = () => {
    handleModal();
    setTimeout(() => {
      alert('결제되었습니다');
    }, 50);
  };

  return (
    <ModalBackground>
      <ModalDialog>
        <ModalText>주문하시겠습니까?</ModalText>
        <CancelBtn onClick={handleModal}>취소</CancelBtn>
        <ConfirmBtn onClick={handleConfirm}>확인</ConfirmBtn>
      </ModalDialog>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalDialog = styled.div`
  width: 450px;
  height: 210px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
`;

const ModalText = styled.p`
  margin: 40px 0 50px 0;
  text-align: center;
  font-size: 18px;
  letter-spacing: -0.025em;
`;

const CancelBtn = styled.button`
  width: 200px;
  height: 50px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.025em;
  border: 1px solid #000;
  background-color: #fff;
`;

const ConfirmBtn = styled(CancelBtn)`
  margin-left: 10px;
  color: #fff;
  background-color: #000;
`;

export default OrderModal;
