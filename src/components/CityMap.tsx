import React, { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import { useSnackBar } from '../contexts/snackbar';
import ChallengeModal from './ChallengeModal';
import ChallengeListModal from './ChallengeListModal';

export default function CityMap() {
  const { showSnackBar } = useSnackBar();

  const handleResize = () => {
    const container = document.getElementById('mapContainer')
    if (container) {
      const containerWidth = container.offsetWidth
      const containerHeight = container.offsetHeight
      const image = new Image()
      image.src = './map.gif'

      image.onload = () => {
        if (containerWidth < image.width || containerHeight < image.height) {
          showSnackBar(
            'Current window size is not recommended. Maximize the window with proper resolution.',
            'warning',
          )
        }
      }
    }
  }


  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const layers = ['LAYER1', 'LAYER2', 'LAYER3', 'LAYER4'];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState('LAYER1');

  const openModal = (layer: string) => {
    setSelectedLayer(layer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Button
          onClick={() => openModal(selectedLayer)}
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
            src='/smile.png'
            alt='Logo'
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
        </Button>
        <Grid
          sx={{
            backgroundColor: 'white',
          }}
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          style={{ 
            minHeight: '10vh', 
            width: '10vh',
            position: 'absolute',
            top: '60vh',
            left: '3vw',
           }}
        >
          {layers.map((layer) => (
            <Button
              key={layer}
              onClick={() => setSelectedLayer(layer)}
            >
              {layer}
            </Button>
          ))}
        </Grid>

        {isModalOpen && (
          <ChallengeModal layer={selectedLayer} onClose={closeModal} />
        )}        

      </Container>
    </main>
  )
}
