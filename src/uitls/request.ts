/** 
 * @description  接口封装
*/
import axios from "axios";

const http = axios.create({
    timeout: 15000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
});

http.interceptors.response.use(
    response => {
        try {
            const { data } = response;
            const resData = data.data || data;
            const errno = resData.hasOwnProperty('errno') ? resData.errno : resData.error_code;    
        } catch(e) {
        }
        return response;
    }
)

// 封装 request 方法
const  request = ({
    url,
    type = 'get',
    params,
}) => {
    if (params) {
        return http[type](url, {params});
    }
    return http[type](url);
}

export default {
    get(url, params) {
        return request({url, params, type: 'get'});
    },
    post(url, params) {
        return request({url, params, type: 'post'});
    }
}
