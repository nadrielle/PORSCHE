import styled from "styled-components";
import { mobile } from "../responsive";
// import {Link} from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ), darkred;

        display: flex;
        align-items: center;
        justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: crimson;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Faça Login</Title>
            <Form>
                <Input placeholder="nome de usuário" />
                <Input placeholder="senha" />
                <Button>Login</Button>
                <Link>Esqueceu a senha?</Link>
                <Link>Ainda não tem uma conta? Crie Aqui!</Link>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Login;