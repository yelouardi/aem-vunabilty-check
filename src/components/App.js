import React from 'react';
import ListItem from './ListItem';
import jsonResponse  from './../data/checklist';


class App extends React.Component {
  render() {
    return (
      <div className="card">
        <header className="App-header">
          <h1 className="card-header">AEM Vunability Check</h1>
        </header>

        <ListItem items={jsonResponse.data} />
      </div>
    );
  }
}

export default App;