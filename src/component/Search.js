import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../asset/search.svg";
import SearchTag from "./SearchTag";

const SearchTagContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  justify-content: center;
`;

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  padding: 4px 16px;
  width: 60%;
  align-items: center;
  border-radius: 8px;
  border: 1px solid black;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  margin: 20px auto;
`;

const SearchInputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const SearchInput = styled.input`
  background: transparent;
  font-size: 16px;
  outline: none;
  color: #5e5e5e;
  border: none;
  flex: auto;
  margin-left: 8px;
`;
const Search = ({ inputvalue }) => {
  const [inputtag, setinputtag] = useState("");
  return (
    <>
      <SearchBoxContainer>
        <SearchInputContainer>
          <SearchIcon width="24" fill="#5e5e5e" />
          <SearchInput
            placeholder="검색 후 ENTER"
            onKeyDown={(e) => {
              if (e.nativeEvent.key === "Enter") {
                inputvalue(e.target.value);
                setinputtag(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </SearchInputContainer>
      </SearchBoxContainer>
      <SearchTagContainer>
        <SearchTag inputtag={inputtag} inputvalue={inputvalue} />
      </SearchTagContainer>
    </>
  );
};

export default Search;
