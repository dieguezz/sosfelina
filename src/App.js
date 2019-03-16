import React from 'react'
import Header from './modules/header/ui/header.ui'
import Footer from './modules/footer/footer.ui'
import Social from './modules/social/social.ui'
import Routes from './routes'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
      background-color: #f2f2f2;
      max-width: 1200px;
      padding: 1em;
      margin: 0 auto;
      position: relative;

}

ol, ul {
  list-style-type: none;
  padding: 0;
}

h1 {
    font-size: 2.435rem;  
}

b {
  font-weight: bold;
}

small {
  font-size: .75rem;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.flex {
  display: flex;
}

.italic {
  font-style: italic;
}

.dark-divider {
    border-bottom: 4px solid #131411;
}

.inspirational {
    background-color: #131411;
    color: white;
    padding: 1em 3em;
    font-size: 1.157rem;
    font-style: italic;
    border-radius: .25em;
}

  @media (max-width: 768px) {
    body {
      padding: 0;
      margin-top: 51px;
    }
    .flex {
      flex-direction: column;
    }
  }
`
const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    <Routes />
    <Social />
    <Footer />
  </React.Fragment>
)

export default App
