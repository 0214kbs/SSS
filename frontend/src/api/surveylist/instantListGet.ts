import api from '../api';

const instantListGet = async () => {
  try {
    const response = await api.get('/survey/recommend/instant/anonymous');

    if (response.data.success) {
      return response.data.response;
    }
    return [];
  } catch (error) {
    console.error('Error: ', error);
    return [];
  }
};

export default instantListGet;
