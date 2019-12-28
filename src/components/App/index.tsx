import React from 'react'
import { 
  BrowserRouter as Router, 
  Link,
  Route,
  Switch,
} from 'react-router-dom'

import { Arrow } from '../Arrow'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { Header } from '../Header'
import { length } from '../RandomPage/hooks'
import { RandomPage } from '../RandomPage'
import { SearchPage } from '../SearchPage'

import './App.css'

export const App = () => (
  <Router>
    <div className='container'>
      <ThemeSwitcher />
      <Header length={length} />
      <Switch>
        <Route path='/search'>
          <Link to='/'>
            <Arrow className={'left'} />
          </Link>
          <SearchPage />
        </Route>
        <Route path='/'>
          <Link to='/search'>
            <Arrow className={'right'} />
          </Link>
          <RandomPage />
        </Route>
      </Switch>
    </div>
  </Router>
)
