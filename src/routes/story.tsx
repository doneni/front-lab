import { Grid,
    
     Paper, Typography } from '@mui/material'
import CityMap from '../components/CityMap'

export default function Challenge() {
  return (
    <main>
      <CityMap></CityMap>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} md={7} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography>Here comes the map of the city (STORY MODE)</Typography>
            <img
              src='/chu.png'
              alt='chu'
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </Paper>
        </Grid>
      </Grid>
    </main>
  )
}
