import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

function FilterModal({ getModalStatus }) {
  const history = useHistory();
  const [productList, setProductList] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const handleFilterProduct = e => {
    setFilteredProduct(productList.filter(product => product.name.indexOf(e.target.value) !== -1));
    e.target.value === '' && setFilteredProduct([]);
  };

  useEffect(() => {
    fetch('data/khData.json')
      .then(res => res.json())
      .then(res => setProductList(res.product));
  }, []);

  const sendModalStatus = () => {
    getModalStatus(false);
    history.push('/searchResult');
  };

  return (
    <ModalContainer>
      <Pic>
        <ModalImg
          alt="modal image"
          src="https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1608&q=80"
        />
      </Pic>
      <Filter>
        <SearchTitle>검색</SearchTitle>
        <FilterInputContainer>
          <FilterInput placeholder="검색어를 입력해 주세요" onChange={handleFilterProduct} />
          <SearchIconBtn onClick={sendModalStatus}>
            <i class="fas fa-search"></i>
          </SearchIconBtn>
        </FilterInputContainer>
        <FilterResult>
          {filteredProduct
            .map(matchProduct => (
              <Link to={`/product/${matchProduct.id}`}>
                <p onClick={sendModalStatus}>{matchProduct.name}</p>
              </Link>
            ))
            .slice(0, 5)}
        </FilterResult>
      </Filter>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  display: flex;
`;

const Pic = styled.div`
  height: 400px;
  border: 2px solid black;
  background-color: white;
`;

const ModalImg = styled.img`
  height: 100%;
`;

const Filter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 400px;
  border: 2px solid black;
  border-left: none;
`;

const SearchTitle = styled.span`
  position: absolute;
  top: 80px;
  right: 74%;
  font-size: 35px;
`;

const FilterInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 40%;
  width: 60%;
`;

const FilterInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 15px;
  border: none;
  border-bottom: 2px solid black;
  font-size: 20px;
`;

const SearchIconBtn = styled.button`
  position: absolute;
  right: 15px;
  border: none;
  background-color: inherit;
  font-size: 18px;
`;

const FilterResult = styled.div`
  position: absolute;
  top: 55%;
  width: 60%;
  font-size: 18px;

  p {
    height: 30px;
    padding: 15px;
    text-decoration: none;
    color: black;
  }
`;

export default FilterModal;
