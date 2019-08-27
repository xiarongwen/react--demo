import 'whatwg-fetch'
//封装request
const get  =async(url,param ={})=>{
    param = {
        ...param,
        token: ''
    };
    let paramUrl ='';
    Object.entries(param).forEach((item)=>{
        paramUrl += item[0] + '=' + encodeURIComponent(item[1]) + '&';
    })
    let response = await fetch (`${url}?${paramUrl}`,{
        methods:'GET'
    });

    let data = await response.json();
    return data
}


const post = async (url, params = {})=>{
    params = {
        ...params,
        token: '',
        
    };
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(params)
    });
    let data = await response.json();
    return data;
}

export default{
    get,
    post
}



