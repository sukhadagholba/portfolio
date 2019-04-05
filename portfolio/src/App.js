import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
	<Router>
        <div className="App">
        <Route exact path="/" component={Container} />
	</div>    
	</Router>    
    );
  }
}

export default App;
