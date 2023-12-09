import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Button, Box, Typography } from '@mui/material';
import ChallengeService from '../services/challenge.service';
import { Challenge } from '../models/challenge';

interface ChallengeListModalProps {
  onClose: () => void;
}

const ChallengeListModal: React.FC<ChallengeListModalProps> = ({ onClose }) => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await ChallengeService.getAllChallenges();
        const challengesArray = (response.challenges as Challenge[]) || [];

        console.log(challengesArray);

        setChallenges(challengesArray);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    fetchChallenges();
  }, []);

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
          Challenge List
        </Typography>

        <ul>
          {challenges.map((challenge, index) => (
            <li key={index}>
              <Typography>{challenge.title}</Typography>
              <Typography variant="body2">{challenge.layer}</Typography>
              <Typography variant="body2">{challenge.region}</Typography>
              <Typography variant="body2">{challenge.description}</Typography>
              <Typography variant="body2">{challenge.connect}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Modal>
  );
};

export default ChallengeListModal;