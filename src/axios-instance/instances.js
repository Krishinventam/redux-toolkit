import axios from "axios";

const URL = process.env.REACT_APP_URL;
console.log("URL", URL);
export const instance = axios.create({
  baseURL: URL
});