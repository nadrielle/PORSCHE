import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: #1c1c1c;
  color: #fff;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Payment = styled.img`
  width: 50%;
`;
const StyledLink = styled.a`
  color: white;
  text-decoration: none;
`;

const openMapInNewTab = (url) => {
  window.open(url, "_blank");
};
const handleMapClick = (e) => {
  e.preventDefault();

  const mapUrl = "https://maps.app.goo.gl/N54JD1FiGZZPA9W98";
  openMapInNewTab(mapUrl);
};

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PORSCHE</Logo>
        <Desc>
          © 2023 Porsche Brasil Importadora de Veículos Ltda. Indicações Legais.
          Política de Privacidade. Compliance Porsche. Canal de Denúncia. Open
          Source Software Notice.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook style={{ fontSize: 16 }} />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram style={{ fontSize: 16 }} />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter style={{ fontSize: 16 }} />
          </SocialIcon>
          <SocialIcon color="25D366">
            <WhatsApp style={{ fontSize: 16 }} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Úteis</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Minha Conta</ListItem>
          <ListItem>Lista de Desejos</ListItem>
          <ListItem>Termos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contato</Title>
        <ContactItem>
          <Room />{" "}
          <StyledLink
            href="https://maps.app.goo.gl/N54JD1FiGZZPA9W98"
            onClick={handleMapClick}
          >
            EEEP Mário Alencar
          </StyledLink>
        </ContactItem>
        <ContactItem>
          <Phone /> +55 (85) 98922-4002
        </ContactItem>
        <ContactItem>
          <MailOutline /> porschePro@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
