import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Blog from './ui/blog.ui'
import Article from '../article/article.ui'

export default function Routes({ match }) {
  return (
    <Switch>
      <Route exact path={match.path} component={Blog} />
      <Route exact path={`${match.path}/:id`} component={Article} />
    </Switch>
  )
}
