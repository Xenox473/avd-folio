"use client";

import * as React from 'react';
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
import LinkDisplay from './LinkDisplay';
import { useRouter } from 'next/navigation';
import { colors } from '../colors';

const pages = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Experience',
    href: '/experience'
  },
  {
    label: 'Projects',
    href: '/projects'
  }
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const router = useRouter();

  return (
    <AppBar position="static" sx={{
      background: 'none',
      boxShadow: 'none',

    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
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
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={() => router.push(page.href)}>
                  <Typography variant="body2" color={colors.darkGrey} sx={{ textAlign: 'center' }}>{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={() => (router.push(page.href))}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography variant="body2">
                  {page.label}
                </Typography>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <LinkDisplay />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
