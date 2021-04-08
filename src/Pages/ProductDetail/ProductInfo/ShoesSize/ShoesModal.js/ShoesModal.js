import React from 'react';
import styled from 'styled-components';

const SIZE_TABLE = [
  [3, 220, 3, '-'],
  [3.5, 225, 3.5, '-'],
  [4, 230, 4, '-'],
  [4.5, 235, 4.5, '-'],
  [5, 240, 5, 220],
  ['5.5/6', 245, '5.5/6', 225],
  [6.5, 250, 6.5, 230],
  [7, 255, 7, 235],
  [7.5, 260, 7.5, 240],
  [8, 265, 8, 245],
  [8.5, 270, 8.5, 250],
  [9, 275, 9, 255],
  [9.5, 280, 9.5, 260],
  [10, 285, 10, 265],
  [10.5, 290, 19.5, 270],
  [11, 295, 11, '-'],
];

const SIZE_TITLE = ['US MEN', 'KOREA MEN', 'US WOMEN', 'KOREA WOMEN'];

function ShoesModal({ handleModal }) {
  return (
    <ModalScreen>
      <div className="modalContainer">
        <ModalWrapper>
          <div className="modalMain">
            <button className="btnCloseModal" onClick={handleModal}>
              <i class="fas fa-times fa-2x" />
            </button>
            <div className="modalTitle">신발 사이즈 차트</div>
            <ModalInfo>
              <div className="sizeGuide">컨버스 사이즈</div>
              <div className="sizeMeasure">밀리미터(mm)</div>
            </ModalInfo>
            <GuideChart>
              <thead>
                <tr>
                  {SIZE_TITLE.map((title, idx) => {
                    return <th key={idx}>{title}</th>;
                  })}
                </tr>
              </thead>
              {SIZE_TABLE.map((size, index) => {
                return (
                  <tbody>
                    <tr key={index}>
                      <td>{size[0]}</td>
                      <td>{size[1]}</td>
                      <td>{size[2]}</td>
                      <td>{size[3]}</td>
                    </tr>
                  </tbody>
                );
              })}
            </GuideChart>
          </div>
        </ModalWrapper>
      </div>
    </ModalScreen>
  );
}

const ModalScreen = styled.div`
  z-index: 10000000000000000000000000000000000000000;
  .modalContainer {
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    padding: 73px 0;
    width: 100%;
    height: 823px;
    .btnCloseModal {
      display: flex;
      justify-content: flex-end;
    }
    .modalTitle {
      margin-bottom: 50px;
      font-size: 24px;
      text-align: center;
      font-weight: 600;
      line-height: 1;
      color: #444444;
    }
  }
`;

const ModalWrapper = styled.div`
  width: 680px;
  height: 1000px;
  background-color: white;
  margin: auto;
  opacity: 1;

  .modalMain {
    position: relative;
    padding-top: 35px;
    width: 604px;
    height: 730px;
    margin: auto;

    button {
      position: absolute;
      top: 20px;
      right: 0;
      border: none;
      outline: none;
      background: transparent;
    }
  }
`;

const ModalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 14px;

  .sizeGuide,
  .sizeMeasure {
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    color: black;
  }
`;

const GuideChart = styled.table`
  text-align: center;
  width: 100%;
  font-size: 14px;

  thead {
    tr {
      th {
        width: 25%;
        background-color: #f4f4f4;
        justify-content: center;
        text-align: center;
        padding: 16px 0;
        color: #757575;
        font-weight: 600;
      }
    }
  }
  tbody {
    &:nth-child(odd) {
      background-color: #f4f4f4;
    }

    tr {
      border: 3px solid white;
      td {
        &:hover {
          background-color: #00c3d7;
          color: white;
        }
        padding: 16px 0;
      }
    }
  }
`;
export default ShoesModal;
