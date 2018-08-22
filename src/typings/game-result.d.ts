export interface GameResult {
    roomToken: string,
    playersResult: PlayerResult[]
}

export interface PlayerResult {
    playerToken: string,
    playerPoints: number
}
