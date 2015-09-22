import React, { PropTypes, Component } from 'react';

interface Props {
  foo: string;
}

class MyComponent extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <MyComponent foo="bar" /> // ok
        <MyComponent foo={0} /> // error
        <span>{this.props.foo}</span>
      </div>
    )
  }
}