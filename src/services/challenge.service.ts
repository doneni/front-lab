import axios from 'axios'
import { User } from '../models/user'
import { ChallengeFetch, Challenges } from '../models/challenge'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

class ChallengeService {
  async getAllChallenges(): Promise<Challenges> {
    const response = await axios.get(API_URL + 'challenge/get-all-challenges')
    
    return response.data
  }

  async getChallenge(layer: string, region: string): Promise<ChallengeFetch> {
    const response = await axios.get(API_URL + 'challenge/get-challenge', {
      params: { layer, region },
    })

    return response.data
  }

  async checkFlag(title: string, user_flag: string): Promise<boolean> {
    const response = await axios.post(API_URL + 'challenge/check-flag', {
      title, user_flag,
    });

    return response.data.correct;
  }

  // async checkFlag(title: string, user_flag: string): Promise<User> {
  //   const response = await axios.post(API_URL + 'challenge/check-flag', {
  //     title, user_flag,
  //   });
        
  //   return response.data
  // }
}

export default new ChallengeService()