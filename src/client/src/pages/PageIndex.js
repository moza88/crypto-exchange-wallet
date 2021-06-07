import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "../components/Header";

import Home from "../pages/Home";
import MarketData from "../pages/MarketData"
import Dashboard from "../pages/Dashboard";
/*
As you add in pages add them into this index along with the sub page they belong to

Follow the example below:
<Route path='/buy-sell' component={BuySell} />

 */
class PageIndex extends Component {
    render() {
        return (
            <>

                <BrowserRouter basename={'/'}>
                    <div id="main-wrapper">
                        <Header/>
                        <br/><br/><br/><br/><br/>

                        <Switch>
                            <Route path='/' exact component={Dashboard}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </>
        )
    }
}

export default PageIndex;