// 导入需要使用的模块
import http from "@/api/http"
import {
    nowPlayingListUri,
    comingSoonListUri,
    moiveDetailUrl,
    cityListUrl,
    cinemaListUrl,
    centerUrl,
    loginUrl,
} from "@/config/url"

// 请求正在热映列表数据
export const nowPlayingListData = (pageNum) => {
    http.defaults.headers.info = " ";
    return http.get(nowPlayingListUri + pageNum);
};

//请求即将上映列表数据
export const comingSoonListData = (pageNum) => {
    http.defaults.headers.info = " ";
    return http.get(comingSoonListUri + pageNum);
}
//请求电影详情数据
export const moiveDetailData = (filmId) => {
    //给axios设置请求头
    http.defaults.headers.info = "info";
    return http.get(moiveDetailUrl + filmId);
}
//请求影院列表数据
export const cinemaListData = () => {
    http.defaults.headers.info = "cinema";
    return http.get(cinemaListUrl)

}
//城市列表数据
export const cityListData = async () => {
    http.defaults.headers.info = 'city';
    let ret = await http.get(cityListUrl);
    let cities = ret.data.data.cities;
    let codeList = []; //'A','B'...
    let dataList = []; //城市信息
    let indexList = []; //'A''B'……

    //循环生成26个字母
    for (let i = 65; i <= 90; i++) {
        codeList.push(String.fromCharCode(i))
    }

    codeList.forEach((element) => {
        let tempArr = cities.filter((item) => element.toLowerCase() == item.pinyin.substr(0, 1))
        if (tempArr.length > 0) {
            indexList.push(element)
            dataList.push({
                index: element, 
                data: tempArr,
            });
        }

    })
    //返回数据
    return Promise.resolve([dataList,indexList]);
};
//登录
export const userLogin = (data)=>{
    return http.post(loginUrl,data);
};
//获取用户个人信息
export const userInfo = (_token)=>{
    http.defaults.headers.authorization = _token;
    return http.get(centerUrl);
}