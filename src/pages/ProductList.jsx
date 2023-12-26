import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div`
    
`;
const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Carros</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Produtos Filtrados:</FilterText>
                    <Select>
                        <Option disabled selected>
                            Modelos
                        </Option>
                        <Option>718</Option>
                        <Option>911</Option>
                        <Option>Taycan</Option>
                        <Option>Panamera</Option>
                        <Option>Macan</Option>
                        <Option>Cayenne</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Design da Carroceria
                        </Option>
                        <Option>Coupé</Option>
                        <Option>Cabriolet</Option>
                        <Option>Targa</Option>
                        <Option>SUV</Option>
                        <Option>Sedan Esportivo</Option>
                        <Option>Sport Turismo</Option>
                        <Option>Cross Turismo</Option>
                    </Select>
                    </Filter>
                <Filter>
                    <FilterText>Produtos Classificados:</FilterText>
                    <Select>
                        <Option selected>Valor</Option>
                        <Option>Preço (asc)</Option>
                        <Option>Preço (desc)</Option>
                    </Select>
                    </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList