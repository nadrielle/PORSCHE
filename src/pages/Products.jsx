import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 500;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 400;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterModel = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterModelOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid crimson;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border-radius: 5rem;
    border: 2px solid crimson;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: 0.5s ease-in-out;

    &:hover {
        background-color: crimson;
        color: #fff;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
            <Image src="https://live.staticflickr.com/7822/45625098095_a0a2d3ff0c_k.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Porshe 911</Title>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quas magnam dignissimos atque pariatur culpa quia,
                      adipisci ratione quae illum deleniti.
                </Desc>
                <Price>R$ 1.200.000</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Cor:</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="red" />
                        <FilterColor  color="gray"/>
                        <FilterColor color="pink" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Carroceria:</FilterTitle>
                        <FilterModel>
                        <FilterModelOption>Coupé</FilterModelOption>
                        <FilterModelOption>Cabriolet</FilterModelOption>
                        <FilterModelOption>Targa</FilterModelOption>
                        <FilterModelOption>SUV</FilterModelOption>
                        <FilterModelOption>Sedan Esportivo</FilterModelOption>
                        <FilterModelOption>Sport Turismo</FilterModelOption>
                        <FilterModelOption>Cross Turismo</FilterModelOption>
                        </FilterModel>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>Adicione ao carrinho</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        {/* <Newsletter /> */}
        <Footer />
    </Container>
  );
};

export default Product;