import styled from "styled-components";
import SearchContainer from "./component/SearchContainer";
import ResultContainer from "./component/ResultContainer";
import "./App.css";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  background-color: var(--primary);
  min-height: 100vh;
`;

const Header = styled.div`
  font-size: 2em;
  align-items: center;
  display: flex;
  justify-content: center;

  line-height: 5em;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.2);
`;
function App() {
  const [input, inputValue] = useState("");
  return (
    <Container>
      <Header>100SeongJun's Pixabay</Header>
      <SearchContainer input={input} inputvalue={inputValue} />
      <ResultContainer input={input} />
    </Container>
  );
}
export default App;
