import React from "react";
import Home from './Home';
import Education from "./Education";
import { Route } from 'react-router-dom'; 
import WhereImGoing from './WhereImGoing';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path='/education' component = {Education} />
      <Route exact path='/whereimgoing' component = {WhereImGoing} />
    </div>
  );
}

export default App;