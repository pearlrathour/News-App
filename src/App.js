import './App.css';
import React, { useState} from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize=28;
  const keyAPI=process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress}/>
          <Routes>
            <Route exact path='/' element= {<News setProgress={setProgress} key="general" apiKey={keyAPI} pagesize={pageSize} country="in" category="general" />}/>
            <Route exact path='general' element= {<News setProgress={setProgress} key="general" apiKey={keyAPI} pagesize={pageSize} country="in" category="general" />}/>
            <Route exact path='/business' element= {<News setProgress={setProgress} key="business" apiKey={keyAPI} pagesize={pageSize} country="in" category="business" />}/>
            <Route exact path='/sports' element= {<News setProgress={setProgress} key="sports" apiKey={keyAPI}  pagesize={pageSize} country="in" category="sports" />}/>
            <Route exact path='/health' element= {<News setProgress={setProgress} key="health"  apiKey={keyAPI} pagesize={pageSize} country="in" category="health" />}/>
            <Route exact path='/science' element= {<News setProgress={setProgress} key="science" apiKey={keyAPI} pagesize={pageSize} country="in" category="science" />}/>
            <Route exact path='/technology' element= {<News setProgress={setProgress} key="technology" apiKey={keyAPI} pagesize={pageSize} country="in" category="technology" />}/>
            <Route exact path='/entertainment' element= {<News setProgress={setProgress} key="entertainment" apiKey={keyAPI} pagesize={pageSize} country="in" category="entertainment" />}/>
          </Routes>
        </Router>
      </div>
    )
}

export default App
