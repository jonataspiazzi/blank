import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerSelector extends Component {
  render() {
    const { colour } = this.props;
    return (
      <div className="field-group">
        <label>{`${colour} Player Controller:`}</label>
        <select id={`${colour}Player`}>
          <option>loading...</option>
        </select>
      </div>
    );
  }
}

PlayerSelector.propTypes = {
  colour: PropTypes.string.isRequired
};

export default PlayerSelector;
