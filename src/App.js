import React, { Component } from 'react';
import './App.css';

import AppHeader from './components/app-header/AppHeader.js';
import EventList from './components/event-list/EventList.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <main className="col-md-12 col-md-offset-3 center App">
            <AppHeader />
            <EventList />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
