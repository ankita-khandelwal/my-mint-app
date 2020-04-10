import React, {Component} from 'react';

export default class Label extends Component {

  render() {
    const {label} = this.props;

    return (
      <label>{label}</label>
    );
  }
}