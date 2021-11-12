import axios from "axios";

const api = axios.create({
  baseURL: "https://finance-motion.herokuapp.com/",
});

export default api;
