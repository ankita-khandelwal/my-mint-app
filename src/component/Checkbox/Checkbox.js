import React, {Component} from 'react';
import Label from '../Label/Label.js'
import PropTypes from 'prop-types'

class Checkbox extends Component {
  state = {
    isChecked: false,
  };

  toggleCheckboxChange = () => {
    const {handleCheckboxChange, label} = this.props;

    this.setState(({isChecked}) => ({
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  };

  render() {
    const {label} = this.props;
    const {isChecked} = this.state;

    return (
      <div className="checkbox">
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
        />
        <Label label={label}/>
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;