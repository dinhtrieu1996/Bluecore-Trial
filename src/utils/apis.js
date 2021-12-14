import axios from 'axios';

export default function apiDb(base_url, endpoint, method = 'GET', body, headers) {
    return axios({
        method: method,
        url: `${base_url}/${endpoint}`,
        data: body,
        headers: headers,
    }).catch(err => {
        console.log(err)
    })
};