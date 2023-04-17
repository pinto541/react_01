import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height:60px;
 
`;
const Wrapper = styled.div`
padding: 10px 20px;
align-items: center;
display:flex;
justify-content:space-between;
`;
const Left = styled.div`
flex: 1;
display:flex;
align-items: center;
`;
const Language = styled.span`
font-size:14px;
cursor: pointer;
`;

const Center = styled.div`
flex: 1;

text-align:center;
`;

const Right = styled.div`
flex: 1;
display:flex;
align-items: center;
justify-content: flex-end;
`;

const Searchcontainer = styled.div`
border: 0.5px solid lightgrey;
display:flex;
align-items: center;
margin-left:25px;
padding: 5px;
`;
const Input = styled.input`
border:none
`;
const Logo = styled.h1`
  font-weight:bold;
`;
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px
`;



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left><Language>EN</Language>
          <Searchcontainer>
            <Input/>
           <Search style = {{color:"black",fontsize:16}}/>
          
          </Searchcontainer>
          </Left>

          <Center><Logo>Weugly.</Logo></Center>

          <Right>
           <MenuItem>REGISTER</MenuItem>
           <MenuItem>SIGN IN</MenuItem>
            <MenuItem> 
               <Badge badgeContent={4} color='primary'>
                <ShoppingCartOutlined/>
               </Badge>
            </MenuItem>
          </Right>
      </Wrapper>
    </Container>
  )
}





export default Navbar