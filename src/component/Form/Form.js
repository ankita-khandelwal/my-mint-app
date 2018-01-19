import React, {Component} from 'react';

export default class Form extends Component {

  handleFormSubmit = () => {
    console.log('Form Submit');
  };

  render() {
    const {createFormContents} = this.props;
    const {params} = this.props;

    return (
      <form onSubmit={this.handleFormSubmit}>
        {createFormContents(params)}
      </form>
    )
  }
}