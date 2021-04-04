process.env.MONGO_DB_ADDRESS = 'mongodb://localhost:27017/CryptoTraderBot';
process.env.PORT = 4000;
process.env.ROOT_ADDRESS = 'http:/127.0.0.1:' + process.env.PORT;
process.env.Access_ID = '0CBDFA494A5D489AA65082586C0044A9';
process.env.Secret_Key = 'C5879A4988E8540AAB168A585AABD3A7F68F2E2CBFC9E2CF';
require('../bin/www');
console.log('Database Address : '+ process.env.MONGO_DB_ADDRESS);
console.log('Server Address : ' + process.env.ROOT_ADDRESS);
