import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News  from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
      <Routes>
      <Route path="/" element={<News setProgress={this.setProgress}  key="general" category='general' country='in'/>} />
      <Route path="/business" element={<News setProgress={this.setProgress}  key="business" category='business' country='in'/>} />
      <Route path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" category='entertainment' country='in'/>} />
      <Route path="/general" element={<News setProgress={this.setProgress}  key="general" category='general' country='in'/>} />
      <Route path="/health" element={<News setProgress={this.setProgress}  key="health" category='health' country='in'/>} />
      <Route path="/science" element={<News setProgress={this.setProgress}  key="science" category='science' country='in'/>} />
      <Route path="/sports" element={<News setProgress={this.setProgress}  key="sports" category='sports' country='in'/>} />
      <Route path="/technology" element={<News setProgress={this.setProgress}  key="technology" category='technology' country='in'/>} />
      </Routes>
      </Router>
    </div>;
  }
}

