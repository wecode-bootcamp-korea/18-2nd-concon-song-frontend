import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductContainer from './ProductContainer/ProductContainer';
import ProductInfo from './ProductInfo/ProductInfo';
import { API } from '../../config';

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const scrollBottom = () => {
    window.scrollTo(100, 1800, { behavior: 'smooth' });
  };

  useEffect(() => {
    fetch(`${API}/product/${id}`)
      .then(res => res.json())
      .then(res => setProduct(...res.results));
  }, []);

  return (
    <ProductMain>
      {product.length !== 0 && <ProductContainer product={product} />}
      <ProductInfo product={product} scrollBottom={scrollBottom} />
    </ProductMain>
  );
}

const ProductMain = styled.div`
  display: flex;
  max-width: 1440px;
  margin: 100px auto 0;
`;

export default ProductDetail;
