import axios from 'axios';


require('dotenv').config()


const BinanceAuth = {

    connect() {
        const config = {
            headers: {
                'accept': "*/*",
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-MBX-APIKEY': process.env.BINANCE_API,
            },
        };
        return axios.post('https://api.binance.com/api/v1/userDataStream', null, config)
            .then(rex => res.data)
            .catch(error => error);
    }
};

export default BinanceAuth;