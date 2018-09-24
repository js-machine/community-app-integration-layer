export enum ResultStatus {
    Init,
    Win,
    Lose,
    Draw,
}

export enum ParticipationStatus {
    Init,
    Leave,
    Play,
}

export interface GameResult {
    userToken: string;
    playedTime: number;
    scores: number;
    resultStatus: ResultStatus;
    participationStatus: ParticipationStatus;
}
