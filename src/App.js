import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import {films} from './const';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
    
    };
  }
  render() {
    return (
      <div className="App">
        <Header films={films} />
      </div>
    );
  }
}

export default App;
