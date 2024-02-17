import axios from "axios";

const baseURL = "https://dummyjson.com";

export const axiosClient = axios.create({
  baseURL,
  headers: {
    "X-Custom-Header": "foobar",
  },
  withCredentials: false,
});
