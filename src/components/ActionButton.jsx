import React from 'react';

function ActionButton(props) {
  return (
    <button className="action-button" onClick={props.onAction}>
      <span>{props.text.toUpperCase()}</span>
    </button>
  );
}

export default ActionButton;
