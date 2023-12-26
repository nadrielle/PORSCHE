import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import {mobile} from '../responsive';
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const SlideContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props => props.bg};
`;
const ImgContainer = styled.div`
    height: 100%;
    
`;
const Image = styled.img`
    height: 60%;
    display:flex;
    align-items: center;
    margin-top: 200px;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    
`;

const Title = styled.h1`
    font-size: 45px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    width:150px;
    padding: 10px;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 1.5rem;
    background-color: black;

    &:hover{
        padding: 11px;
        width:155px;
        transition: 0.5ms;
        border: solid;
    }

`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;

`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    };
    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowBackIosOutlined style={{ fontSize: 15 }} />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <SlideContainer bg={item.bg} key={item.id} >
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>
                                {item.title}
                            </Title>
                            <Desc>
                                {item.desc}
                            </Desc>
                            <Button> <StyledLink to="/produtos">Saiba mais!</StyledLink></Button>
                        </InfoContainer>
                    </SlideContainer>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <ArrowForwardIosOutlined style={{ fontSize: 15 }} />
            </Arrow>
        </Container>
    )
}

export default Slider
