import React, {useState} from 'react';
import socketIOClient from 'socket.io-client';
import SocketJsClient from 'react-stomp'

function MarketData() {
    const [client, setClient] = useState();
    const [messages, setMessages] = useState([]);

    const API_KEY = 'OZ1JGJB3P7N0DJXXXG39';

    const URL = 'wss://stream.cryptowat.ch/connect?apikey='+API_KEY

    const handleSendMessage = message => {
        client.sendMessage("/app/message", JSON.stringify({username: "Test", message: message}));
    };

    return (
        <SocketJsClient url={URL} topics={['markets:*:trades']}
                      onMessage={message => setMessages([...messages, message])}
                      ref={client => setClient(client)}/>
    );
};



export default MarketData;