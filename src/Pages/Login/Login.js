import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { CCS_KAKAO_LOGIN_API } from '../../config';

class Login extends Component {
  kakaoLoginHandler = () => {
    const { Kakao } = window;
    const self = this;

    Kakao.Auth.login({
      success: function (authObj) {
        fetch(CCS_KAKAO_LOGIN_API, {
          method: 'GET',
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem('conconsong_token', res.conconsong_token);

            if (localStorage.setItem) {
              alert('로그인 성공!');
              self.props.history.push('/main');
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  render() {
    return (
      <LoginContainer>
        <LoginText>로그인</LoginText>
        <LoginInput type="id" placeholder="이메일 형태로  입력해주세요." />
        <LoginInput type="password" placeholder="비밀번호(영문/숫자/특수문자 조합 8자 이상)" />
        <LinksBox>
          <div>
            <input type="checkBox" id="LoginCheckBox" />
            <label for="LoginCheckBox">로그인 상태 유지</label>
          </div>
          <LoginLinks to="/">아이디/비밀번호 찾기</LoginLinks>
        </LinksBox>
        <LoginBtn>로그인</LoginBtn>
        <LoginBtn kakao onClick={this.kakaoLoginHandler}>
          <i class="fas fa-comment"></i>
          &nbsp;카카오 계정으로 1초 로그인
        </LoginBtn>
        <LinksBox>
          <LoginLinks to="/">회원가입</LoginLinks>
          <LoginLinks to="/">비회원 주문조회</LoginLinks>
        </LinksBox>
        <Notice>
          <span>지금 회원으로 가입하시고, 특별한 멤버십 혜택과 다양한 회원 전용 상품을 만나보세요.</span>
        </Notice>
      </LoginContainer>
    );
  }
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px auto;
  width: 600px;
  height: 800px;
  border: 1px solid #b5b5b5;
`;

const LoginText = styled.div`
  margin: 100px auto 30px;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;

const LoginInput = styled.input`
  width: 480px;
  height: 60px;
  margin-top: 15px;
  padding: 5px 15px;
  border: 1px solid #b5b5b5;
  font-size: 16px;
`;

const LinksBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 480px;
  margin: 30px 0;
  text-decoration: none;
`;

const LoginLinks = styled(Link)`
  color: black;
  border-bottom: 1px solid black;
`;

const LoginBtn = styled.button`
  width: 480px;
  height: 60px;
  border: none;
  margin-top: 10px;
  background-color: ${props => (props.kakao ? '#FEE500' : 'black')};
  color: ${props => (props.kakao ? 'black' : 'white')};
  font-size: 18px;
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
  height: 120px;
  padding: 50px;
  background-color: #d8d8d8;
`;

export default withRouter(Login);
