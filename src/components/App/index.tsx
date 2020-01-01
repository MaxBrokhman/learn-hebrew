import React from 'react'
import { 
  BrowserRouter as Router, 
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import { Header } from '../Header'
import { RandomPage } from '../RandomPage'
import { SearchPage } from '../SearchPage'

import { 
  reducer, 
  initialState, 
  Context,
} from '../../reducer'
import { useAppWords } from './hooks'

import './App.css'

export const App = () => {
  const { state, dispatch } = useAppWords(reducer, initialState)
  const { 
    classWords,
    currentWord: { id }, 
  } = state
  
  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <div className='container'>
          <Header />
          <Switch>
            <Route path='/search' component={SearchPage} />
            <Route path={`/:classWords/:id/`} component={RandomPage} />
            <Redirect from='/' to={`/${classWords}/${id}/`} />
          </Switch>
        </div>
      </Context.Provider>
    </Router>
)}
