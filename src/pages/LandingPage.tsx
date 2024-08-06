import { Box, Button, ButtonGroup, Grid, Paper, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import HeadingGraphic from "../assets/headingGraphic.png";
import { useNavigate } from "react-router-dom";
import Header from "../componenets/Header";
import EvolveLogo from "../assets/Evolve Bank Logo_logo_only.png";
import ChatButton from "../componenets/ChatButton";

const LandingContainer = styled(Box)({
  maxWidth: "100%",
  minHeight: "100vh",
  boxSizing: "border-box",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const RowContainer = styled(Grid)({
  width: "100%",
  boxSizing: "border-box",
  alignItems: "center"
});

const ColContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  padding: "12px 12px"
});

const StyledPaper = styled(Paper)({
  backgroundColor: "#F6F6F6",
  width: "fit-content",
  padding: "24px",
  marginBottom: "64px"
})

const Heading = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "right",
  color: "black"
});

const LandingPage = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <LandingContainer>
      <Header />
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "32px",
          color: "black"
        }}
      >
        Evolve Bank
      </Typography>
      <StyledPaper elevation={3}>
        <RowContainer container direction="row">
          <ColContainer item container direction="column" md={6}>
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
                <ChatButton />
              </div>
            </Grid>
          </ColContainer>
          <ColContainer item container direction="column" md={6}>
            <Grid item>
              <img className="h-[100%] w-auto object-contain" src={HeadingGraphic} />
            </Grid>
          </ColContainer>
        </RowContainer>
      </StyledPaper>

      <Heading sx={{ textAlign: "center", marginBottom: "14px" }}>How can we help?</Heading>
      <ButtonGroup variant="outlined" orientation={mobile ? "vertical": "horizontal"}>
        <Button onClick={() => navigate("/unsure?id=Q4")}>Credit Cards</Button>
        <Button onClick={() => navigate("/loanList?list=personal")}>Personal Loans</Button>
        <Button onClick={() => navigate("/loanList?list=student")}>Student Loans</Button>
        <Button>BNPL</Button>
        <Button onClick={() => navigate("/unsure?id=Q1")}>I'm not sure</Button>
      </ButtonGroup>
      <img src={EvolveLogo} style={{
        width: "100px",
        height: "auto",
        margin: "32px 0px"
      }} />
    </LandingContainer>
  )
};

export default LandingPage;