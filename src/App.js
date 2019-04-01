import React, { Component } from 'react';
import logo from './logo-meilleursagentspro-neg.svg';

import 'semantic-ui-css/semantic.min.css';
import './App.scss';

import InboxCounter from './components/InboxCounter/InboxCounter';
import RealtorsList from './containers/RealtorsList';
import MessagesList from './containers/MessagesList';
import MessageView from './containers/MessageView';

class App extends Component {
  render() {
    return (
      <section className="App">
        <header className="mainHeader">
          <img src={logo} alt="Meilleurs agents pro" />
          <InboxCounter number="4" />
          <RealtorsList />
        </header>
        <div className="mainContent">
          <MessagesList />
          <MessageView />
        </div>
      </section>
    );
  }
}

export default App;
