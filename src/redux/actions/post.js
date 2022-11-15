import { GET_DATA } from "../constants";

export const getData = (data) => ({ type: GET_DATA, payload: data });
