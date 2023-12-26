import styled from "styled-components";

export const Aga1 = styled.div `
    display: flex;
    justify-content: center;
    text-align: center;

`
export const Title = styled.h1 `
    color:black;
    font-size: 38px;

    display: flex;
    text-align: center;

`;


export default function Divtext() {
    return (
      <Aga1>
        <Title>Escolha entre uma gama de modelos</Title> 
      </Aga1>
      
    );
  }

