import axios from 'axios'
import { User } from '../models/user'
import { Challenge } from '../models/challenge'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

class ChallengeService {
  async getAllChallenges(): Promise<Challenge[]> {
    const response = await axios.get(API_URL + 'challenges/get-all-challenges')
    return response.data
  }

  async getChallenges(): Promise<Challenge[]> {
    const response = await axios.get(API_URL + 'challenges/get-challenges')
    return response.data
  }

  async checkFlag(title: string, user_flag: string): Promise<User> {
    const response = await axios.post(API_URL + 'challenges/check-flag', { title, user_flag })
    return response.data
  }
}

export default new ChallengeService

/*
export interface Challenge {
  id: string
  title: string
  region: string
  layer: string
  description: string
  connect: string
}
*/

