import React, { useState, useEffect } from 'react'
import Modal from '@mui/material/Modal'
import { Button, Box, Typography } from '@mui/material'
import EndingService from '../services/ending.service'
import ChallengeService from '../services/challenge.service'
import { Ending } from '../models/ending'
import { Challenge } from '../models/challenge'

interface EndingModalProps {
  onClose: () => void
}

const EndingModal: React.FC<EndingModalProps> = ({ onClose }) => {
  const [ending, setEnding] = useState<Ending | null>(null)
  const [solvedChallenges, setSolvedChallenges] = useState<Challenge[]>([])

  useEffect(() => {
    const fetchEnding = async () => {
      try {
        const response = await EndingService.getEnding()
        setEnding(response)
      } catch (error) {
        console.error('Error fetching ending:', error)
      }
    }

    const fetchSolvedChallenges = async () => {
      try {
        const response = await ChallengeService.getSolvedChallenges()
        const challengesArray = response.challenges
        setSolvedChallenges(challengesArray)
      } catch (error) {
        console.error('Error fetching challenges:', error)
      }
    }

    fetchEnding()
    fetchSolvedChallenges()
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

        {solvedChallenges && (
          <ul>
            <p>you solved:</p>
            {solvedChallenges.map((challenge, index) => (
              <li key={index}>
                <Typography>{challenge.title}</Typography>
                <Typography variant='body2'>{challenge.layer}</Typography>
                <Typography variant='body2'>{challenge.region}</Typography>
              </li>
            ))}
          </ul>
        )}
      </Box>
    </Modal>
  )
}

export default EndingModal
