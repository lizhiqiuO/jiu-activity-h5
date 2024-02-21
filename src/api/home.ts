import  api  from '@/const/homeApi';
import http from '@/uitls/request';

async function httpGet(api, params) {
    try {
        const getParams = {
            ...params,
        };
        const res = await http.get(api, getParams);
        console.log('res', res, api, getParams)
        const data = res.data;

        if (!data) {
            return;
        }
        return {
            data: data.data || data,
            errno: data.hasOwnProperty('errno') ? data.errno : data.error_code,
            errmsg: (data.hasOwnProperty('errmsg') ? data.errmsg : data.error_msg) || data.error,
        };
    }
    catch (error) {
        return {
            error,
        };
    }
};

export const getBaseInfo = async (params) => {
	const res =  await httpGet(api.GET_BASE_INFO, {params});
	return res;
};
