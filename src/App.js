import React, {Component} from 'react';
import logo from './logo.svg';
import Form from './component/Form/Form.js';
import './App.css';
import Checkbox from "./component/Checkbox/Checkbox";

const items = ['One', 'Two', 'Three'];

class App extends Component {

  createCheckboxes = (items) => (
    items.map(this.createCheckbox)
  );

  toggleCheckbox = label => {
    console.log(label + ': checkbox toggled');
  };

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  render() {
    const description = 'this is a description';
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to Mint</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {description}
        </p>
        <Form
          createFormContents={this.createCheckboxes}
          params={items}
        />
      </div>
    );
  }
}

export default App;
