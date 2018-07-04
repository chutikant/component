import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Tabs from './components/tabs'; 
import TabsPanel from './components/tabs/panel';

import classNames from 'classnames/bind';
import styles from './styles/tabs/tab';
let cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Tabs id="tabs-example-default">
					<TabsPanel label="Item One">Item One Content</TabsPanel>
					<TabsPanel label="Item Two">Item Two Content</TabsPanel>
					<TabsPanel label="Item Three">Item Three Content</TabsPanel>
					<TabsPanel disabled label="Disabled">
						Disabled Content
					</TabsPanel>
				</Tabs>

      </div>
    );
  }
}

export default App;
