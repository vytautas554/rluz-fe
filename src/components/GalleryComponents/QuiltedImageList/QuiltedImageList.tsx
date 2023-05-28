import { Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image1 from '../../../images/Apie mane puslapiui.jpg';
import image2 from '../../../images/Asmeninė fotosesija.jpg';
import image3 from '../../../images/Justina ir Vilius.2701-Edit-3.jpg';
import image4 from '../../../images/Nėtumo fotosesija.jpg';
import image5 from '../../../images/Pirmam puslapiui.jpg';
import image6 from '../../../images/Poros fotosesija.jpg';
import { QuiltedImageData } from '../../common/interfaces';

const imageData: QuiltedImageData[] = [
  {
    img: image1,
    title: 'title',
    rows: 2,
    cols: 2,
  },
  {
    img: image2,
    title: 'title',
  },
  {
    img: image3,
    title: 'title',
  },
  {
    img: image4,
    title: 'title',
    rows: 2,
    cols: 2,
  },
  {
    img: image5,
    title: 'title',
    cols: 2,
  },
  {
    img: image6,
    title: 'title',
    rows: 2,
    cols: 4,
  },
];

export default function QuiltedImageList() {
  function setImage(image: string, size: number, rows = 1, cols = 1): Record<string, string> {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <Box sx={{ py: 10 }}>
      <ImageList sx={{ mx: 40, width: 1300 }} variant="quilted" cols={4} rowHeight={321}>
        {imageData.map((image) => (
          <ImageListItem key={image.img} cols={image.cols || 1} rows={image.rows || 1}>
            <img {...setImage(image.img, 321, image.rows, image.cols)} alt={image.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
