import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Adopt from './ui/adopta.ui'
import AdoptCat from '../adopta/ui/adopta-item.ui'

export default function Routes({ match, className }) {
  return (
    <Switch>
      <Route exact path={match.path} component={Adopt} />
      <Route exact path={`${match.path}/:id`} component={AdoptCat} />
    </Switch>
  )
}
