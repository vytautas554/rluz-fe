import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import Image from 'mui-image';
import imageForCarousel1 from '../../images/carousel/1.jpg';
import imageForCarousel2 from '../../images/carousel/2.jpg';
import imageForCarousel3 from '../../images/carousel/3.jpg';
import imageForCarousel4 from '../../images/carousel/4.jpg';
import imageForCarousel5 from '../../images/carousel/5.jpg';

function CustomCarousel() {
  const carouselImages = [
    {
      url: imageForCarousel1,
      description: '',
    },
    {
      url: imageForCarousel2,
      description: '',
    },
    {
      url: imageForCarousel3,
      description: '',
    },
    {
      url: imageForCarousel4,
      description: '',
    },
    {
      url: imageForCarousel5,
      description: '',
    },
  ];

  return (
    <Box>
      <Carousel sx={{ height: '60vh', display: 'block' }} indicators={false}>
        {carouselImages.map((carouselImage, i) => (
          <Image key={i} src={carouselImage.url} alt={carouselImage.description} fit="cover" style={{ maxHeight: '100%' }} />
        ))}
      </Carousel>
    </Box>
  );
}

export default CustomCarousel;