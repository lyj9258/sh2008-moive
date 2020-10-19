import axios from "axios";

//设置基础域名
axios.defaults.baseURL = "https://m.maizuo.com/";
axios.interceptors.request.use(
    function (config) {
        let host = "mall.film-ticket.film.list";
        let info = config.headers.info;
        if ("cinema" == info) {
            host = "mall.film-ticket.cinema.list"
        }
        if ("info" == info) {
            host = "mall.film-ticket.film.info"
        }
        if ("city" == info) {
            host = "mall.film-ticket.city.list"
        }

        if (config.headers.authorization) {
            config.headers = {
                authorization: config.headers.authorization,
            };
        } else {
            config.headers = {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"160074879731645319036929","bc":"310100"}',
                "X-Host": host
            };
        }

        return config;
    },
    function (err) {
        //错误处理
    }
);
export default axios;