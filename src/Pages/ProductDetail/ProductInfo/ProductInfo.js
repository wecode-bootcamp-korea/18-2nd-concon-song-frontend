import React, { Component } from 'react';
import styled from 'styled-components';
import ShoesSummary from './ShoesSummary/ShoesSummary';
import ShoesSize from './ShoesSize/ShoesSize';

function ProductInfo({ scrollBottom, product }) {
  return (
    <ProductInformation>
      <ShoesSummary scrollBottom={scrollBottom} product={product} />
      <ShoesSize product={product} />
    </ProductInformation>
  );
}

const ProductInformation = styled.div`
  width: 400px;
  height: 1000px;
  margin: 0 auto;
  position: sticky;
  top: 30px;
`;

export default ProductInfo;
