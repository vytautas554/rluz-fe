import { Link, Button, Toolbar, Box, AppBar } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
  { name: 'Pagrindinis', route: '/' },
  { name: 'Galerija', route: '/gallery' },
  { name: 'Kainos', route: '/prices' },
  { name: 'Blogas', route: '/blog' },
  { name: 'Apie mane', route: '/about' },
];

function MainNavigation() {
  const [isSticky, setIsSticky] = useState(false);

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
                backgroundImage:
                  'url("https://static.showit.co/1600/l5jyslw-T2C1FGjyzyZKXw/88750/xxroses-textures-tannoisebckgnd.png")',
                opacity: 0.95,
              }
            : { position: 'absolute', backgroundColor: 'transparent', boxShadow: 'none' }),
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box>
            {navItems.map((item) => (
              <Button
                disableRipple
                key={item.name}
                sx={{
                  mr: 2,
                  '&:nth-child(3)': {
                    mr: 28,
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <Link
                  sx={{
                    fontSize: 11,
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainNavigation;
