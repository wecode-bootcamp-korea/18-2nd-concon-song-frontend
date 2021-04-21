import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import FilterModal from './FilterModal';

const CategoryList = [{ list: 'Women' }, { list: 'Men' }, { list: 'Kids' }, { list: 'Collection' }];

function Nav() {
  const handlelogOut = () => {
    const { Kakao } = window;
    Kakao.Auth.logout();
    localStorage.removeItem('conconsong_token');
  };
  const [isFilterModal, setIsFilterModal] = useState(false);

  const getModalStatus = () => {
    setIsFilterModal(false);
  };

  return (
    <Header>
      <NavContainer>
        <Link to="/main">
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
              {localStorage.conconsong_token ? (
                <Link to="/main" onClick={handlelogOut}>
                  Log Out
                </Link>
              ) : (
                <Link to="/login">Sign In</Link>
              )}
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
              <Button isFilterModal={isFilterModal} onClick={() => setIsFilterModal(!isFilterModal)}>
                <BtnText isFilterModal={isFilterModal}>검색</BtnText>
                <SearchIcon>
                  <i class="fas fa-search"></i>
                </SearchIcon>
              </Button>
            </Menu>
          </MenuContainer>
        </Utility>
      </NavContainer>
      <FilterModalContainer isFilterModal={isFilterModal}>
        <FilterModal getModalStatus={getModalStatus} />
      </FilterModalContainer>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
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
  margin: 0 auto;

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
  width: 70%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  position: relative;
  width: 60px;
  height: 60px;
  border: none;
  background-color: black;
  transition: 400ms;
  ${({ isFilterModal }) =>
    isFilterModal &&
    `
    width: 220px;
  `}
  svg {
    color: white;
  }
`;

const BtnText = styled.span`
  color: white;
  text-align: left;
  position: absolute;
  top: 25px;
  left: 25px;
  transition: 400ms;
  ${({ isFilterModal }) =>
    isFilterModal === false &&
    `
    opacity:0;
  `};
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
`;

const FilterModalContainer = styled.div`
  visibility: hidden;
  max-width: 1440px;
  height: 0;
  margin: 0 auto;
  opacity: 0;
  ${({ isFilterModal }) =>
    isFilterModal &&
    `
    visibility: visible;
    transition: 500ms;
    opacity: 1;
    height: 100%
    `}
`;

export default withRouter(Nav);
