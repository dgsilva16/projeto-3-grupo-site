import axios from "axios";

const seek = axios.create({
  baseURL: "https://projeto-servidor.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    
  },
});

export default seek;


