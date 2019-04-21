import React from 'react';
import onlyIf from './Only-If.jsx';

function SecretData() {
  return <h2> My Name is Dhawan </h2>;
}

const DisplayOnlyIf = onlyIf(({ toDisplay }) => toDisplay && true)(SecretData);

function OnlyIfHocExample() {
  return <DisplayOnlyIf toDisplay={true} />;
}

export default OnlyIfHocExample;
