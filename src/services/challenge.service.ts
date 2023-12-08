import axios from 'axios'
// import { Challenge } from '../models/challenge'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

class ChallengeService {
  async get_challenges() {
    const response = await axios.get(API_URL + 'challenges/get-challenges')
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

