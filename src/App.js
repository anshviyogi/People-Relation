import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './App.css'
import {BrowserRouter as  Route,Router,Switch} from 'react-router-dom'

import { createBrowserHistory } from 'history'
import AddFriends from './components/AddFriends'
import ShowAllFriends from './components/ShowAllFriends'
import Profile from './components/Profile'

const newHistory = createBrowserHistory();

function App() {
  return (
    <Router history={newHistory}>
    <div>
      <Switch>

      <Route path='/friends'>

          <Header/>
      <div className='container-divide'>
        <Sidebar/>
        <AddFriends/>
      </div>
      
      </Route>
      
      <Route path='/showAllFriends'>
        <Header/>
        <div className='container-divide'>
          <Sidebar/>
          <ShowAllFriends/>         
        </div>
      </Route>


        <Route path='/'>
      <Header/>
      <div className='container-divide'>
        <Sidebar/>
        <Profile/>
      </div>
      </Route>


      </Switch>
    </div>
    </Router>
  )
}

export default App