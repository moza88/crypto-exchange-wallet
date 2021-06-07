export const binance_all_tickets = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

//Tickers to Bitcoin
export const ticker_bnb_btc = new WebSocket('wss://stream.binance.com:9443/ws/bnbbtc@ticker');
export const ticker_eos_btc = new WebSocket('wss://stream.binance.com:9443/ws/eosbtc@ticker');
export const ticker_xrp_btc = new WebSocket('wss://stream.binance.com:9443/ws/xrpbtc@ticker');
export const ticker_eth_btc = new WebSocket('wss://stream.binance.com:9443/ws/ethbtc@ticker');

//Tickers to USD
export const ticker_eth_usd = new WebSocket('wss://stream.binance.com:9443/ws/ethusd@ticker');
export const ticker_btc_usd = new WebSocket('wss://stream.binance.com:9443/ws/ethusd@ticker');
export const ticker_ltc_usd = new WebSocket('wss://stream.binance.com:9443/ws/ltcusd@ticker');
export const ticker_xrp_usd = new WebSocket('wss://stream.binance.com:9443/ws/xrpusd@ticker');
export const ticker_bch_usd = new WebSocket('wss://stream.binance.com:9443/ws/bchusd@ticker');


const API_KEY = 'OZ1JGJB3P7N0DJXXXG39';

export const cryptowat = new WebSocket('wss://stream.cryptowat.ch/connect?apikey='+API_KEY);
