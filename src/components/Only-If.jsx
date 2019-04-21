import React from 'react';

const onlyIf = condition => ComposedComponent =>
  function renderIf(props) {
    return condition(props) && <ComposedComponent />;
  };

export default onlyIf;
