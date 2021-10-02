import axios from 'axios';

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com", // Change the baseURL from jsonplaceholder to the organization URL
    headers: {
        "Content-type": "application/json"
    }
})