import { useEffect } from 'react';
import { Button, Container } from '@mui/material';
import { useSnackBar } from '../contexts/snackbar';

export default function Challenge() {
  const { showSnackBar } = useSnackBar();

  const handleResize = () => {
    const container = document.getElementById('mapContainer');
    if (container) {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const image = new Image();
      image.src = './map.gif';

      image.onload = () => {
        if (containerWidth < image.width || containerHeight < image.height) {
          showSnackBar('The screen size is too small to display the entire image.', 'warning');
        }
      };
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main>
      <Container
        id='mapContainer'
        sx={{
          mt: 2,
          backgroundImage: 'url(./map.gif)',
          backgroundPosition: 'center',
          height: '85vh',
          position: 'relative',
        }}
      >
        <Button
          style={{
            position: 'absolute',
            top: '2vh',
            left: '2vh',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            width: '50px',
            borderRadius: '100%',
            backgroundColor: '#3F7CB1',
            overflow: 'hidden',
          }}
        >
          <img
            src='/dummy.png'
            alt='Logo'
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
        </Button>
      </Container>
    </main>
  );
}
