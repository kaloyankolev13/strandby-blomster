import { ref } from 'vue';
import Cookies from 'js-cookie';
import router from '../router';
import axios from '../../axiosInstance';

const axiosInstance = axios;

const userCred = ref({
  username: '',
  password: '',
  message: null,
  token: Cookies.get('token'),
});

const User = () => {
  // Sends the username and password to the server to check if there is a match
  const sendAdmin = async (cred) => {
    await axiosInstance
      .post('/admin/login', {
        username: cred.username,
        password: cred.password,
      })
      .then((res) => {
        userCred.value.token = Cookies.get('token');
        console.log(res.data);
        setTimeout(() => {
          userCred.value.token = null;
        }, 1000 * 60 * 60);
        router.push('/admin');
      })
      .catch((err) => {
        userCred.value.message = 'Wrong entry !';
        console.log(err);
      });
  };

  // The logout function will remove the isAdmin variable
  // from local storage by destroying the cookie
  const logOut = async () => {
    await axiosInstance
      .get('/admin/logout')
      .then(() => {
        Cookies.remove('token');
        userCred.value.token = null; // update token value
        router.push('/admin/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Use watch to observe changes to the token value
  // Get user data from passport js
  return { userCred, sendAdmin, logOut };
};

export default User;
