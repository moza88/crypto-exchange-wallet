import {ticker_bnb_btc, ticker_btc_usd, ticker_eth_usdt, ticker_eth_usd, ticker_eth_btc, binance_all_tickers} from '../services/Streams'
import Ticker from '../components/Ticker'
import React, {Component} from 'react'
import CryptoComboBox from '../components/CryptoComboBox'
import FiatComboBox from '../components/FiatComboBox'
import {Button, Grid} from '@material-ui/core'
import CryptowatchEmbed from 'cryptowatch-embed';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticker_bnb_btc: {},
            ticker_eth_btc: {},
            ticker_eth_usd: {},
            ticker_btc_usd: {},
            ticker_eth_usdt: {},
            binance_all_tickers: []
        }
    }


    componentDidMount() {
        ticker_bnb_btc.onmessage = (res) => {
            this.setState({ticker_bnb_btc: JSON.parse(res.data)});
        };

        ticker_btc_usd.onmessage = (res) => {
            this.setState({ticker_btc_usd: JSON.parse(res.data)});
        };

        ticker_eth_usdt.onmessage = (res) => {
            this.setState({ticker_eth_usdt: JSON.parse(res.data)});

        }
        binance_all_tickers.onmessage = (res) => {
            this.setState({binance_all_tickers: JSON.parse(res.data)});
        }

        var chart = new CryptowatchEmbed('bitfinex', 'btcusd', {
            width: 800,
            height: 500,
            presetColorScheme: 'ishihara',

        });
        chart.mount('#chart-container');
    }

    componentWillUnmount() {
        ticker_bnb_btc.close();
        ticker_btc_usd.close();
        ticker_eth_usdt.close();
        binance_all_tickers.close();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">

                        <Ticker streams={this.state.ticker_bnb_btc}/></div>

                    <div className="col-3">

                        <Ticker streams={this.state.ticker_btc_usd}/>
                        <div id="chart-container"></div>

                    </div>
                    <div className="col-3">

                        <Ticker streams={this.state.ticker_eth_usdt}/>
                    </div>

                </div>
            </div>

        )
    }
}
export default Dashboard;
