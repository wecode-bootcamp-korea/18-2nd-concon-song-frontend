import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryList = [{ list: 'Women' }, { list: 'Men' }, { list: 'Kids' }, { list: 'Collection' }];

const Nav = () => {
  return (
    <Header>
      <NavContainer>
        <Link to="/">
          <img alt="logo" src="https://media.vlpt.us/images/lang/post/faa320b6-4551-4dd6-ae80-15edd5803fb2/astro-space.png" />
        </Link>
        <Category>
          <MenuContainer>
            {CategoryList.map((menu, index) => (
              <Menu key={index}>{menu.list}</Menu>
            ))}
          </MenuContainer>
        </Category>
        <Utility>
          <MenuContainer>
            <Menu>
              <Link to="/login">Sign In</Link>
            </Menu>
            <Menu>
              <i class="far fa-user" />
            </Menu>
            <Menu>
              <i class="far fa-heart" />
            </Menu>
            <Menu>
              <Link to="/cart">
                <i class="fas fa-shopping-cart" />
              </Link>
            </Menu>
            <Menu>
              <button onClick={() => alert('검색 기능은 없습니다')}>
                <i class="fas fa-search"></i>
              </button>
            </Menu>
          </MenuContainer>
        </Utility>
      </NavContainer>
    </Header>
  );
};

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  background-color: white;
  z-index: 9999;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  height: 60px;
  margin: 0 48px;
  padding-left: 20px;

  a {
    img {
      width: 120px;
      height: 14px;
    }
  }
`;

const Category = styled.nav`
  width: 60%;
  margin-left: 18px;
`;

const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const Menu = styled.li`
  padding: 0 11px;
  font-size: 14px;
  font-weight: 600;
  &:last-child {
    padding-right: 0;
  }

  a {
    color: black;
  }
`;

const Utility = styled.aside`
  width: 40%;
  display: flex;
  justify-content: flex-end;

  button {
    width: 60px;
    height: 60px;
    border: none;
    background-color: black;

    svg {
      color: white;
    }
  }
`;

export default Nav;
