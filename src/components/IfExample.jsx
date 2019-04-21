import React from 'react';
import If from './If.jsx';

class IfExample extends React.Component {
  constructor() {
    super();
    this.renderifOnly = this.renderifOnly.bind(this);
  }
  renderifOnly() {
    const a1 = this.a;
    return !a1 && true;
  }
  render() {
    return (
      <If condition={this.renderifOnly}>
        <h2>If COndition Pased</h2>
        App Name : {process.env.name}<br/>
        Mode : {process.env.mode}
      </If>
    );
  }
}

export default IfExample;
