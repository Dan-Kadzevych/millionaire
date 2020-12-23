import { normalize } from 'normalizr';

import { fetchGameConfig } from 'api/requests';
import {
  getGameConfigRequest,
  getGameConfigSuccess,
  getGameConfigError,
} from './actions';
import { gameConfigSchema } from './schemas';

function getGameConfig() {
  return async (dispatch) => {
    try {
      dispatch(getGameConfigRequest());

      const config = await fetchGameConfig();

      const data = normalize(config, gameConfigSchema);

      const answerIds = Object.keys(data.entities.answers);
      const formattedData = {
        ...data,
        result: { ...data.result, answers: answerIds },
      };

      dispatch(getGameConfigSuccess(formattedData));
    } catch (e) {
      dispatch(getGameConfigError());
    }
  };
}

export { getGameConfig };
