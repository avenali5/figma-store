import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: showUp 0.6s forwards;
  .card {
    background: var(--white);
    color: var(--black);
    border-radius: 1rem;
    padding: 1.5rem;
    width: 80%;
    max-width: 33rem;
    text-align: center;
    position: relative;
    opacity: 0;
    transform: translateY(1rem);
    animation: showUpCard 0.6s forwards;
    .close {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
    h3 {
      margin-bottom: 1rem;
    }
  }

  @keyframes showUp {
    to {
      opacity: 1;
    }
  }
  @keyframes showUpCard {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
