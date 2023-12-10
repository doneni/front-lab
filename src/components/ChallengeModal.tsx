import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Button, Box, Typography } from '@mui/material';
import ChallengeService from '../services/challenge.service';
import { Challenge } from '../models/challenge';

interface ChallengeModalProps {
  onClose: () => void;
  layer: string;
  region: string;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({ onClose, layer, region }) => {
  const [challenge, setChallenge] = useState<Challenge>();
  
  useEffect(() => {
    const fetchChallenge = async () => {
        try {
            const response = await ChallengeService.getChallenge(layer, region);

            setChallenge(response);
        } catch (error) {
            console.error('Error fetching challenge:', error);
        }
    };

    fetchChallenge();
  })

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

        <Typography variant="h4" sx={{ mt: 2 }}>
          Try Me!
        </Typography>

        <Typography>
          Layer: {layer}
        </Typography>
        <Typography>
          Region: {region}    
        </Typography>

        {challenge && (
        <>
          <Typography>
            Title: {challenge.title}
          </Typography>
          <Typography>
            Description: {challenge.description}
          </Typography>
          <Typography>
            Connect: {challenge.connect}
          </Typography>
        </>
      )}

      </Box>
    </Modal>
  );
};

export default ChallengeModal;
