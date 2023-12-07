import Image from 'mui-image';
import { ImageValues } from '../../common/interfaces';
import { Box, Typography } from '@mui/material';
import './TransitionSection.css';

function TransitionSection({ url, description, text }: ImageValues) {
  return (
    <Box sx={{ position: 'relative', textAlign: 'center' }}>
      <Image src={url} alt={description} height={320} duration={0} />
      {text ? <Typography className="transition-section-text">{text}</Typography> : ''}
    </Box>
  );
}

export default TransitionSection;
