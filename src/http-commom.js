import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8096",
    headers: {
        "Content-type": "application/json"
    }
});