import { GET_DATA } from "../constants";

const initialState = {
  listPosts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        listPosts: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
