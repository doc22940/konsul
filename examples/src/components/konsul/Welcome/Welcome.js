import React from 'react';
import Code from '../CodeHighlight/Highlight';

const styles = {
  welcome: {
    fontWeight: 'bold',
    fontSize: '20px'
  },
  stylishText: {
    textShadow: '1px 2px 1px rgba(0,0,0,0.2)',
    fontFamily: 'monospace',
    fontWeight: 'bold',
    fontSize: '2em',
    color: '#27abc8'
  }
};

const code = `class MyComponent extends React.Component {
  render() {
    return (
      <container>
        <text style={styles.welcome}>Welcome to Konsul!</text>
      </container>
    );
  }
}`;

const Welcome = () => (
  <container>
    <text style={styles.welcome}>Welcome to Konsul!</text>
    <text>
      With Konsul you can
      <text style={styles.stylishText}> style a text</text>
    </text>
    <text>
      You can use react to render into the console:
    </text>
    <text type="warn">
      You can log in different levels
    </text>
    <text type="error">
      And errors
    </text>
    <Code code={code}/>
  </container>
);

export default Welcome;
