import {ticker_bnb_btc, ticker_eth_usd, ticker_eth_btc, binance_all_tickets} from '../services/Streams'
import Ticker from '../components/Ticker'
import React, {Component} from 'react'
import CryptoComboBox from '../components/CryptoComboBox'
import FiatComboBox from '../components/FiatComboBox'


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticker_bnb_btc: {},
            ticker_eth_btc: {},
            ticker_eth_usd: {},
            binance_all_tickets: []
        }
    }

    componentDidMount() {
        ticker_bnb_btc.onmessage = (res) => {
            this.setState({ticker_bnb_btc: JSON.parse(res.data)});
        };

    }

    componentWillUnmount() {
        ticker_bnb_btc.close();
    }

    render() {
        return (
            <div className="container">
                <CryptoComboBox/><FiatComboBox/>
                <Ticker streams={this.state.ticker_bnb_btc}/>
            </div>
        )
    }
}
export default Dashboard;
