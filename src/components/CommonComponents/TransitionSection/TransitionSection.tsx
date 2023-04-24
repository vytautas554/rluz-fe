import Image from 'mui-image';
import { ImageValues } from '../../common/interfaces';
import { Box, Typography } from '@mui/material';

function TransitionSection({ url, description, text }: ImageValues) {
  return (
    <Box sx={{ position: 'relative', textAlign: 'center' }}>
      <Image src={url} alt={description} height={320} duration={0} />
      {text ? (
        <Typography
          sx={{
            position: 'absolute',
            top: '40%',
            bottom: '50%',
            right: '42%',
            left: '42%',
            color: '#FAF9F6',
            textTransform: 'uppercase',
          }}
        >
          {text}
        </Typography>
      ) : (
        ''
      )}
    </Box>
  );
}

export default TransitionSection;
