import React from 'react'
import { Switch, Route } from 'react-router'
import MovieDetail from './MovieDetail'
import Discover from './Discover'
import Search from './Search'
import Collections from './Collections'

export default () =>
  <Switch>
    <Route exact path='/' component={Discover} />
    <Route exact path='/movie/:id' component={MovieDetail} />
    <Route exact path='/search' component={Search} />
    <Route exact path='/collections' component={Collections} />
    <Route component={() => <p>Error 404, not found</p>} />
  </Switch>