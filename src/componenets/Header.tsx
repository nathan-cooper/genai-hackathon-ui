import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from "../assets/Evolve Bank Logo_white_logo_only.png";
import EvolveMenu from './EvolveMenu';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" elevation={5}
      sx={{ marginBottom: "20px", borderRadius: "10px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} style={{ height: "50px", marginRight: "20px" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginRight: "30px",
              ":hover": {
                cursor: "pointer"
              }
            }}
          >
          EVOLVE
        </Typography>
        <EvolveMenu />
      </Toolbar>
    </Container>
    </AppBar >
  );
}
export default Header;