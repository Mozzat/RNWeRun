import { fetch } from 'whatwg-fetch';

// const baseUrl = "http://rap2api.taobao.org/app/mock/235316"
// const baseUrl = "http://192.168.70.47:8819"
const baseUrl = "http://192.168.100.150:8700"
const SuccessKey = '1'

export default class FetchRequest {
    
     static requestDataWithType(url='',type='',parameter={},successCallBack,failCallBack){
        
        //拼接请求字符串
        const requestUrl = baseUrl + url;
        if (type == 'GET') {
            let dataStr = '';
            Object.keys(parameter).forEach(key => {
                dataStr += `${key}=${parameter[key]}&`
            })

            if (dataStr !== '') {
                dataStr = dataStr.substr(0,dataStr.lastIndexOf('&'))
                url = `${url}?${dataStr}`
            }
        }

        //创建请求头
        let requestConfig = {
            credentials: 'include',//为了在当前域名内自动发送 cookie ， 必须提供这个选项
            method:type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors",//请求的模式
        }

        if (type == 'POST') {
            let formdata = new FormData();
            for (const key in parameter) {
                formdata.append(key,parameter[key])
            }
            requestConfig['body'] =  formdata
        }

        fetch(requestUrl,requestConfig)
        .then((response)=>response.json())
        .then((responseJson)=>{
            if (responseJson.code == SuccessKey) {
                successCallBack(responseJson)
            } else{
                failCallBack(responseJson)
            }
        })
        .catch((error) => {
            console.error(error)
            failCallBack(responseJson)
        })
    }

}