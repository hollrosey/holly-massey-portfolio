import * as React from 'react';
import Link from "next/link";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

interface Link {
    name: string;
    location: string;
  }
  
  interface AppBarProps {
    links: Link[];
  }

const ResponsiveAppBar: React.FC<AppBarProps> = ({ links }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  

  return (
    <AppBar className="appBar" sx={{ backgroundColor: '#597B6A' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box className="boxMobile" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', justifyContent: 'flex-end' } }}>
          <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >

              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {links.map((link, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link className="navAtag" href={link.location}><Typography textAlign="center" color="#1a3c2a">
           {link.name}
          </Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box className="box" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
            {links.map((link, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#f4f2f1', display: 'block' }}
              >
                <Link className="navAtagDesktop" href={link.location}> 
           {link.name}
          </Link>
              </Button>
            ))}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;