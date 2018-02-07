import * as React from 'react';
import './App.css';
import './components/style/antd.min.css'
import Icon from "./components/icon/index";
import Button from "./components/button";
// import { Button, Icon } from "wpk-test1";

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
       
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.tsx</code> and save to reload. <Icon type="book" /> */}
        </p>
        <Button type='danger' size='large'>泡泡</Button>
        <Button type="danger" loading>蛋蛋</Button>
      </div>
    );
  }
}

export default App;
