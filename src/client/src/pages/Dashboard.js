import {ticker_bnb_btc, ticker_btc_usd, ticker_eth_usd, ticker_eth_btc, binance_all_tickers} from '../services/Streams'
import Ticker from '../components/Ticker'
import React, {Component} from 'react'
import CryptoComboBox from '../components/CryptoComboBox'
import FiatComboBox from '../components/FiatComboBox'
import {Button, Grid} from '@material-ui/core'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticker_bnb_btc: {},
            ticker_eth_btc: {},
            ticker_eth_usd: {},
            ticker_btc_usd: {},
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

        binance_all_tickers.onmessage = (res) => {
            this.setState({binance_all_tickers: JSON.parse(res.data)});
        }

    }

    componentWillUnmount() {
        ticker_bnb_btc.close();
        ticker_btc_usd.close();
        binance_all_tickers.close();
    }

    render() {
        return (
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
            <div className="container">


                <Ticker streams={this.state.ticker_bnb_btc}/><br/>
                <Ticker streams={this.state.ticker_btc_usd}/>

            </div>
            </Grid>

        )
    }
}
export default Dashboard;
