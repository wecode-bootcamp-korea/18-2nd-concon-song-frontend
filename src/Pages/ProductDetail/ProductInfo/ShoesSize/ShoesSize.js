import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ShoesModal from './ShoesModal.js/ShoesModal';
import { API } from '../../../../config';

function ShoesSize({ product, product: { size, id } }) {
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(1);
  const [isLogin, setLogin] = useState(false);
  const [sizeClick, setClick] = useState(0);
  const [shoesSize, setShoesSize] = useState(230);
  const history = useHistory();
  // moreRef = React.createRef();

  useEffect(() => {
    localStorage.conconsong_token && setLogin(true);
  }, []);

  const handleDecrement = () => {
    setCount(count < 1 ? 0 : count - 1);
  };

  const handleIncrement = () => {
    setCount(count < 5 ? count + 1 : 5);
  };

  const handleCount = e => {
    const insertNum = /^[0-9]*$/;
    if (!insertNum.test(e.target.value)) return;
    if (Number(e.target.value) > 5) {
      e.target.value = 5;
    }
    setCount(Number(e.target.value));
  };

  const handleModal = () => {
    document.body.style.overflow = modal ? 'auto' : 'hidden';
    setModal(!modal);
  };

  const handleSize = (size, idx) => {
    setClick(idx);
    setShoesSize(size);
  };

  const handleLogin = () => {
    history.push('/login');
  };

  const handleCart = () => {
    fetch(`${API}/order/product/1`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.conconsong_token,
      },
      body: JSON.stringify({
        //id: product.id,
        size_id: sizeClick,
        quantity: count,
      }),
    }).then(res => res.json());

    window.confirm('장바구니에 담았습니다. 장바구니로 이동하시겠습니까?') && history.push('/cart');
  };

  return (
    <div className="shoesSize">
      <ButtonSize>
        <button className="btnSizeAgony">사이즈가 고민되면 클릭하세요! </button>
        <button className="sizeGuide" onClick={handleModal}>
          사이즈 가이드
        </button>
      </ButtonSize>
      <SizeSelector>
        {size &&
          size.map((size, idx) => {
            return (
              <div key={idx} onClick={() => handleSize(size, idx)} id="sizeSelectorBox" className={sizeClick === idx ? 'selectSIze' : null}>
                {size}
              </div>
            );
          })}
      </SizeSelector>
      <CountBox>
        <button onClick={handleDecrement}>
          <i class="fas fa-minus"></i>
        </button>
        <input onChange={handleCount} value={count} />
        <button onClick={handleIncrement}>
          <i class="fas fa-plus"></i>
        </button>
        {count >= 5 && (
          <AlertCount>
            <span className="alertText">5개 까지 구매가능 합니다.</span>
          </AlertCount>
        )}
      </CountBox>
      {isLogin ? (
        <LoginOn>
          <Button onClick={handleCart}>장바구니</Button>
          <Button buy onClick={handleCart}>
            바로구매
          </Button>
          <div className="btnHeart">
            <i class="far fa-heart "></i>
          </div>
        </LoginOn>
      ) : (
        <LoginOff>
          <button className="btnLogin" onClick={handleLogin}>
            로그인
          </button>
        </LoginOff>
      )}
      <InfoDelevery>
        <span className="infodeleveryText">5만원이상 구매시 무료배송</span>
      </InfoDelevery>
      <DeleveryLink>
        <div>배송정보</div>
        <div>교환반품</div>
      </DeleveryLink>
      {modal && <ShoesModal handleModal={handleModal} />}
    </div>
  );
}

const ButtonSize = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btnSizeAgony {
    padding: 0 33px;
    line-height: 28px;
    text-align: center;
    font-size: 12px;
    color: white;
    background-color: black;
    cursor: pointer;
  }
  .sizeGuide {
    text-decoration: underline;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

const SizeSelector = styled.form`
  cursor: pointer;
  display: flex;
  margin: 30px 0;

  #sizeSelectorBox {
    border: 1px solid #e5e5e5;
    font-size: 14px;
    padding: 17px 23px;
  }

  .selectSIze {
    background-color: black;
    color: white;
  }
`;

const CountBox = styled.div`
  margin: 22px 0;
  input {
    width: 70px;
    height: 50px;
    font-weight: 600;
    background: transparent;
    border: 1px solid #e5e5e5;
    text-align: center;
  }
  button {
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid #e5e5e5;
    width: 50px;
    height: 50px;
  }
`;

const LoginOn = styled.div`
  display: flex;

  .btnCart {
    color: black;
  }
  .btnBuy {
    margin: 0 5px;
    padding: 13px 50px;
    color: white;
    background-color: black;
  }

  .btnHeart {
    padding: 13px 18px;
    border: 1px solid black;
    background: transparent;

    @keyframes heartBeat {
      50% {
        transform: scale(1.5);
      }
    }
    &:hover .fa-heart {
      will-change: transform;
      animation: heartBeat 1s linear infinite;
    }
  }
`;

const Button = styled.button`
  border: 1px solid black;
  background: transparent;
  font-weight: 600;
  font-size: 14px;
  padding: 15px 55px;
  color: ${props => (props.buy ? 'white' : 'black')};
  background-color: ${props => (props.buy ? 'black' : 'white')};
  margin: 0 ${props => (props.buy ? '5px' : 0)};
`;

const LoginOff = styled.div`
  .btnLogin {
    width: 100%;
    font-weight: 600;
    padding: 16px 0;
    font-size: 14px;
    text-align: center;
    background-color: black;
    color: white;
    border: none;
  }
`;
const AlertCount = styled.p`
  padding-top: 8px;
  font-size: 12px;
  color: #ff0000;
  line-height: 1;
`;
const InfoDelevery = styled.div`
  width: 100%;
  padding: 20px 0;
  margin: 24px 0;
  font-size: 12px;
  border: 1px solid #e5e5e5;
  text-align: center;
`;
const DeleveryLink = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  color: #757575;

  div {
    cursor: pointer;
    margin-left: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default ShoesSize;
