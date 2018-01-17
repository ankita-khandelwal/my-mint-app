import React, {Component} from 'react';

class Label extends Component {

  render() {
    const {label} = this.props;

    return (
      <label>{label}</label>
    );
  }
}

export default Label;