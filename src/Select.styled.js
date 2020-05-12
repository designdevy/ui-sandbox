import styled, { css } from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  min-height: 38px;
  flex-wrap: wrap;

  .dd-header {
    border-radius: 4px;
    border: solid 1px #90949c;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    padding: 12px 12px;
    ${props =>
      props.open &&
      css`
        box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.2);
        border: solid 1px #5392f9;
      `}

    &:hover {
      box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.2);
      border: solid 1px #5392f9;
    }
    &:focus {
      outline: none;
    }

    &__title {
      font-family: Mallory;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.43;
      letter-spacing: normal;
      color: #000000;
      margin: 0;
    }

    &__action {
      ${props =>
        props.open &&
        css`
          transform: rotate(180deg);
        `}
    }

    &__action--icon {
    }
  }

  .dd-list {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    padding: 0;
    margin: 0;
    width: 100%;
    margin-top: 4px;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const SelectItem = styled.li`
  list-style-type: none;

  &:first-of-type {
    > div {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &:last-of-type > div {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  & .item-content {
    display: flex;
    justify-content: flex-start;
    font-family: Mallory;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    background-color: white;
    padding: 12px;
    width: 100%;
    text-align: left;

    ${props =>
      !props.multiSelect &&
      props.selected &&
      css`
        background-color: #f4f8fe;
      `}

    &:hover,
    &:focus {
      cursor: pointer;
      background-color: #f4f8fe;
    }

    &:hover .checkbox,
    &:focus .checkbox {
      border-color: #a9c9fc;
    }
  }
`;
