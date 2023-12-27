import styled from "styled-components";

export const LayoutStyle = styled.section`
  grid-column-gap: 50px;
  -webkit-column-gap: 50px;
  -moz-column-gap: 50px;
  column-gap: 50px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: repeat(3, auto) 1fr;
  grid-template-columns: 100%;
  padding-top: 7rem;
  .tag {
    background-color: var(--green);
    border-radius: 20px;
    font-size: 14px;
    font-weight: 700;
    padding: 12px 20px 10px;
    text-transform: uppercase;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin-left: 1rem;
  }
  > h2 {
    margin: 1rem 0 2rem;
    font-family: "Whyte-Heavy";
    font-size: clamp(2rem, 6vw, 3rem);
  }
  .description {
    grid-row-start: 3;
    font-size: 1.3rem;
    line-height: 1.4;
  }
  .padding-inline {
    padding-inline: 1rem;
  }

  @media (min-width: 1000px) {
    grid-column-gap: 50px;
    -webkit-column-gap: 50px;
    -moz-column-gap: 50px;
    column-gap: 50px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: repeat(3, auto) 1fr;
    > h2 {
      margin: 1rem 0 0;
    }
    .description {
      grid-row-start: unset;
    }
  }
`;
