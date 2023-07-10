import { Box, Button } from '@mui/material';
import { GalleryCardData } from '../../common/interfaces';

function MainGalleryFilterSection({ galleryCardData, onSelectFilter, onSlideToggle }: any) {
  const handleChange = (photoShootType: string) => {
    onSelectFilter(photoShootType);
    onSlideToggle();
  };

  const uniquePhotoShootTypes = galleryCardData
    .map((data: GalleryCardData) => data.photoShootType)
    .filter((value: string, index: number, array: string[]) => array.indexOf(value) === index);

  return (
    <Box sx={{ mt: 20, display: 'flex', justifyContent: 'center' }}>
      <Button sx={{ px: 3, color: 'black', fontFamily: 'marcellus', fontSize: 17 }} onClick={() => handleChange('visos')}>
        Visos
      </Button>
      {uniquePhotoShootTypes.map((photoShootType: string, index: number) => (
        <Button
          sx={{ px: 3, color: 'black', fontFamily: 'marcellus', fontSize: 17 }}
          key={index}
          onClick={() => handleChange(photoShootType)}
        >
          {photoShootType}
        </Button>
      ))}
    </Box>
  );
}

export default MainGalleryFilterSection;
