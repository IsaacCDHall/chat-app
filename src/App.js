import React from 'react';
import './App.css';
import Title from './components/Title';
import MessageList from './components/MessageList';
import SendForm from './components/SendForm';
import DUMMYSHIT from './data/dummyshit.js';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      messages: DUMMYSHIT
    }
  }
  render(){

    return (
      <div className="App">
        <Title/>
        <MessageList
          messages={this.state.messages}
          />
        <SendForm/>
      </div>
    );
  }
}

export default App;
