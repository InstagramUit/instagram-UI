import axios from "axios";

export default class API {
  async UserLogin(email, password) {
    let reasult = await axios.post(
      `https://4084-2001-ee0-4f0f-9220-24f9-4ad0-736c-4d1e.ngrok.io/login`,
      {
        email: email,
        password: password,
      }
    );
    return reasult;
  }
}
