import App from './App'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from 'react'
import { hydrate } from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'

hydrate(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,

  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept()
}
