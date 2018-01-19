import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/Button";

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
        <Button
          handleButtonClick={this.handleFormSubmit}
          label="Submit"
        />
      </form>
    )
  }
}

Form.propTypes = {
  createFormContents: PropTypes.func.isRequired,
};
