import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {

  render() {
    const {handleButtonClick, label} = this.props;

    return (
      <div className="button">
        <input
          type="button"
          value={label}
          onClick={handleButtonClick}
        />
      </div>
    );
  }
}

Button.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};