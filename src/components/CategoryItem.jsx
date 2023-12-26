import styled from "styled-components";
import {mobile} from '../responsive';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    margin-bottom: 60px;
    cursor: pointer;

    &:hover{
        height: 71vh;
        margin-bottom: 5px;
    }
`;
/*height: 100%;*/
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    border-radius: 4rem;
    background-color: white;
    color: black;
    font-weight: 400;
    cursor: pointer;

    &:hover{
        background-color: #cecece;
    }
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Compre agora</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;
