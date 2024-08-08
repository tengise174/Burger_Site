import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-834c6-default-rtdb.firebaseio.com/"
});

export default instance;