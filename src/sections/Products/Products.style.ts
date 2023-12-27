import styled from "styled-components";

export const ProductsStyle = styled.section`
  padding: 2rem;
  .grid {
    grid-column-gap: 15px;
    grid-row-gap: 40px;
    -webkit-column-gap: 15px;
    -moz-column-gap: 15px;
    column-gap: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    row-gap: 40px;
    div:nth-child(7),
    div:nth-child(8) {
      grid-column: span 2;
      grid-row: span 2;
    }
  }

  @media (min-width: 768px) {
    .grid {
      grid-column-gap: 30px;
      grid-row-gap: 60px;
      -webkit-column-gap: 30px;
      -moz-column-gap: 30px;
      column-gap: 30px;
      grid-template-columns: repeat(4, 1fr);
      row-gap: 60px;
    }
  }
`;
