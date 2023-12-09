export interface Challenge {
  title: string
  region: string
  layer: string
  description: string
  connect: string

}

export interface Challenges {
  challenges: Challenge[]
}