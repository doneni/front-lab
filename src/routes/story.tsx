import { Grid, Container, Paper, Typography } from '@mui/material'

export default function Story() {
  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} md={7} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography>
                Here comes the map of the city (STORY MODE)
            </Typography>
            <img
                src='/chu.png'
                alt='chu'
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
