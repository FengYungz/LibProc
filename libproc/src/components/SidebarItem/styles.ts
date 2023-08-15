import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &{
    align-items: flex-start; /* Alinha os itens à esquerda */
  }

  &:hover {
    background-color: #D65A38;
  }
`;