import { Box, Button, Container, Divider, Link, Typography, Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'

export async function loader() {
  return {}
}

export default function Home() {
  return (
    <main>
      <img
        src='/logo.png'
        alt='Logo'
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
      <Box
        sx={{
          pt: 8,
          pb: 2,
        }}
      >
        <Container>
          <Grid container spacing={4} justifyContent='center'>
            <Grid item>
              <Button
                component={NavLink}
                to='/challenge'
                sx={{
                  color: '#E08F8D',
                  fontSize: '50px',
                  backgroundColor: '#5D1410',
                  margin: '0 10px',
                  borderRadius: '20px',
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
                  color: '#E08F8D',
                  fontSize: '50px',
                  backgroundColor: '#5D1410',
                  margin: '0 10px',
                  borderRadius: '20px',
                }}
              >
                STORY
              </Button>
            </Grid>
          </Grid>
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
      </Box>
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
