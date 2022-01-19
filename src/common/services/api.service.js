import axios from "axios";
import constants from "../constants"
const ApiService = {
    async httpGet(url) {
        const headers = {
            "Content-Type":"application/json",
            "Accept":"*/*"
        }
        return await axios({
            method: 'get',
            url: constants.API_BASE_URL + url,
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
            url: constants.API_BASE_URL + url,
            data: body,
            headers: headers
        });
    }
}

export default ApiService;