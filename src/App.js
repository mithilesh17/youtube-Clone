import React from 'react';
import Header from './Header';
import './App.css';
import SearchPage from "./SearchPage";
import Sidebar from './Sidebar.js';
import RecommededVideos from './RecommededVideos';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className='app__page'>
                <Sidebar />
                <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className='app__page'>
              <Sidebar />
              <RecommededVideos />
            </div>
          </Route>
        </Switch>
      </Router>     
      
    </div>
  );
}

export default App;
