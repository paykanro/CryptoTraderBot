const generalTools = require('../tools/generalTools');

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

module.exports = commonAPI;
