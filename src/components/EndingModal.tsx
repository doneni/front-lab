import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Button, Box,Typography } from '@mui/material';
import EndingService from '../services/ending.service';
import { Ending } from '../models/ending'

interface EndingModalProps {
  onClose: () => void;
}

const EndingModal: React.FC<EndingModalProps> = ({ onClose }) => {
    const [ending, setEnding] = useState<Ending>()

    useEffect(() => {
      const fetchEnding = async () => {
        try {
          const response = await EndingService.getEnding()
          setEnding(response)
        } catch (error) {
          console.error('Error fetching ending:', error)
        }
      }
  
      fetchEnding()
    }, [])


  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Button onClick={onClose}>Close Modal</Button>
        <Typography>
          <h1>Ending</h1>
        </Typography>

        {ending && (
          <Typography variant='h4' sx={{ mt: 2 }}>
            {ending.title}
          </Typography>
        )}

      </Box>
    </Modal>
  );
};

export default EndingModal;
