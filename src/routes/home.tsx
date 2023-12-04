import { Box, Button, Container, Divider, Link, Typography, Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'

export async function loader() {
  return {}
}

export default function Home() {
  return (
    <main>
      <Container
        sx={{
          position: 'relative',
        }}
      >
        <img
          src='/logo.png'
          alt='Logo'
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '90%',
            right: '-5%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Grid 컨테이너로 감싼 버튼들 */}
          <Grid container direction='row' spacing={2} justifyContent='center'>
            <Grid item>
              <Button
                component={NavLink}
                to='/challenge'
                sx={{
                  color: '#5D1410',
                  fontSize: '24px',
                  backgroundColor: '#E08F8D',
                  borderRadius: '10px',
                  width: '7vw',
                  height: '70%',
                }}
              >
                CHALLENGE
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={NavLink}
                to='/story'
                sx={{
                  color: '#5D1410',
                  fontSize: '24px',
                  backgroundColor: '#E08F8D',
                  borderRadius: '10px',
                  width: '7vw',
                  height: '70%',
                }}
              >
                STORY
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth='sm'>
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link href='https://fastapi.tiangolo.com/'>
            <Box
              component='img'
              sx={{
                width: 250,
              }}
              alt='simpleLink'
              src='fastapi.png'
            />
          </Link>

          <Typography variant='h3' sx={{ mr: 2 }} color='text.secondary'>
            +
          </Typography>

          <Link href='https://reactjs.org/' underline='none'>
            <Box sx={{ display: 'flex' }}>
              <Box
                component='img'
                sx={{
                  width: 100,
                  mr: 1,
                }}
                alt='simpleLink2'
                src='react.svg'
              />
            </Box>
          </Link>
        </Box>
        <Typography variant='h3' align='center' color='text.secondary' sx={{ mt: 5 }}>
          Hi There
        </Typography>
      </Container>

      <Container sx={{ py: 8 }} maxWidth='md'>
        <Box sx={{ mb: 4 }}>
          <Typography variant='body1'>This is typography variant (body1)</Typography>
          <Typography variant='h6' gutterBottom sx={{ mt: 4 }}>
            This is typography variant (h6)
          </Typography>
          <Divider />
        </Box>
      </Container>
    </main>
  )
}
