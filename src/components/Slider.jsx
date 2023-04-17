import React from 'react'
import styled from 'styled-components';
const Container = styled.div
`
width:100%;
height:100Vh;
display:flex;

position:relative;
`;

const Wrapper = styled.div`
height:100%;
display:flex;
`;

const Slide = styled.div`
width:100vw;
height:100Vh;
background-color:#${props=>props.bg};

display:flex;
align-items: center;
`;

const Image = styled.img`
height:80%;
`;
const ImgContainer = styled.div`
flex:1;
height:100%;
`;

const InfoContainer = styled.div`
flex:1;
padding:50px;
`;

const Title= styled.h1`
font-size:70px;

`;
const Desc=styled.p`
 msargin: 50px 0px;
 font-size: 20px;
 font-weight: 500;
 letter-spacing: 3px;
`;
const Button = styled.button`
 padding: 10px;
 font-size:20px;
 background-color:transparent;
 cursor:pointer
`;
const Slider = () => {
  return (
    <Container>
         <Wrapper>
            <Slide>
<ImgContainer>

<Image src="https://tse4.mm.bing.net/th?id=OIP.tYUdxiVEYiQ-bG8SAhBdTwHaFj&pid=Api&P=0.png"/>

</ImgContainer>
<InfoContainer>
<Title>SUMMER SALE</Title>
<Desc> DONT COMPROMISE ON STYLE! GET FLAT 30%OFF FOR NEW ARRIVALS.</Desc>
<Button>SHOP NOW</Button>
</InfoContainer>
    </Slide>
         </Wrapper>

    </Container>
  )
}

export default Slider