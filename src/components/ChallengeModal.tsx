import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Button, Box, Typography } from '@mui/material';
import ChallengeService from '../services/challenge.service';
import { Challenge } from '../models/challenge';

interface ChallengeModalProps {
  onClose: () => void;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({ onClose }) => {
  const [challenges, setChallenges] = useState<Challenge[]>([]);

  useEffect(() => {
    // Challenge 데이터를 가져오는 비동기 함수
    const fetchChallenges = async () => {
      try {
        const response = await ChallengeService.getAllChallenges();
        const challengesArray = response.challenges;

        console.log(challengesArray);

        setChallenges(challengesArray);
      } catch (error) {
        // 오류 처리
        console.error('Error fetching challenges:', error);
      }
    };

    // 비동기 함수 호출
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
              <Typography variant="body2">{challenge.description}</Typography>
            </li>
          ))}
        </ul>
      </Box>
    </Modal>
  );
};

export default ChallengeModal;
