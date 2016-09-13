import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div class="greeting">
        <p class="greeting-text">Hello World!</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
