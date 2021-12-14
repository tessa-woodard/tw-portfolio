import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mediaQueries } from "./Themes";

const Box = styled(motion(NavLink))`
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  text-decoration: none;
  width: calc(10rem + 15vw);
  height: 25rem;
  border: 2px solid ${(props) => props.theme.text};
  padding: 1rem;
  color: ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;
  z-index: 5;

  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};

    transition: all 0.3s ease;
  }

  ${mediaQueries(50)`
    width:calc(60vw);

  `};
  ${mediaQueries(30)`
    
    height:25rem;

  `};

  ${mediaQueries(25)`
    
    height:20rem;
    padding:0.8rem;
    backdrop-filter: none;

  `};
`;

const Title = styled.h1`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  ${mediaQueries(40)`
    font-size:calc(0.8em + 1vw);

  `};

  ${mediaQueries(25)`
    
    font-size:calc(0.6em + 1vw);



  `};

  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const Date = styled.span`
  padding-top: 1rem;
  ${mediaQueries(25)`
    
    font-size:calc(0.5em + 1vw);



  `};
`;

const Description = styled.h4`
  font-size: calc(0.8em + 0.3vw);
  padding-top: 1rem;
  /* padding-bottom: .5rem; */
  font-family: "Karla", sans-serif;
  font-weight: 500;
  ${mediaQueries(25)`
  font-size:calc(0.7em + 0.3vw);



  `};
  ${mediaQueries(20)`
  font-size:calc(0.6em + 0.3vw);



  `};
`;

const Container = styled(motion.div)``;
const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
};

const BlogComponent = (props) => {
  const { name, desc, desc2, desc3, desc4, desc5, desc6, date, link } = props.blog;
  return (
    <Container variants={item}>
      <Box target="_blank" to={{ pathname: `${link}` }}>
        <Title>{name}</Title>
        <Description>{desc}</Description>
        <Description>{desc2}</Description>
        <Description>{desc3}</Description>
        <Description>{desc4}</Description>
        <Description>{desc5}</Description>
        <Description>{desc6}</Description>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
