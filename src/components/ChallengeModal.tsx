import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { Button, Box, TextField, Typography } from '@mui/material';
import ChallengeService from '../services/challenge.service';
import { ChallengeFetch } from '../models/challenge';
import axios from 'axios';

interface ChallengeModalProps {
  onClose: () => void;
  layer: string;
  region: string;
}

const ChallengeModal: React.FC<ChallengeModalProps> = ({ onClose, layer, region }) => {
  const [challenge, setChallenge] = useState<ChallengeFetch | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [userFlagValue, setUserFlagValue] = useState<string>('');
  const [correct, setCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await ChallengeService.getChallenge(layer, region);
        setChallenge(response);
        setErrorMsg(null);
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          setErrorMsg("There's no challenge. update soon!");
        } else if (error.response && error.response.status === 401) {
          setErrorMsg('Login First');
        } else {
          console.error('Error fetching challenge:', error);
          setErrorMsg(`Error fetching challenge: ${error.message}`);
        }
      }
    };

    fetchChallenge();
  }, [layer, region]);

  const handleSubmit = async () => {
    try {
      const isCorrect = await ChallengeService.checkFlag(challenge?.title || '', userFlagValue);
      console.log(isCorrect); 
      setCorrect(isCorrect);
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        const { status, data } = error.response;
        if (status === 422) {
          console.error('Validation Error:', data);
        } else {
          console.error('Error checking flag:', error);
        }
      } else {
        console.error('Error checking flag:', error);
      }
    }
  };

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
          <b>you are currently at</b>
          <p>layer: {layer}</p>
          <p>region: {region}</p>
        </Typography>

        {errorMsg && (
          <Typography variant='h4' sx={{ mt: 2 }}>
            {errorMsg}
          </Typography>
        )}

        {challenge && (
          <>
            <Typography variant='h4' sx={{ mt: 2 }}>
              Try Me!
            </Typography>
            <Typography>Title: {challenge.title}</Typography>
            <Typography>Description: {challenge.description}</Typography>
            <Typography>Connect: {challenge.connect}</Typography>
            <TextField
              label="flag is..."
              variant="outlined"
              margin="normal"
              fullWidth
              value={userFlagValue}
              onChange={(e) => setUserFlagValue(e.target.value)}
            />
            <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
              SUBMIT
            </Button>
          </>
        )}

        {correct !== null && (
        <Typography>
            {correct ? 'Correct!' : 'Incorrect!'}
        </Typography>
        )}

      </Box>
    </Modal>
  );
};

export default ChallengeModal;
