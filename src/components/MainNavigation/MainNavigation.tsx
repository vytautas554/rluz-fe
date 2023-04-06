import { Link, Button, Toolbar, Box, AppBar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const navItems = [
  { name: 'Pagrindinis', route: '/' },
  { name: 'Galerija', route: '/gallery' },
  { name: 'Kainos', route: '/prices' },
  { name: 'Blogas', route: '/blog' },
  { name: 'Apie mane', route: '/about' },
];

function MainNavigation() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" color="transparent" sx={{ boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box>
            {navItems.map((item) => (
              <Button
                disableRipple
                key={item.name}
                sx={{
                  pr: 4,
                  '&:nth-child(3)': {
                    pr: 28,
                  },
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <Link
                  sx={{ fontSize: 11, color: '#f3e9e0', backgroundColor: 'transparent' }}
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
