import axios from 'axios';
import userDetails from '@/userDetails';

const getMoreInfo = (users) => {
  return users.map((user, i) => ({ ...user, ...(userDetails[i] || userDetails[0]) }));
};

export default {
  async getCards() {
    try {
      const response = await axios.get('https://reqres.in/api/users');
      const { data } = response;
      const moreInfo = getMoreInfo(data.data);
      return { ...data, ...moreInfo };
    } catch (err) {
      console.error(err);
    }
  },
};
