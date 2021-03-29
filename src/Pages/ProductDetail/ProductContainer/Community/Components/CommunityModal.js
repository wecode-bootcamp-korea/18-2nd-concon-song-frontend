import React from 'react';
import styled from 'styled-components';

function CommunityModal({ showScreen, feedIndexNum, feedIndex, handleModal, handleSub, handleAdd, handleKey }) {
  return (
    <ModalBox>
      <div className="feedModalContainer">
        <FeedModal>
          <FeedImage>{showScreen && <img src={showScreen[0].image} alt="modalImage"></img>} </FeedImage>
          <FeedContent>
            <button className="btnCloseModal" onClick={handleModal}>
              <i class="fas fa-times fa-2x" />
            </button>
            <ModalInfo>
              <div>
                <img className="modalProfile" src={showScreen[0].profile_img} alt="modalProfile" />
              </div>
              <div className="feedinfo">
                <div className="modalName">{showScreen && showScreen[0].name}</div>
                <div className="modalDate">{showScreen[0].date}</div>
              </div>
            </ModalInfo>
            <ModalContent>
              <div className="feedText">{showScreen[0].text}</div>
              <div className="hashTag">{showScreen[0].hashTag}</div>
            </ModalContent>
            <FeedArrow>
              <button className="leftBtn" onClick={handleSub}>
                <i class="fas fa-arrow-left"></i>
              </button>
              <button className="rightBtn" onClick={handleAdd}>
                <i class="fas fa-arrow-right"></i>
              </button>
            </FeedArrow>
          </FeedContent>
        </FeedModal>
      </div>
    </ModalBox>
  );
}

const ModalBox = styled.div`
  .feedModalContainer {
    z-index: 9999999;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    padding-top: 40px;
  }
`;

const FeedModal = styled.div`
  width: 1000px;
  height: 630px;
  background-color: white;
  margin: auto;
  opacity: 1;
  display: flex;
`;

const FeedImage = styled.div`
  width: 650px;
`;

const FeedContent = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  .btnCloseModal {
    color: white;
    opacity: 0.6;
    right: 50px;
    outline: none;
    border: none;
    background: transparent;
    position: absolute;
    width: 40px;
    justify-content: flex-end;
  }
`;

const ModalInfo = styled.div`
  margin: 30px 0 0 20px;
  padding-bottom: 10px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .modalProfile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .feedinfo {
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    .modalName {
      margin: 5px 0;
      font-weight: bold;
      font-size: 14px;
    }
    .modalDate {
      font-size: 12px;
      color: #666;
    }
  }
`;

const ModalContent = styled.div`
  margin: 10px 0 0 20px;
  display: flex;
  flex-direction: column;

  .feedText {
    margin-bottom: 50px;
  }
  .hashTag {
    color: #003468;
  }
`;

const FeedArrow = styled.div`
  button {
    outline: none;
    border: none;
    background: transparent;
  }
  .leftBtn {
    position: absolute;
    font-size: 30px;
    top: 340px;
    right: 1220px;
  }
  .rightBtn {
    position: absolute;
    font-size: 30px;
    right: 270px;
    top: 340px;
  }
`;
export default CommunityModal;
