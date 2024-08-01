import { Box, Button, Grid, Link, Typography, styled } from "@mui/material";
import HeadingGraphic from "../assets/headingGraphic.png";
import { useNavigate } from "react-router-dom";

const LandingContainer = styled(Box)({
  maxWidth: "100%",
  minHeight: "100vh",
  boxSizing: "border-box",
  padding: "12px"
});

const RowContainer = styled(Grid)({
  width: "100%",
  boxSizing: "border-box"
});

const ColContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  padding: "12px 12px"
});

const Heading = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "right"
});

const SubHeading = styled(Typography)({
  fontSize: "18px"
});

const HeadingButton = styled(Button)({
  width: "fit-content",
  color: "black"
});

const StyledLink = styled(Link)({
  color: "black",
  textDecorationColor: "black",
  ":hover": {
    cursor: "pointer"
  }
});

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <LandingContainer>
      <RowContainer container direction="row" sx={{ backgroundColor: "#F6F6F6" }}>
        <ColContainer item container direction="column" md={6}>
          <Heading>
            Evolve Financial Services
          </Heading>
          <SubHeading>
            All Products
          </SubHeading>
          <div style={{ paddingLeft: "24px", display: "flex", flexDirection: "column" }}>
            <HeadingButton variant="text"
              onClick={() => navigate("/productList")}
            >Credit Cards</HeadingButton>
            <div style={{ paddingLeft: "24px", display: "flex", flexDirection: "column" }}>
              <HeadingButton variant="text"
                onClick={() => navigate("/productDetail?id=CR001")}
              >Evolve Cashback Card</HeadingButton>
              <HeadingButton variant="text"
                onClick={() => navigate("/productDetail?id=CR002")}
              >Evolve Travel plus Card</HeadingButton>
              <HeadingButton variant="text"
                onClick={() => navigate("/productDetail?id=CR003")}
              >Evolve Fuel plus Card</HeadingButton>
              <HeadingButton variant="text"
                onClick={() => navigate("/productDetail?id=CR004")}
              >Evolve Platinum Card</HeadingButton>
              <HeadingButton variant="text"
                onClick={() => navigate("/productDetail?id=CR005")}
              >Evolve Blue cash Card</HeadingButton>
              <HeadingButton variant="text"
                onClick={() => navigate("/productDetail?id=CR006")}
              >Evolve Renovation Card</HeadingButton>
            </div>
            <HeadingButton variant="text">Evolve Personal Loan</HeadingButton>
            <HeadingButton variant="text">Evolve Student Loan</HeadingButton>
            <HeadingButton variant="text">Evolve BNPL Product</HeadingButton>
          </div>
        </ColContainer>

        <ColContainer item container direction="column" md={6}>
          <Grid item>
            <img className="h-[100%] w-auto object-contain" src={HeadingGraphic} />
          </Grid>
          <Grid item>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "center"
            }}>
              <Heading>
                Hello! I am here to help
              </Heading>
              <Button variant="contained" sx={{ width: "fit-content" }}>Chat with us</Button>
            </div>
          </Grid>
        </ColContainer>
      </RowContainer>
      <Heading sx={{ textAlign: "center", marginBottom: "24px" }}>How can we help?</Heading>
      <RowContainer container direction="row" justifyContent="space-between"
        sx={{ marginBottom: "100px", justifyContent: "space-around" }}
      >
        <StyledLink>Credit Cards</StyledLink>
        <StyledLink>Personal Loans</StyledLink>
        <StyledLink>Student Loans</StyledLink>
        <StyledLink>BNPL</StyledLink>
        <StyledLink>Unsure</StyledLink>
      </RowContainer>
    </LandingContainer>
    // <div className="w-screen h-screen flex flex-col">

    //   <div className="flex flex-row bg-[#F6F6F6] pt-2 pr-12 pb-4 pl-16">
    //     <div className="flex flex-1 flex-col justify-between pb-12">
    //       <h1 className="text-right text-4xl font-bold pt-4">Evolve Financial Services</h1>
    //       <h1 className="text-3xl font-bold pt-6">Hello! I am here to help</h1>
    //       <button className="bg-blue-600 text-white px-4 py-2 rounded w-fit ml-12">
    //         Chat with us
    //       </button>
    //     </div>

    //     <div className="flex flex-row">
    //       <div className="bg-[#F6F6F6] h-64 w-fit">
    //         <img className="h-[100%] w-auto object-contain" src={HeadingGraphic} />
    //       </div>
    //     </div>
    //   </div>

    //   <h1 className="text-3xl font-bold pt-6 text-center">How can we help?</h1>
    //   <div className="flex flex-row justify-between pt-24 pl-24 pr-24">
    //     <a href="/chat?prompt=guidance" className="underline">Looking for financial guidance?</a>
    //     <a href="/chat?prompt=cards" className="underline">Can we suggest credit cards per your need?</a>
    //     <a href="/chat?prompt=loan" className="underline">Could a loan help you?</a>
    //   </div>

    // </div>
  )
};

export default LandingPage;