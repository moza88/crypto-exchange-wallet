import React from 'react';
import ContentLoader from "react-content-loader"
import {Button, Card, CardActions, CardContent, CardHeader, Typography, Grid} from "@material-ui/core";

function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
}

function Ticker(props) {
    return (
        <div className="card">
            { !props.streams.hasOwnProperty('s') &&
            <ContentLoader height={160} width={400} speed={2} primaryColor="#ffffff" secondaryColor="#dadada">
                <rect x="71" y="28" rx="0" ry="0" width="239" height="116"/>
            </ContentLoader>
            }
            { props.streams.hasOwnProperty('s') &&


                <Card>
                    <CardHeader
                        title={props.streams.s != null && props.streams.s.substring(0,3)+'-'+(props.streams.s.substring(3,7))}>
                    </CardHeader>
                    <CardContent>
                        <Typography variant="header1" color="textPrimary">
                            Last Price: {round(props.streams.c, 3)}</Typography><br/>

                        <Typography variant="header1" color="textPrimary">24h High: {round(props.streams.h, 3)}</Typography><br/>

                        <Typography variant="header1" color="textPrimary">24h Low: {round(props.streams.l, 3)}</Typography><br/>

                        <Typography variant="header1" color="textPrimary">24h Volume: {round(props.streams.b, 3)}</Typography><br/>

                        <Typography variant="header1" color="textPrimary">Total Trades: {round(props.streams.q, 3)}</Typography><br/>

                        <Typography variant="header1" color="textPrimary">Total Trades: {round(props.streams.n, 3)}</Typography><br/>

                        <Button size="medium" color="primary">Buy</Button>
                        <Button size="medium" color="primary">Sell</Button>
                    </CardContent>

                </Card>
            }
        </div>
    );
};

export default Ticker;
