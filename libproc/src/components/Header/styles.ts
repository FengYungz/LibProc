import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: brown; 
  box-shadow: 0 0 20px 3px;
  position: fixed;
  width: 100%;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;