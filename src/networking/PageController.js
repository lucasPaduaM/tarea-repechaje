/* eslint-disable */
import axios from 'axios';

class PageController {
      saveUser(name, email, password) {
    alert('parmetros recibidos');
    const user = {
      password,
      name,
      email,
    };
    axios.post('https://repechaje-backend.herokuapp.com/users', {
      user,
    });
  }
}

export default PageController;
