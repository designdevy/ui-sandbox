import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  height: 56px;
  background-color: #e9ebee;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const SearchContent = styled.input`
  height: 40px;
  width: 100%;
  padding: 12px;
  border: 0;
  border-radius: 4px;
  background-color: #fff;
`;

const Search = () => (
  <SearchContainer>
    <SearchContent />
  </SearchContainer>
);

export default Search;
