import React from 'react'
import ReactDOM from 'react-dom';

import { App } from './components/App'
import { words } from './data/words'

const length = words.length

ReactDOM.render(<App length={length} />, document.getElementById('root'));
