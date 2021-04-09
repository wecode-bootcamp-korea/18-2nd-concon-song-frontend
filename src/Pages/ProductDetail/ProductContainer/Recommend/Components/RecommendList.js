import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function RecommendList({ product, product: { related_collection, collection } }) {
  const history = useHistory();

  const handleCollection = e => {
    const endPoint = e.target.id;
    history.push(`/product/${endPoint}`);
  };
  return (
    <Recommends>
      <div className="collectionTitle">Collection : {collection}</div>
      <div className="collectionImage">
        {related_collection.length &&
          related_collection.map((item, idx) => (
            <CollectionImg onClick={handleCollection} key={idx} src={item.image} alt="collectImg" id={item.id} />
          ))}
      </div>
    </Recommends>
  );
}

const Recommends = styled.div`
  display: flex;
  flex-direction: column;

  .collectionTitle {
    margin: 10px 0;
    font-weight: bold;
  }

  .collectionImage {
    display: grid;
    grid-column-gap: 14px;
    grid-row-gap: 14px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CollectionImg = styled.img`
  width: 100%;
  height: 250px;
  cursor: pointer;
`;

export default RecommendList;
