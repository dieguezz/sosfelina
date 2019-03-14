import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Contacto from './modules/contacto/contacto.ui'
import Adopt from './modules/adopta/adopta.routes'
import Home from './modules/home/home.component'
import HowToAdopt from './modules/howToAdopt/howToAdopt.component'
import Colabora from './modules/colabora/colabora.ui'
import Blog from './modules/blog/blog.routes'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/adopta" component={Adopt} />
      <Route exact path="/como-adoptar" component={HowToAdopt} />
      <Route exact path="/colabora" component={Colabora} />
      <Route exact path="/contacto" component={Contacto} />
      <Route path="/blog" component={Blog} />
      {/* <Route exact path="/gatos-con-suerte" component={SuccessfulCats} /> */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  )
}
