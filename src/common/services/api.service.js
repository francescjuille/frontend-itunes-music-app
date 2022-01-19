import axios from "axios";
const ApiService = {
    async httpGet(url) {
        const headers = {
            "Content-Type":"application/json",
            "Accept":"*/*"
        }
        return await axios({
            method: 'get',
            url: url,
            headers: headers
        });
    },

    async httpPost(url, body) {
        const headers = {
            "Content-Type":"application/json",
            "Accept":"*/*"
        }
        return  axios({
            method: 'post',
            url: url,
            data: body,
            headers: headers
        });
    }
}

export default ApiService;