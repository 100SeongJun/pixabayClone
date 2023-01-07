import React, { useEffect } from "react";
import styled from "styled-components";
import "../App.css";
const Img = styled.img`
  position: fixed;
  width: 50%;
  height: 50%;
  display: ;
  top: 30%;
  left: 30%;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.8);
  z-index: 100;
  pointer-events: auto;
  cursor: pointer;
`;

const Popover = ({ setPopCmp, webformatURL }) => {
  useEffect(() => {
    document.body.style = `overflow:hidden; pointer-events:none`;
    return () => (document.body.style = "overflow:auto; pointer-events:auto");
  }, []);
  return (
    <Img
      src={webformatURL}
      onClick={(e) => {
        setPopCmp(false);
      }}
    ></Img>
  );
};
export default Popover;
