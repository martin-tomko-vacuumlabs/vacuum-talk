import { useState } from 'react'
import './App.css'
import { userWalletLogin, getValue, setValue } from "./chain.js";

function App() {
  const [wallet, setWallet] = useState<string>("");
  const [userInput, setUserInput] = useState<string>("");

  const walletConnected = /^0x[0-9a-fA-F]+$/.test(wallet);

  const connectWrapper = async () => {
    const w = await userWalletLogin();
    console.log("Connected as", w);
    setWallet(w);
  }

  const setWrapper = async () => {
    if (!walletConnected) {
      console.log("Wallet not connected!");
      return;
    }
    
    if (!/^\d+$/.test(userInput)) {
      console.log("Invalid number:", userInput);
      return;
    }

    setValue(userInput, wallet).then(console.log).catch(console.error);
  }

  const whenConnected = (
    <div>
      <p>Connected as {wallet}</p>
      <input
        type="text"
        value={userInput}
        onInput={e => setUserInput(e.currentTarget.value)}
      />
      <button onClick={setWrapper}>
        Set
      </button>
    </div>
  );

  const whenNotConnected = (
    <div>
      <button onClick={connectWrapper}>
        Connect
      </button>
    </div>
  );

  return (
    <div className="App">
      <h1>Contract Interaction Demo</h1>
      <div className="card">
        {
          walletConnected
          ? whenConnected
          : whenNotConnected
        }
        <button onClick={() => (getValue().then(console.log).catch(console.error))}>
          Get
        </button>
      </div>
    </div>
  )
}

export default App
