import './App.css';
import React, {Component} from 'react'
import Sidebar from "./Sidebar/Sidebar";
import PlaySpace from "./PlaySpace/PlaySpace"

class App extends Component {
  render() {
  return (
    <main className="App">
      <Sidebar />
      <PlaySpace />
    </main>
  );
  }
}

export default App;