import React, {Component} from 'react';
import Checkbox from '../Checkbox/Checkbox.js';

const items = ['One', 'Two', 'Three'];

class Form extends Component {

  handleFormSubmit = () => {
    console.log('Form Submit');
  };

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
    return (
      <form onSubmit={this.handleFormSubmit}>
        {this.createCheckboxes(items)}
      </form>
    )
  }
}

export default Form