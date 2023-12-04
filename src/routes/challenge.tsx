import { Grid, Container, Paper, Typography } from '@mui/material'

export default function Challenge() {
  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <img src='/map.gif' alt='map' style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} md={7} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography>Here comes the map of the city (CHALLENGE MODE)</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
