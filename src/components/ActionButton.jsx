import React from 'react';

import PropTypes from 'prop-types';

function ActionButton(props) {
  return (
    <button className="action-button" type="submit" onClick={props.onAction}>
      <span>{props.text.toUpperCase()}</span>
    </button>
  );
}

ActionButton.propTypes = {
  text: PropTypes.string,
  onAction: PropTypes.func,
};
export default ActionButton;
