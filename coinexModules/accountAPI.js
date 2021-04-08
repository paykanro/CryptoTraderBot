const generalTools = require('../tools/generalTools');

const commonAPI = {};

commonAPI.inquireAccountBallance = async() => {
    try {
        let header = generalTools.coinexGeneralHeader;
        let urlParameters = 'access_id=' + process.env.Access_ID + '&' + 'tonce=' + Date.now();
        header.authorization = await  generalTools.authorizationStringGenerator(urlParameters);
        let response = await generalTools.request('GET', 'https://api.coinex.com/v1/balance/info?' + urlParameters, header, undefined);
        return response.body;
    } catch (error) {
        throw error;
    }
};

module.exports = commonAPI;
