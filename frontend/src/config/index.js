import axios from "axios";

export const APIURL = "http://localhost:4000";

axios.defaults.baseURL = APIURL;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
