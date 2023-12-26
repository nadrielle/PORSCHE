import { styled } from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #8B0000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Oferta Relâmpago! Frete grátis na primeira compra!
    </Container>
  )
}

export default Announcement