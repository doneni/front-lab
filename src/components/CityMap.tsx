import { useEffect } from 'react'
import { Button, Container } from '@mui/material'
import { useSnackBar } from '../contexts/snackbar'

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
          showSnackBar('Current window size is not recommended. Maximize the window with proper resolution.', 'warning')
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
        />
      </Container>
    </main>
  )
}
