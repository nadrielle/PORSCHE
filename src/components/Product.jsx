/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Aga1 } from "./Aga1";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;

const Container = styled.div`
  
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #978f8f;
  position: absolute;
`;


const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  opacity: 0.5;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const Product = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

const adicionarAoCarrinho = (id) => {
  let produtosNoCarrinho = localStorage.getItem('produtos');

  if (!produtosNoCarrinho) {
    produtosNoCarrinho = JSON.stringify([id]);
  } else {

    const produtosArray = JSON.parse(produtosNoCarrinho);

    produtosArray.push(id);

    produtosNoCarrinho = JSON.stringify(produtosArray);
  }

  localStorage.setItem('produtos', produtosNoCarrinho);
};


  return (
    <Container> 
      <Circle />
      <Image src={props.src} />
      <Info>
        <Icon onClick={()=>{
          addItemToCart(props.item);
          adicionarAoCarrinho(props.item.id);
        }}>
            <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
