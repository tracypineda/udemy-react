import React, { Component } from 'react';
import './App.css';
import Header from "./components/header";
import Newslist from "./components/newslist";
import "./../src/index.css";
import JSON from "./../src/db.json";
import Footer from "./components/footer.js";
import NewsListItem from './components/newslistitem';




class App extends Component {

  state = {
    news: JSON,
    filtered: [],
    footerText: "I am a happy footer",
    visible: false

  }

  getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keywords) > -1
    })
    this.setState({
      filtered
    })

  }
  toggleComp=()=>{
    this.setState({
      visible: !this.state.visible
    })
    }
  
  render() {
    const state = this.state;
    return (
      <div>
        <Header keywords={this.getKeywords} />
        <Newslist news={state.filtered.length=== 0 ? state.news : state.filtered} >
        <br/>
        <h1>I am a child</h1>
        </Newslist>
        <button onClick={this.toggleComp}>Toggle it</button>
        <br/>
        {this.state.visible ? 
        <Footer footerText={state.footerText} /> : null}
      </div>
    )
  }
}

export default App;
