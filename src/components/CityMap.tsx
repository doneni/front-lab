import { useEffect, useState } from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { useSnackBar } from '../contexts/snackbar'
import ChallengeModal from './ChallengeModal'
import ChallengeListModal from './ChallengeListModal'
import EndingModal from './EndingModal'

export default function CityMap() {
  const { showSnackBar } = useSnackBar()
  const layers = ['서비스', '디바이스', '플랫폼SW', '인프라']
  const regions = [
    '스마트 보안',
    '스마트 에너지',
    '스마트 모빌리티',
    '자율주행 차량',
    '실감 컨텐츠',
    '스마트 헬스케어',
    '스마트 팩토리',
    '스마트 생활',
    '스마트 교육',
    '스마트 환경',
  ]
  const location = [
    ['38vh', '6vw'],
    ['9vh', '14.5vw'],
    ['53vh', '18.5vw'],
    ['42vh', '60vw'],
    ['17vh', '23vw'],
    ['40vh', '49vw'],
    ['58vh', '40vw'],
    ['60vh', '60vw'],
    ['48vh', '31.5vw'],
    ['23vh', '39vw'],
  ]
  const [isChallengeListModalOpen, setIsChallengeListModalOpen] = useState(false)
  const [isEndingModalOpen, setIsEndingModalOpen] = useState(false)
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false)
  const [selectedLayer, setSelectedLayer] = useState('서비스')
  const [selectedRegion, setSelectedRegion] = useState('스마트 보안')
  const [backgroundImage, setBackgroundImage] = useState('서비스')
  const [showRegion, setShowRegion] = useState(false)

  const changeBackgroundImage = (layer: string) => {
    setBackgroundImage(layer);
  };

  const handleResize = () => {
    const container = document.getElementById('mapContainer')
    if (container) {
      const containerWidth = container.offsetWidth
      const containerHeight = container.offsetHeight
      const image = new Image()
      image.src = './서비스.gif'

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

  const openChallengeListModal = () => {
    setIsChallengeListModalOpen(true)
  }

  const closeChallengeListModal = () => {
    setIsChallengeListModalOpen(false)
  }

  const openEndingModal = () => {
    setIsEndingModalOpen(true)
  }

  const closeEndingModal = () => {
    setIsEndingModalOpen(false)
  }

  const openChallengeModal = (layer: string, region: string) => {
    setSelectedLayer(layer)
    setSelectedRegion(region)
    setIsChallengeModalOpen(true)
  }

  const closeChallengeModal = () => {
    setIsChallengeModalOpen(false)
  }

  const onClickLayer = (layer: string) => {
    changeBackgroundImage(layer)
    setSelectedLayer(layer)
  }

  const createButtonStyle = (top: string, left: string, backgroundColor: string) => ({
    position: 'absolute' as 'absolute',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    width: '50px',
    borderRadius: '100%',
    overflow: 'hidden',
    color: 'white',
    top,
    left,
    backgroundColor,
  })

  return (
    <main>
      <Container
        id='mapContainer'
        sx={{
          mt: 2,
          backgroundImage: `url(./layer/${backgroundImage}.gif)`,
          backgroundPosition: 'center',
          height: '85vh',
          position: 'relative',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Button onClick={() => openChallengeListModal()} style={createButtonStyle('2vh', '2vw', '#4F100C')}>
          <img
            src='/map.png'
            alt='map'
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
        </Button>
        <Button onClick={() => setShowRegion(!showRegion)} style={createButtonStyle('12vh', '2vw', '#e3a8a8')}>
          <img
            src={`./eye-${!showRegion}.png`}
            alt='visibility'
            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
          />
        </Button>
        <Button onClick={() => openEndingModal()} style={createButtonStyle('2vh', '72vw', '#4F100C')}>
          <img
            src='/magic-ball.png'
            alt='magicball'
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
              onClick={() => onClickLayer(layer)}
              sx={{
                borderRadius: 0,
                backgroundColor: selectedLayer === layer ? 'grey' : 'white',
                color: selectedLayer === layer ? 'black' : 'black',
                fontSize: '14px',
                width: '10vw',
              }}
            >
              <b>{layer}</b>
            </Button>
          ))}
        </Grid>

        {regions.map((region, index) => (
          <Grid item key={region}>
            <Button
              onClick={() => openChallengeModal(selectedLayer, region)}
              style={createButtonStyle(location[index][0], location[index][1], '#88304A')}
            >
              <img
                src={`region/${region}.png`}
                alt='region'
                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
              />
            </Button>
            { showRegion && (
              <Container
              sx={{
                position: 'absolute' as 'absolute',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                width: '180px',
                color: 'black',
                top: location[index][0],
                left: location[index][1],
                overflow: 'hidden',
                backgroundColor: 'white',
                opacity: 0.8,
                transform: 'translate(-30%, 0%)',
                display: 'flex',
                borderRadius: '10%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <i>{region}</i>
            </Container>
            )}
          </Grid>
        ))}

        {isChallengeModalOpen && (
          <ChallengeModal
            layer={selectedLayer}
            region={selectedRegion}
            onClose={closeChallengeModal}
          />
        )}

        {isChallengeListModalOpen && <ChallengeListModal onClose={closeChallengeListModal} />}

        {isEndingModalOpen && <EndingModal onClose={closeEndingModal} />}
      </Container>
    </main>
  )
}
