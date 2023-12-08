import React, { useEffect, useState } from 'react'
import { Button, Container } from '@mui/material'
import { useSnackBar } from '../contexts/snackbar'
import ChallengeModal from './ChallengeModal'

export default function CityMap() {
  const { showSnackBar } = useSnackBar()

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
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
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
          onClick={openModal}
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
        {isModalOpen && (
        <ChallengeModal onClose={closeModal} />
        )}
      </Container>
    </main>
  )
}
