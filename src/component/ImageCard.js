import { useState } from "react";
import styled from "styled-components";
import Popover from "./Popover";

const Card = styled.div`
  margin-left: 8px;
  margin-bottom: 8px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 300px;
  padding: 8px;
  cursor: pointer;
  // box-shadow: 5px 10px;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 4px;
`;
var cnt = 0;

const ImageCard = ({ imgData }) => {
  const { webformatURL, id, largeImageURL } = imgData;
  const [popCmp, setPopCmp] = useState(false);
  return (
    <>
      <Card>
        <Img
          key={id}
          src={largeImageURL}
          onClick={() => {
            setPopCmp(true);
          }}
        ></Img>
      </Card>
      {popCmp ? (
        <Popover setPopCmp={setPopCmp} webformatURL={webformatURL}></Popover>
      ) : (
        <></>
      )}
    </>
  );
};

export default ImageCard;
