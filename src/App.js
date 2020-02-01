import React, {Component} from 'react';
import './App.css';
import Header from "./components/header";
import Newslist from "./components/newslist";
import "./../src/index.css";
import JSON from "./../src/db.json"


class App extends Component {
  render (){
    return (
    <div>
     <Header/>
     <Newslist/>
    </div>
    )
  }
}

export default App;
