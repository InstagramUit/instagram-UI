import axios from "axios";
import { getData } from "../redux/actions/post";

// export default class API {

const getPosts = (url) => (dispatch) => {
  return new Promise(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch(getData(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

export default getPosts;
