import axios from 'axios'
import { Challenge } from '../models/challenge'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

class ChallengeService {
  // async get_challenge(title: Title) {
  //   const response = await axios.post(API_URL + 'title', title)
  //   return response.data
  // }
}

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

