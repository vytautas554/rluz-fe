import { Link, Box, Typography } from '@mui/material';
import { ImageValues } from '../common/interfaces';
import { Link as RouterLink } from 'react-router-dom';

export function ParallaxSection({ url, description, text }: ImageValues) {
  return (
    <Box sx={{ height: 450 }}>
      <Box
        sx={{
          backgroundImage: `url('${url}')`,
          height: '100%',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        title={description}
      >
        <Typography sx={{ fontSize: 26, textAlign: 'center', textTransform: 'uppercase', pt: 25 }}>
          <Link
            sx={{
              color: 'white',
              transition: 'color 0.4s',
              '&:hover': {
                color: 'black',
              },
            }}
            component={RouterLink}
            to={'/prices'}
            underline="none"
          >
            {text}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default ParallaxSection;
