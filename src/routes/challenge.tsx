import { Button, } from '@mui/material'
import CityMap from '../components/CityMap'
import { NavLink } from 'react-router-dom'

export default function Challenge() {
  return (
    <main>
      <CityMap></CityMap>
      <Button
        component={NavLink}
        to='/record'
        sx={{
            position: 'absolute' as 'absolute',
            backgroundSize: '100% 100%',
            backgroundPosition: 'stretch',
            width: '80px',
            height: '80px',
            overflow: 'hidden',
            color: 'white',
            borderRadius: '10%',
            top: '40vh',
            left: '91vw',
            boxShadow: '2px 2px 4px grey',
            zIndex: 1,
      }}>
        <img
          src='/record.png'
          alt='record'
          style={{ width: '90px', height: '90px', objectFit: 'cover' }}
        />
      </Button>

    </main>
  )
}
