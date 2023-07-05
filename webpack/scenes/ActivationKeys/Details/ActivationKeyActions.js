import api from '../../../services/api';
import { ACTIVATION_KEY } from './ActivationKeyConstants';

export const getActivationKey = ({ akId }) => ({
  type: 'API_GET',
  payload: {
    key: `${ACTIVATION_KEY}_${akId}`,
    url: api.getApiUrl(`/activation_keys/${akId}`),
  },
});

export default getActivationKey;
