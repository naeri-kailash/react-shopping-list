import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './components/App'
import ShoppingList from './components/ShoppingList'
import AddItem from './components/AddItem'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={ShoppingList} />
        <Route path='addItem' component={AddItem} />
      </Route>
    </Router>,
    document.getElementById('app')
  )
})
