const unirest = require('unirest');
let md5 = require('md5');

const generalTools = {};

generalTools.request = (method,url,headers,body) => {
    return new Promise((resolve, reject) => {
        unirest(method,url,headers,body,function (res) { 
        if (res.error) return reject(res.error); 
        if(res) return resolve(res.toJSON());
    });
    })
};

generalTools.sortObjectByKeys = (unorderedObject) => {
    const orderedObject = Object.keys(unorderedObject).sort().reduce(
        (obj, key) => { 
          obj[key] = unorderedObject[key]; 
          return obj;
        }, 
        {}
      );
      return orderedObject;     
};

generalTools.sortURLParams = (unorderedParamsString) => {
    let searchParams = new URLSearchParams(unorderedParamsString);
    searchParams.sort();
    return searchParams.toString();
};

generalTools.authorizationStringGenerator = (urlParamsOrObject) => {
    switch(typeof urlParamsOrObject){
        case 'object':
            urlParamsOrObject.access_id = process.env.Access_ID;
            urlParamsOrObject = generalTools.sortObjectByKeys(urlParamsOrObject);
            urlParamsOrObject.secret_key = process.env.Secret_Key;
            break;
        case 'string':
            urlParamsOrObject = process.env.Access_ID + '&' + urlParamsOrObject;
            urlParamsOrObject = generalTools.sortURLParams(urlParamsOrObject);
            urlParamsOrObject = urlParamsOrObject + '&' + process.env.Secret_Key;
            break;
        default:
            return 'error';
    }
    return md5(urlParamsOrObject);
};

module.exports = generalTools;