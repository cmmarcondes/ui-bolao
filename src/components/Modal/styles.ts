import styled from 'styled-components';
import { ModalStyledProps } from './config';

export const Container = styled.div<ModalStyledProps>`
  position: fixed;
  height: ${({ state }) => (state ? '100%' : '0')};
  width: 100%;

  .modal {
    position: fixed;
    height: ${({ state }) => (state ? '80%' : '0')};
    width: 100%;

    padding: 20px;

    background-color: #FEFEFE;
    border-radius: 10px 10px 0 0;

    visibility: ${({ state }) => (state ? 'visible' : 'hidden')};
    opacity: ${({ state }) => (state ? '1' : '0')};

    transition: all 0.4s ease-in-out;

    bottom: 0;

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  }
`;
