import React, { useEffect, useState } from 'react';
import { Link, Button, Toolbar, Box, AppBar, Drawer, List, ListItem, IconButton, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import colorlessLogo from '../../../images/signature-and-logo/permatomas-baltas-auksas-2.png';
import logo from '../../../images/signature-and-logo/permatomas-baltas-auksas.png';

const navItems = [
  { name: 'Pagrindinis', route: '/' },
  { name: 'Galerija', route: '/gallery' },
  { name: 'Kainos', route: '/prices' },
  { name: 'Blogas', route: '/blog' },
  { name: 'Apie mane', route: '/about' },
  { name: 'DUK', route: '/faq' },
];

function MainNavigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:900px)');

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 900 ? setIsSticky(true) : setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <AppBar
        color="transparent"
        component="nav"
        sx={{
          ...(isSticky
            ? {
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 100,
                background: '#e0c5aa',
                opacity: 0.95,
              }
            : { position: 'absolute', backgroundColor: 'transparent', boxShadow: 'none' }),
        }}
      >
        <Toolbar sx={{ justifyContent: isSmallScreen ? 'left' : 'center' }}>
          <Box>
            {!isSmallScreen &&
              navItems.map((item, i) => (
                <Button
                  disableRipple
                  key={item.name}
                  sx={{
                    mr: 2,
                    '&:hover': {
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {i === 3 ? (
                    <Box sx={{ pr: 3, mx: 5 }}>
                      <img src={colorlessLogo} alt="" style={{ maxHeight: 80, padding: 0, margin: 0 }} />
                    </Box>
                  ) : (
                    ''
                  )}
                  <Link
                    sx={{
                      fontSize: 12,
                      color: isSticky ? '#fff' : '#f3e9e0',
                      backgroundColor: 'transparent',
                    }}
                    component={RouterLink}
                    to={item.route}
                    underline="none"
                  >
                    {item.name}
                  </Link>
                </Button>
              ))}
          </Box>
          {isSmallScreen && (
            <IconButton onClick={() => setIsSideNavOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{
          sx: { width: '90%', background: '#e0c5aa' },
        }}
        anchor="left"
        open={isSideNavOpen}
        onClose={() => setIsSideNavOpen(false)}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
          <Box>
            <img src={logo} alt="" style={{ maxHeight: 80 }} />
          </Box>
          <IconButton onClick={() => setIsSideNavOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} component={RouterLink} to={item.route}>
              <Link
                onClick={() => setIsSideNavOpen(false)}
                sx={{ color: '#fff', fontSize: 16 }}
                component={RouterLink}
                to={item.route}
                underline="none"
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default MainNavigation;
