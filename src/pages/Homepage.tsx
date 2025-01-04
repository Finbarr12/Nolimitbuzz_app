import styled from "styled-components";
import Card from "../components/Card";



const Homepage = () => {
  return (
    <Container>
      <h1>These are the users information in <span style={{color:"#8075F4"}}>Nolimitbuzz City</span></h1>
      <BoxHold>
        <Box>
          <Card/>
        </Box>
      </BoxHold>
    </Container>
  );
};

export default Homepage;

const Container = styled.div`
width:100%;

  h1{
   margin:0;
   margin-left:70px;
   margin-top:40px
  }
`
const BoxHold = styled.div`
  width:100%;
  // min-height:400px;
  // background:red;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:30px
`
const Box = styled.div`
  width:90%;
  height:900px;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  // background:green;
  gap:25px
`
