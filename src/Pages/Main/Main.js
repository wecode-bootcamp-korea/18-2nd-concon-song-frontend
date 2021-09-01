import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Product from './Components/Product';
import { API } from '../../config';

const CAROUSELS = [
  { id: 0, url: 'https://www.converse.co.kr/image/banner/16207973420.jpg' },
  { id: 1, url: 'https://www.converse.co.kr/image/banner/16202643640.jpg' },
  { id: 2, url: 'https://www.converse.co.kr/image/banner/16202644000.jpg' },
];

function Main() {
  const [carousel, setCarousel] = useState(0);
  const [products, setProducts] = useState([]);
  const [isFilter, setIsFilter] = useState(true);
  const [filter, setFilter] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [collectionList, setCollectionList] = useState([]);
  const [offset, setOffset] = useState(0);

  const LIMIT = 8;

  useEffect(() => {
    // fetch(`${API}/product${filterQuery}`)
    fetch('data/mainData.json')
      .then(res => res.json())
      .then(res => {
        setProducts(res.product);
        setColorList(res.filter_detail[0].color);
        setSizeList(res.filter_detail[0].size);
        setCollectionList(res.filter_detail[0].collection);
      });
    // window.addEventListener('scroll', infiniteScroll);
    // return () => window.addEventListener('scroll', infiniteScroll);
  }, [filter]);

  // useEffect(() => {
  //   fetch(`http://10.58.7.145:8000/product${query}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       setProducts(res.product);
  //       setColorList(res.filter_detail[0].color);
  //       setSizeList(res.filter_detail[0].size);
  //       setCollectionList(res.filter_detail[0].collection);
  //     });
  // }, [filter]);

  // setInterval(setCarousel(carousel + 1), 3000);

  const handleCarousel = e => {
    const carousels = document.getElementsByClassName('carousel');
    setCarousel(e.target.id);

    for (let i = 0; i < carousels.length; i++) {
      carousels[i].style.transform = `translateX(-${100 * Number(e.target.id)}%)`;
      carousels[i].style.transition = '500ms';
    }
  };

  const handleFilter = e => {
    const type = e.target.getAttribute('type');
    const findIndex = filter.findIndex(data => data[type] === e.target.getAttribute('name'));
    findIndex === -1
      ? setFilter([...filter, { [type]: e.target.getAttribute('name') }])
      : setFilter(filter.filter(data => data[type] !== e.target.getAttribute('name')));
  };

  // const infiniteScroll = () => {
  //   const { documentElement, body } = document;

  //   const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
  //   const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
  //   const clientHeight = documentElement.clientHeight;

  //   scrollTop + clientHeight > scrollHeight - 378 && setOffset(offset + 1);
  // };

  const colors = filter.filter(data => data.color).map(data => data.color);
  const sizes = filter.filter(data => data.size).map(data => Number(data.size));
  const collections = filter.filter(data => data.collection).map(data => data.collection);
  const filterQuery = filter.reduce(
    (a, b) =>
      a + `${Object.keys(b)}_id=${Object.keys(b)[0] === 'color' ? colorList.indexOf(Object.values(b)[0]) + 1 : Number(Object.values(b)) + 1}&`,
    '?'
  );
  const scrollQuery = `&limit=${LIMIT}&offset=${offset}`;
  const query = filterQuery ? `?${filterQuery.slice(0, filterQuery.length - 1)}${scrollQuery}` : `${scrollQuery}`;

  return (
    <MainContainer>
      <ImgContainer>
        {CAROUSELS.map(carousels => (
          <MainImg key={carousels.id} className="carousel" src={carousels.url} />
        ))}
        <BtnContainer>
          {CAROUSELS.map(carousels => (
            <CarouselBtn key={carousels.id} id={carousels.id} onClick={handleCarousel} carousel={carousel} />
          ))}
        </BtnContainer>
      </ImgContainer>
      <FilterHeader>
        <HideFilter isFilter={isFilter} onClick={() => setIsFilter(!isFilter)}>
          <HideText isFilter={isFilter}>Hide Filters</HideText>
          <HideIcon>
            <i class="fas fa-sort-amount-down" />
          </HideIcon>
        </HideFilter>
        {/* <TotalResults>{products.length} Results</TotalResults> */}
      </FilterHeader>
      <ListContainer>
        <FilterList isFilter={isFilter}>
          <Filter>
            <FilterName>Color</FilterName>
            <FilterContents>
              {colorList.map((color, idx) => (
                <ColorBtn key={idx} type="color" name={color} onClick={handleFilter} filter={colors} />
              ))}
            </FilterContents>
          </Filter>
          <Filter>
            <FilterName>Size</FilterName>
            <FilterContents>
              <ul className="sizeContainer">
                {sizeList.map((size, idx) => (
                  <Size key={idx} type="size" name={sizeList.indexOf(size)} onClick={handleFilter} filter={sizes}>
                    {size}
                  </Size>
                ))}
              </ul>
            </FilterContents>
          </Filter>
          <Filter>
            <FilterName>Collection</FilterName>
            <FilterContents>
              <ul className="collections">
                {collectionList.map((collection, idx) => (
                  <Collection key={idx} type="collection" name={collectionList.indexOf(collection)} onClick={handleFilter} filter={collections}>
                    <CheckBox type="collection" name={collectionList.indexOf(collection)} filter={collections} />
                    {collection}
                  </Collection>
                ))}
              </ul>
            </FilterContents>
          </Filter>
        </FilterList>
        <ProductList>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </ProductList>
      </ListContainer>
    </MainContainer>
  );
}

const MainContainer = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 81px;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
`;

// const MainImg = styled.img.attrs({
//   src: 'https://www.converse.co.kr/image/banner/16202644000.jpg',
//   alt: '메인사진',
// })`
//   width: 100%;
//   height: 700px;
// `;

const MainImg = styled.img`
  max-width: 100%;
  height: 100%;
`;

const BtnContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
  width: 120px;
  height: 35px;
  background-color: gray;
  border-radius: 20px;
  opacity: 0.5;
`;

const CarouselBtn = styled.span`
  width: 20px;
  height: 20px;
  margin: auto 10px;
  border: 1px solid black;
  border-radius: 50%;
  transition: 200ms;

  &:hover {
    background-color: black;
    transform: scale(1.2);
  }

  ${({ carousel, id }) => +carousel === id && `background-color: black`};
`;

const FilterHeader = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  margin: 16px 0;
  border-top: ${props => props.theme.border};
  border-bottom: ${props => props.theme.border};
`;

const HideFilter = styled.button`
  position: relative;
  display: flex;
  width: 256px;
  height: 100%;
  padding: 0;
  border: none;
  border-right: ${props => props.theme.border};
  background: none;
  transition: 300ms;
  ${({ isFilter }) =>
    !isFilter &&
    `
    width:60px;
    transition: 500ms;
  `}
`;

const HideText = styled.span`
  position: absolute;
  width: 70px;
  height: 14px;
  left: 16px;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #757575;
  transition: 300ms;
  ${({ isFilter }) =>
    !isFilter &&
    `
    opacity:0;
  `}
`;

const HideIcon = styled.span`
  display: inline-block;
  margin: auto;
  margin-right: 20px;
  font-size: 14px;
`;

const TotalResults = styled.span`
  display: block;
  margin: auto;
  margin-left: 20px;
  font-size: 14px;
  font-weight: 600;
`;

const ListContainer = styled.div`
  display: flex;
  padding: 0 12px 0 20px;
`;

const FilterList = styled.div`
  width: 220px;
  margin: 20px 36px 0 16px;
  border-top: ${props => props.theme.border};
  transition: width 300ms, opacity 500ms;
  ${({ isFilter }) =>
    !isFilter &&
    `
    width:0;
    opacity:0;
    transition: width 500ms, opacity 200ms;
  `}
`;

const Filter = styled.div`
  border-bottom: ${props => props.theme.border};
`;

const FilterName = styled.div`
  width: 220px;
  padding: 16px 0;
  font-weight: 600;
`;

const FilterContents = styled.div`
  display: flex;
  width: 220px;
  padding: 5px 0 25px;
`;

const ColorBtn = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 5px 10px 5px 2px;
  border: ${props => props.theme.border};
  border-radius: 50%;
  background-color: ${props => props.name};
  transition: 200ms;
  cursor: pointer;
  ${({ filter, name }) =>
    filter.indexOf(name) !== -1
      ? `transform: scale(0.8); 
      ${name === 'white' ? `border-color:#e5e5e5` : `border-color:${name}`}; 
      &:after {
        position: absolute;
        left: -5px;
        top: -5px;
        width: 22px;
        height: 22px;
        padding: 2px;
        border-radius: inherit;
        border: 1px solid ${name};
        ${name === 'white' && `border-color : #e5e5e5`};
        content: "";
      }`
      : `&:hover {transform:scale(1.3)}`}
`;

const Size = styled.li`
  display: inline-block;
  padding: 15px 10px;
  border: ${props => props.theme.border};
  border-right: 0;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: 200ms;
  &:last-child {
    border-right: ${props => props.theme.border};
  }
  ${({ filter, name }) => filter.indexOf(name) !== -1 && `background-color:black; color:white`}
`;

const Collection = styled.li`
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 14px;
  color: #9b9b9b;
  cursor: pointer;
  transition: 100ms;
  &:hover {
    text-decoration: underline;
  }
  ${({ filter, name }) => filter.indexOf(String(name)) !== -1 && `color:black`}
`;

const CheckBox = styled.span`
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 10px;
  border: 1px solid #999999;
  text-decoration: none;
  ${({ filter, name }) =>
    filter.indexOf(String(name)) !== -1 &&
    `&:after {
      content:'';
      position: absolute;
      display:block;
      top: 2px;
      left: 2px;
      width: 8px;
      height: 8px;
      font-size: 8px;
      background: url(https://media.vlpt.us/images/lang/post/278cc5c6-9934-4129-ac59-4838de4838d3/free-icon-check-mark-2128.png);
      background-size: contain;
  }`};
`;

const ProductList = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export default Main;
