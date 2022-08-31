
import './App.scss';
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import UniversityPage from './components/UniversityPage';
import Home from './components/Home'
import Faqs from './components/FAQs';
import Blogs from './components/Blogs';
import Events from './components/Events';
import CountryPage from './components/CountryPage';
import Courses from './components/CoursesPage';
import Aboutus from './components/Aboutus';
import React,{useState} from 'react';

function App() {
  const [filter,setFilter]=useState({
    filterApplied:false,
    filterBy:"",
    course:null,
    level:null,
    country:null,
    department:null,
  })
  return (
    <div className="App ">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home filter={filter} setFilter={setFilter}/>
          </Route>
          <Route path='/blogs' component={Blogs} />
          <Route path='/university/:universityname' component={UniversityPage} />
          <Route path='/faqs' component={Faqs} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/events' component={Events} />
          <Route path='/country/:countryname' component={CountryPage} />
          <Route path='/courses'>
            <Courses filter={filter} setFilter={setFilter}/>
          </Route>
          {/* <Route path='/universitypage' component={UniversityPage}/> */}
        </Switch>

      </Router>
    </div>
  );
}

export default App;
