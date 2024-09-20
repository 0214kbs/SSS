import api from '../api';
import instantListGet from './instantListGet';

const userInstantListGet = async (accessToken: any) => {
  try {
    const response = await api.get('/survey/recommend/instant/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (response.data.success) {
      return response.data.response;
    } else {
      const data = await instantListGet();
      return data;
    }
  } catch (error) {
    console.error('Error: ', error);
    return [];
  }
};

export default userInstantListGet;
