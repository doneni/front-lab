import { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import { useSnackBar } from '../contexts/snackbar';
import ChallengeModal from './ChallengeModal';
import ChallengeListModal from './ChallengeListModal';

export default function CityMap() {
  const { showSnackBar } = useSnackBar();
  const layers = ['LAYER1', 'LAYER2', 'LAYER3', 'LAYER4'];
  const regions = ['REGION1', 'REGION2', 'REGION3', 'REGION4', 'REGION5', 'REGION6', 'REGION7', 'REGION8', 'REGION9', 'REGION10']
  const location = [['38vh', '6vw'], ['9vh', '14.5vw'], ['53vh', '18.5vw'], ['42vh', '60vw'], ['17vh', '23vw'], ['40vh', '49vw'], ['58vh', '40vw'], ['60vh', '60vw'], ['48vh', '31.5vw'], ['23vh', '39vw']]
  const [isChallengeListModalOpen, setIsChallengeListModalOpen] = useState(false)
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState('LAYER1');
  const [selectedRegion, setSelectedRegion] = useState('REGION1');

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

  const openChallengeListModal = () => {
    setIsChallengeListModalOpen(true);
  }

  const closeChallengeListModal = () => {
    setIsChallengeListModalOpen(false);
  }

  const openChallengeModal = (layer: string, region: string) => {
    setSelectedLayer(layer);
    setSelectedRegion(region);
    setIsChallengeModalOpen(true);
  };

  const closeChallengeModal = () => {
    setIsChallengeModalOpen(false);
  };

  const createButtonStyle = (top: string, left: string) => ({
    position: 'absolute' as 'absolute',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    width: '50px',
    borderRadius: '100%',
    backgroundColor: '#3F7CB1',
    overflow: 'hidden',
    color: 'white',
    top,
    left,
  });

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
          onClick={() => openChallengeListModal()}
          style={createButtonStyle('2vh', '2vw')}
        >
          <img
            src='/smile.png'
            alt='Logo'
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
        </Button>
        <Grid
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          style={{ 
            backgroundColor: 'white',
            minHeight: '10vh',
            maxWidth: '10vw',
            position: 'absolute',
            top: '62vh',
            left: '1.5vw',
           }}
        >
          {layers.map((layer) => (
            <Button
              key={layer}
              onClick={() => setSelectedLayer(layer)}
              sx={{
                borderRadius: 0,
                backgroundColor: selectedLayer === layer ? 'grey' : 'white',
                color: selectedLayer === layer ? 'black' : 'black',
                fontSize: '14px',
                width: '10vw',
              }}
            >
              {layer}
            </Button>
          ))}
        </Grid>

        {regions.map((region, index) => (
          <Grid item key={region}>
            <Button
              onClick={() => openChallengeModal(selectedLayer, region)}
              style={createButtonStyle(location[index][0], location[index][1])}
            >
              {region}
            </Button>
          </Grid>
        ))}

        {isChallengeModalOpen && (
          <ChallengeModal layer={selectedLayer} region={selectedRegion} onClose={closeChallengeModal} />
        )}   

        {isChallengeListModalOpen && (
          <ChallengeListModal onClose={closeChallengeListModal} />
        )}      

      </Container>
    </main>
  )
}
