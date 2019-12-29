import React, { BaseSyntheticEvent } from 'react'
import { 
  BrowserRouter as Router, 
  Link,
  Route,
  Switch,
} from 'react-router-dom'

import { Arrow } from '../Arrow'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { Header } from '../Header'
import { RandomPage } from '../RandomPage'
import { SearchPage } from '../SearchPage'
import { ClassSwitcherBtn } from '../ClassSwitcherBtn'
import { useClassWords } from './hooks'

import './App.css'

export const App = () => {
  const {
    currentWords,
    onClassSelect,
  } = useClassWords()
  return (
    <Router>
      <div className='container'>
        <ThemeSwitcher />
        <ClassSwitcherBtn onChange={(evt: BaseSyntheticEvent) => {
          const { value } = evt.target
          onClassSelect(value)
        }} />
        <Header length={currentWords.length} />
        <Switch>
          <Route path='/search'>
            <Link to='/'>
              <Arrow className={'left'} />
            </Link>
            <SearchPage words={currentWords} />
          </Route>
          <Route path='/'>
            <Link to='/search'>
              <Arrow className={'right'} />
            </Link>
            {Boolean(currentWords.length) && <RandomPage words={currentWords} />}
          </Route>
        </Switch>
      </div>
    </Router>
)}
