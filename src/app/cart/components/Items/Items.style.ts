import styled from "styled-components";

export const ItemsStyle = styled.div`
  padding: 1rem;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  hr {
    border-bottom: 3px solid var(--black);
  }

  .single-item:first-child {
    border-top: 1px solid var(--black) !important;
  }
`;
