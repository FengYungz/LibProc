import styled from 'styled-components';

export const Container = styled.div`
  background-color: brown;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  overflow-y: auto; /* Adicione uma barra de rolagem vertical quando necessário */

  animation: showSidebar .4s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  button{
    width: 100%;
    height: 35px;
    border-radius: 5px;
    background-image: linear-gradient(to bottom, #ff6b6b, #e74c3c);
    transition: background-color 0.3s ease;
    border: 1px solid #c0392b;
  }

  

  div{
    display: flex;
    flex-direction: column; /* Alinha os itens verticalmente */
    padding-left: 8px;
    padding-right: 8px;
  }
  a{
    text-decoration: none; /* Remove a linha sublinhada */
    color: black;
  }

  nav{
    
    a{
      font-size: 11.5px;
    }
  }

  div.home{
    align-items: center;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }

`;

export const Content = styled.div`
  margin-top: 100px;
`;