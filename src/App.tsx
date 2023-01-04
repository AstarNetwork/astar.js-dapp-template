import React from 'react';
import logo from './logo.svg';
import './App.css';

import '@polkadot/api-augment';

import { ApiPromise } from '@polkadot/api';
import { WsProvider } from '@polkadot/rpc-provider';
import { options } from '@astar-network/astar-api';

function App() {
  const connect = async () => {
    // const provider = new WsProvider('ws://localhost:9944');
    // OR
    const provider = new WsProvider('wss://shiden.api.onfinality.io/public-ws');
    const api = new ApiPromise(options({ provider }));
    await api.isReady;

    // Use the api
    // For example:
    console.log((await api.rpc.system.properties()).toHuman());
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={connect}> Connect</button>
      </header>
    </div>
  );
}

export default App;
