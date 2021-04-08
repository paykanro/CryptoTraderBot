const generalTools = require('../tools/generalTools');
const unirest = require('unirest');

const commonAPI = {};

commonAPI.acquireMarketList = async() => {
    try {
        let header = process.env.COINEX_GENERAL_HEADER;
        let response = await generalTools.request('GET', 'https://api.coinex.com/v1/market/list', header, undefined);
        return response.body;
    } catch (error) {
        throw error;
    }
};

commonAPI.acquireAssetConfig = async(coinType) => {
    try {
        let COIN_TYPE = '';
        if(typeof coinType === 'string' && coinType.length>0)
            COIN_TYPE = '?coin_type=' + coinType;
        let header = process.env.COINEX_GENERAL_HEADER;
        header.authorization = generalTools.authorizationStringGenerator('');
        let response = await generalTools.request('GET', 'https://api.coinex.com/v1/common/asset/config' + COIN_TYPE, header, undefined);
        return response;
    } catch (error) {
        throw error;
    }
};


module.exports = commonAPI;
