import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import { Add, Remove } from '@mui/icons-material';
import Announcement from '../components/Announcement';



const Container = styled.div`

`;
const Wrapper = styled.div`
   padding: 50px;
   display:flex;
`;
const ImgContainer = styled.div`
flex:1;

`;
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
`;
const InfoContainer = styled.div`
flex:1;
padding:50px;
`;
const Title = styled.h1`
font-weight:200;
`;
const Desc = styled.p`
margin:20px 0px;
`;
const Price = styled.span`
 font-weight:100;
 font-size:40px;
`;

const FilterContainer = styled.div`
width:50%;
margin: 30px 0px;
display:flex;
justify-content:space-between;

`;
const Filter = styled.div`
display:flex;
align-items:center;
`;
const FilterColor =styled.div`
width:20px;
height: 20px;
border-radius: 50%;
background-color:${props=>props.color};
margin: 0px 5px;
cursor:pointer;
`;
const FilterSize =styled.select`
  margin:left;
  padding:5px;
`;
const FilterSizeOption = styled.option``;
const FilterTitle= styled.span`
font-size:20px;
font-weight:200;
`;

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justift-content:space-between;

`;
const AmountContainer = styled.div`
  display:flex;
  align-items:center;
  font-weight:700;
`;
const Amount = styled.span`
  width:50px;
  height:30px;
  border-radius:10px;
  border:1px solid teal;
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0px 5px;
`;
const Button = styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
justify-content:space-between;
font-weight:500;

&:hover{
    background-color: #f8f4f4;
}

`;





const Product = () => {
  return (
    <Container>
       <Navbar/>
       <Announcement/>
         <Wrapper>
         <ImgContainer>
         <Image src="https://images.pexels.com/photos/2772535/pexels-photo-2772535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
         </ImgContainer>
           <InfoContainer>
              <Title>denim jumpsuit</Title>
              <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto earum, nobis itaque quaerat ad id distinctio, vero repellendus officiis pariatur, fuga recusandae odio ab tempora velit. Laboriosam ipsum laborum dolore.</Desc>
              <Price> Rs 2000</Price>
              <FilterContainer>
               <Filter>
                   <FilterTitle>color</FilterTitle>
                   <FilterColor color="black"/>
                   <FilterColor color="darkblue"/>
                   <FilterColor color="gray"/>

               </Filter>

               <Filter>
              
              <FilterTitle>size</FilterTitle>
              <FilterSize>
                   <FilterSizeOption>s</FilterSizeOption>
                   <FilterSizeOption>m</FilterSizeOption>
                   <FilterSizeOption>xl</FilterSizeOption>
                   <FilterSizeOption>xxl</FilterSizeOption>
             </FilterSize>
                    </Filter>
                       </FilterContainer>
              <AddContainer>
                     <AmountContainer>
                      <Remove/>
                      <Amount>1</Amount>
                      <Add/>
                     </AmountContainer>
                       <Button>ADD TO CART</Button>


              </AddContainer>

           </InfoContainer>
         </Wrapper>

    </Container>
  )
}

export default Product