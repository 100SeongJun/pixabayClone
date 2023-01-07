import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../asset/delete.svg";

const Tag = styled.div`
  display: flex;
  font-size: 14px;
  border-radius: 16px;
  padding: 6px 10px;
  color: var(--primary);
  background-color: var(--highlight);
  cursor: pointer;
  &:hover {
    background-color: var(--overlay);
  }
  margin: 4px;
`;

const TagLabel = styled.span`
  margin-right: 4px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
const SearchTag = ({ inputtag, inputvalue }) => {
  const [tagbox, settagbox] = useState([""]);

  useEffect(() => {
    settagbox([...tagbox, inputtag]);
  }, [inputtag]);
  // console.log(tagbox);
  // settagbox(inputtag);

  return (
    <Tag>
      <TagLabel>최근검색어</TagLabel>
      {tagbox.map((list, idx) => {
        return (
          <TagLabel
            id={idx}
            key={idx}
            onClick={(e) => {
              inputvalue(e.target.innerText);
            }}
          >
            {list}
          </TagLabel>
        );
      })}
      <DeleteIcon
        width="12px"
        onClick={() => {
          settagbox([]);
        }}
      />
    </Tag>
  );
};

export default SearchTag;
