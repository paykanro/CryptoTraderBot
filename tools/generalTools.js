const unirest = require('unirest');
let md5 = require('md5');

const generalTools = {};
generalTools.coinexGeneralHeader = {
    'Accept': 'application/json',
    'Content-Type':'application/json',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36'
};

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

generalTools.authorizationStringGenerator = async (urlParamsOrObject) => {
    switch(typeof urlParamsOrObject){
        case 'object':
            urlParamsOrObject = generalTools.sortObjectByKeys(urlParamsOrObject);
            urlParamsOrObject.secret_key = process.env.Secret_Key;
            break;
        case 'string':
            urlParamsOrObject = generalTools.sortURLParams(urlParamsOrObject);
            urlParamsOrObject = urlParamsOrObject + '&secret_key=' + process.env.Secret_Key;
            break;
        default:
            throw {error: 'undefined type'};
    }
    let generatedSignature = md5(urlParamsOrObject);
    generatedSignature = generatedSignature.toUpperCase();
    return  generatedSignature;
};

module.exports = generalTools;