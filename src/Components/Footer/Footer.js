import React from 'react';
import styled from 'styled-components';

const Lyrics = [
  { data: '(위) 컨버스 컨버스 신나는노래' },
  { data: '나도 한번 불러본다' },
  { data: '쿵쿵따리 쿵쿵따 짜리자짜' },
  { data: '컨버스 노래 가사는' },
  { data: '우리가 사는 세상 이야기' },
  { data: '오늘 하루 힘들어도' },
  { data: '내일이 있으니 행복하구나' },
  { data: '컨버스 컨버스 신나는노래' },
  { data: '우리 한번 불러보자' },
  { data: '컨버스 컨버스 서글픈 노래' },
  { data: '가슴치며 불러보자' },
  { data: '컨버스 노래 가사는' },
  { data: '사랑과 이별 눈물이구나' },
  { data: '음정 박자 따로지만 넘치는 감정으로 부르는 노래' },
  { data: '쿵쿵따리 쿵쿵따 신나는 노래' },
  { data: '우리 한번 불러보자' },
  { data: '쿵쿵따리 쿵쿵따 서글픈 노래' },
  { data: '가슴치며 불러보자' },
  { data: '컨버스 노래 가사는' },
  { data: '사랑과 이별 눈물이구나' },
  { data: '음정 박자 따로지만' },
  { data: '넘치는 감정으로 부르는 노래' },
  { data: '넘치는 감정으로 부르는 노래' },
  { data: '짠짠' },
];

const Footer = () => {
  return (
    <footer>
      <Foot>
        <Element>
          <p>FOLLOW US</p>
          <div>
            <div>
              <i class="fab fa-facebook-f" />
            </div>
            <div>
              <i class="fab fa-instagram" />
            </div>
          </div>
        </Element>
        <Element>
          <p>SUPPORT</p>
          <ul>
            <li>고객지원센터</li>
            <li>1:1 문의</li>
            <li>주문/배송 조회</li>
          </ul>
        </Element>
        <Element>
          <p>INFORMATION</p>
          <ul>
            <li>컨버스에 대하여</li>
            <li>회원가입</li>
            <li>매장안내</li>
            <li>공지사항</li>
          </ul>
        </Element>
        <Element>
          <p>POLICY</p>
          <ul>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
          </ul>
        </Element>
        <Element>
          <p>FAMILY SITES</p>
          <ul>
            <li>Nike</li>
            <li>Jordan</li>
          </ul>
        </Element>
      </Foot>
      <Company>
        <div>
          <address>
            {Lyrics.map((lyric, index) => (
              <span key={index}>{lyric.data}</span>
            ))}
          </address>
          <p>2021 Wecode 18th conconSong. All Rights Reserved.</p>
        </div>
        <div>
          <dl>
            <dt>소비자피해 무보증무보험</dt>
            <dd>
              고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 구매안전서비스 소비자피해보증보험 서비스를 이용하실 수 없습니다.
              <br />
              보증대상 : 없음
              <br />
              보증보험 가입사실 확인불가
            </dd>
          </dl>
        </div>
      </Company>
    </footer>
  );
};

const Foot = styled.div`
  display: table;
  width: 100%;
  height: 161px;
  border-top: ${props => props.theme.border};
  color: #757575;
`;

const Element = styled.div`
  display: table-cell;
  width: 20%;
  padding: 30px 0 0 40px;
  &:not(:first-child) {
    border-left: ${props => props.theme.border};
  }

  div {
    display: flex;
    align-items: center;

    div {
      justify-content: center;
      width: 50px;
      height: 50px;
      border-top: ${props => props.theme.border};
      border-right: ${props => props.theme.border};
      border-bottom: ${props => props.theme.border};
      &:first-child {
        border-left: ${props => props.theme.border};
      }

      svg {
        font-size: 14px;
        color: black;
      }
    }
  }

  p {
    margin-bottom: 15px;
    color: black;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.025em;
  }

  li {
    font-size: 12px;
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

const Company = styled.div`
  display: flex;
  background-color: black;
  padding: 38px 20px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.025em;
  color: #9b9b9b;

  div {
    max-width: 698px;
    margin: 0 auto;
    padding: 0 8px;
    &:last-child {
      max-width: 390px;
    }

    span:not(:first-child)::before {
      content: '';
      display: inline-block;
      width: 1px;
      height: 12px;
      margin: 0 8px;
      vertical-align: middle;
      background-color: #353535;
    }

    p {
      margin-top: 22px;
    }
  }
`;

export default Footer;
