import styled from "styled-components";
// import Card from "../components/Card";
import Info_Card from "../components/Info_Card";



const Userdetails = () => {
  return (
    <Container>
      <h1>This are the user information in <span style={{color:"#8075F4"}}>Nolimitbuzz City</span></h1>
      <BoxHold>
        <Box>
          <Info_Card/>
        </Box>
      </BoxHold>
    </Container>
  );
};

export default Userdetails;

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
  height:700px;
  display:grid;
  grid-template-columns:repeat(1,1fr);
  // background:green;
  gap:25px
`
