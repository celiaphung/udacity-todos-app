import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './Todos';
import Goals from './Goals';

class App extends React.Component {
  render() {
    return (
      <div>
        <Todos />
        <Goals />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,

)

export default App;
