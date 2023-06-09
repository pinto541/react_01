
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Announcement from '../components/Announcement';

const Container =styled.div`

`;

const Title = styled.h1`
margin:20px`;
const FilterContainer =styled.div`
display:flex;
justify-content:space-between;
`;
const Filter =styled.div`
margin:20px;
`;
const FilterText = styled.span`
font-size:20px;
font-weight:600;
margin:20px;
`;

const Select =styled.select`
padding:10px;
margin-right:20px
`;
const Option =styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
         <Title>Dresses</Title>
         <FilterContainer>
           <Filter><FilterText>Filter Products</FilterText>
           <Select>
            <Option disabled selected>
                Color
            </Option>
            <Option>White</Option>
            <Option>black</Option>
           </Select>
           <Select>
            <Option disabled selected>
                size
            </Option>
            <Option>s</Option>
            <Option>xl</Option>
           </Select>
           </Filter>
           <Filter><FilterText>Sort Products</FilterText>
           <Select>
            <Option  selected>
                Newest
            </Option>
            <Option>White</Option>
            <Option>black</Option>
           </Select>
           </Filter>

         </FilterContainer>
         <Products/>

    </Container>
  )
}

export default ProductList