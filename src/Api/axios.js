import axios from "axios";

const axiosInstance = axios.create({
  //baseURL: "http://127.0.0.1:5001/clone-e82a7/us-central1/api", // local development
  
  baseURL: "https://us-central1-clone-e82a7.cloudfunctions.net/api", // deployed on Firebase
});


    export {axiosInstance}