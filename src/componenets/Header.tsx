import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from "../assets/Evolve Bank Logo_white_logo_only.png";
import EvolveMenu from './EvolveMenu';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, styled } from '@mui/material';

const HeaderButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  flexGrow: 1,
  gap: "32px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0px"
  }
}))

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" elevation={5}
      sx={{ marginBottom: "60px", borderRadius: "10px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} style={{ height: "50px", marginRight: "32px" }} />
          <HeaderButtonContainer>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate("/")}
              sx={{
                display: { md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                textAlign: "center",
                ":hover": {
                  cursor: "pointer"
                }
              }}
            >
              EVOLVE
            </Typography>

            <EvolveMenu />
          </HeaderButtonContainer>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Header;