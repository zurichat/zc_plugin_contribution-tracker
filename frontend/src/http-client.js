import axios from 'axios';

export default axios.create({
    baseURL: "https://ct.zuri.chat/v1", // Change the baseURL to Backend API endpoint url e.g "https://ct.zuri.chat/v1"
    headers: {
        Accept: 'application/json',
        "Content-type": "application/json"
    },
    timeout: 300000
})


