import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import leftImage from '../../../images/Apie mane puslapiui.jpg';
import rightImage from '../../../images/Asmeninė fotosesija.jpg';

export function AnotherGallerySection() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("//static.showit.co/1600/2KJC7dO0SjyKxVooWWzoJQ/shared/xxroses-textures-cremenoisebckgnd.png")',
      }}
    >
      <Box
        sx={{
          mx: 40,
          pt: 3,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img style={{ borderRadius: '100%', height: 300, marginTop: 65 }} src={leftImage} alt="" />
          <Box sx={{ textAlign: 'center', pt: 7, mx: 15 }}>
            <Typography sx={{ textTransform: 'uppercase', color: '#28282B', fontSize: 45 }}>
              Photos that make you feel that feeling
            </Typography>
            <Typography sx={{ color: '#28282B', pt: 3, fontSize: 20 }}>let's preserve your nostalgia</Typography>
          </Box>
          <img style={{ borderRadius: '100%', height: 300 }} src={rightImage} alt="" />
        </Box>
      </Box>
      <hr />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box>
          <Link sx={{ color: '#28282B', fontSize: 25 }} underline="none" component={RouterLink} to={'/gallery'}>
            take a look at the galleries
          </Link>
        </Box>
        <Box>
          <Link sx={{ color: '#28282B', pr: 7, fontSize: 20 }} underline="none" component={RouterLink} to={'/gallery'}>
            [ couples ]
          </Link>
          <Link sx={{ color: '#28282B', fontSize: 20 }} underline="none" component={RouterLink} to={'/gallery'}>
            [ weddings ]
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default AnotherGallerySection;
