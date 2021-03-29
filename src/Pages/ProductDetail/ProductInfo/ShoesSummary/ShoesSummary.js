import React from 'react';
import styled from 'styled-components';

const STAR_ARRAY = [0, 1, 2, 3, 4];

function ShoesSummary({ scrollBottom, product, product: { name, price, introduction, collection, related_collection } }) {
  return (
    <ProductSummary>
      <h1 className="productName">{name}</h1>
      <div className="productPrice">{Math.floor(price).toLocaleString()} 원</div>
      <div className="productShowDetail">
        {introduction}
        <p onClick={scrollBottom} className="btnMore">
          더보기
        </p>
      </div>
      {}
      <div className="productReview">
        {STAR_ARRAY.map((star, idx) => {
          return <i key={idx} class="far fa-star"></i>;
        })}
      </div>
    </ProductSummary>
  );
}

const ProductSummary = styled.div`
  margin: 30px 0;
  border-bottom: 1px solid #e5e5e5;

  .productName {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
  }

  .productPrice {
    margin: 10px 0;
    font-size: 18px;
  }

  .productShowDetail {
    font-size: 16px;
    line-height: 24px;
    margin-top: 1em;

    .btnMore {
      color: #757575;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .productReview {
    margin-top: 1em;
    font-size: 16px;
    padding: 10px 0;
    border-bottom: 1px solid #e5e5e5;
    & svg {
      color: #c7c7c7;
      cursor: pointer;
    }
    &:hover svg {
      color: rgb(212, 180, 0);
    }

    svg:hover ~ svg {
      color: #c7c7c7;
    }
  }
`;

export default ShoesSummary;
