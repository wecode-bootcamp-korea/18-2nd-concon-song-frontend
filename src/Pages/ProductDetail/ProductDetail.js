import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductContainer from './ProductContainer/ProductContainer';
import ProductInfo from './ProductInfo/ProductInfo';

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const scrollBottom = () => {
    window.scrollTo(100, 1500, { behavior: 'smooth' });
  };

  useEffect(() => {
    fetch('data/productData.json')
      //   fetch(`http://10.58.7.243:8000/product/${id}`)
      .then(res => res.json())
      .then(res => setProduct(...res.results));
  }, []);

  return (
    <ProductMain>
      <ProductContainer product={product} />
      <ProductInfo product={product} scrollBottom={scrollBottom} />
    </ProductMain>
  );
}

const ProductMain = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 6px auto 0;
`;

export default ProductDetail;
