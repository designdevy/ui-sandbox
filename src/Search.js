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

const SearchContent = styled.div`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  position: relative;
`;

const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Search"
})`
  font-family: Mallory;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  height: 40px;
  width: 100%;
  padding: 12px 36px 12px;
  border: 0;
  border-radius: 4px;
  background-color: #fff;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.svg`
  fill: #2a2a2e;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 12px;
`;

const Search = () => (
  <SearchContainer>
    <SearchContent>
      <SearchIcon viewBox="0 0 16 16">
        <path
          fill="#2A2A2E"
          fill-rule="evenodd"
          d="M11.695 10.736l2.78 2.764c.262.26.263.682.003.943-.26.261-.681.263-.943.003l-2.78-2.765C9.725 12.506 8.42 13 7 13c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6c0 1.412-.488 2.71-1.305 3.736zM7 11.666c2.577 0 4.667-2.089 4.667-4.666 0-2.577-2.09-4.667-4.667-4.667S2.333 4.423 2.333 7 4.423 11.667 7 11.667z"
        />
      </SearchIcon>
      <SearchInput />
    </SearchContent>
  </SearchContainer>
);

export default Search;
