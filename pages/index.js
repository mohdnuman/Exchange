import React, { Component } from 'react';
import web3 from '../ethereum/web3';

class App extends Component {
  async componentDidMount() {
    const accounts= await web3.eth.getAccounts();
    console.log(accounts);
  }
  
  render() {
    
    return (
    <div>
      hello
    </div>
    );
  }
}

export default App;
