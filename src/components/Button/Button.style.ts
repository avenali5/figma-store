import styled from "styled-components";

export const ButtonStyle = styled.button`
  border: 2px solid var(--black);
  border-radius: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1;
  outline: none;
  padding: 12px 20px 10px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  transition: all 0.3s;

  &.solid {
    background: var(--black);
    color: var(--white);
    &:hover {
      background: none;
      color: var(--black);
    }
  }

  &.outline {
    &:hover {
      background: var(--black);
      color: var(--white);
    }
  }
`;
