import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Button, Box, TextField, Typography } from '@mui/material';
import ChallengeService from '../services/challenge.service';
import axios from 'axios';

interface EndingModalProps {
  onClose: () => void;
}

const EndingModal: React.FC<EndingModalProps> = ({ onClose }) => {

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


      </Box>
    </Modal>
  );
};

export default EndingModal;
