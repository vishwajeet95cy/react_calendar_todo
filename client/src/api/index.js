import axios from "axios";

const api = axios.create();

// api.defaults.baseURL =
//   import.meta.env.MODE == "development"
//     ? "http://localhost:5000/api"
//     : "http://localhost:5000/api";

api.defaults.baseURL = "/api";

api.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

//All request will wait 2 seconds before timeout
api.defaults.timeout = 2000;

api.defaults.withCredentials = true;

export default api;
