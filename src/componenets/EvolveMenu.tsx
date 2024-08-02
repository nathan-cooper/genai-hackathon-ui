import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function EvolveMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const navigate = useNavigate();
  
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: "white"}}
      >
        All Products
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => navigate("/productList")} 
        >Credit Cards</MenuItem>
        <MenuItem 
          sx={{paddingLeft: "40px"}}
          onClick={() => navigate("/productDetail?id=CR001")} 
        >Evolve Cashback Card</MenuItem>
        <MenuItem 
          sx={{paddingLeft: "40px"}}
          onClick={() => navigate("/productDetail?id=CR002")} 
        >Evolve Travel Card</MenuItem>
        <MenuItem 
          sx={{paddingLeft: "40px"}}
          onClick={() => navigate("/productDetail?id=CR003")} 
        >Evolve Fuel Card</MenuItem>
        <MenuItem 
          sx={{paddingLeft: "40px"}}
          onClick={() => navigate("/productDetail?id=CR004")} 
        >Evolve Platinum Card</MenuItem>
        <MenuItem 
          sx={{paddingLeft: "40px"}}
          onClick={() => navigate("/productDetail?id=CR005")} 
        >Evolve Blue Cash Card</MenuItem>
        <MenuItem 
          sx={{paddingLeft: "40px"}}
          onClick={() => navigate("/productDetail?id=CR006")} 
        >Evolve Renovation Card</MenuItem>
        <MenuItem
          onClick={() => navigate("/productDetail?id=LN001")} 
        >Evolve Personal Loan</MenuItem>
        <MenuItem
          onClick={() => navigate("/productDetail?id=LN002")} 
        >Evolve Student Loan</MenuItem>
        <MenuItem>Evolve BNPL Product</MenuItem>
      </Menu>
    </div>
  );
}