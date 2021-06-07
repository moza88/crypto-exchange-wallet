import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBoxFiatCurr() {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={fiatCurrencies}
            getOptionLabel={(option) => option.symbol}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Crypto" variant="outlined" />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const fiatCurrencies = [
    { symbol: 'BTC', Name: 'Bitcoin' },
    { symbol: 'LTC', Name: 'Litecoin' },
    { symbol: 'ETH', Name: 'Ethereum' },
    { symbol: 'XLM', Name: 'Stellar' },
    { symbol: 'BCH', Name: 'Bitcoin Cash' },
];