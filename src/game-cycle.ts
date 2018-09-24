import axios from 'axios';
import * as url from 'url';
import * as uuid from 'uuid/v4';

import { GameResult } from './typings';

const requestConfig = {
    communityAppUrl: 'http://localhost:3030/',
    gameRegistrationUrl: '/api/v1/app-token',
    gameResultUrl: '/api/v1/statistic/set-game-result',
};

export class GameCycle {
    public async setGameResult(gameResult: GameResult[], appToken: string): Promise<void> {
        const path = url.resolve(requestConfig.communityAppUrl, requestConfig.gameResultUrl);

        try {
            await axios.post<string>(path, gameResult, { headers: { Authorization: appToken } });
        } catch (requestError) {
            let errorMessage;

            if (requestError.response) {
                // tslint:disable-next-line:max-line-length
                errorMessage = `Unexpected ${requestError.response.status} status code while requesting ${path}. Response body: ${requestError.response.data}.`;
            } else if (requestError.request) {
                errorMessage = `Failed to get response while requesting ${path}.`;
            } else {
                errorMessage = `Failed to request ${path}: ${requestError.message}.`;
            }

            throw new Error(errorMessage);
        }
    }

    public createRoomToken(): string {
        return uuid();
    }
}
