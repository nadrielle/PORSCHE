import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    
    padding: 20px;
    height: 200vh; /* Altura total da viewport */
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 colunas */
    grid-template-rows: repeat(8, 1fr); /* 8 linhas */
    gap: 20px; /* Espaço entre os containers */
    justify-items: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    margin: auto; /* Centraliza na tela */
`;

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product src={item.img} item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;