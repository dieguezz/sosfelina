import React from 'react'
import Header from './modules/header/ui/header.ui'
import Footer from './modules/footer/footer.ui'
import Social from './modules/social/social.ui'
import Routes from './routes'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

/* latin-ext */
@font-face {
  font-display: 'auto';
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v10/XRXV3I6Li01BKofIO-aBTMnFcQIG.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: 'auto';
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: local('Nunito Regular'), local('Nunito-Regular'), url(https://fonts.gstatic.com/s/nunito/v10/XRXV3I6Li01BKofINeaBTMnFcQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin-ext */
@font-face {
  font-display: 'auto';
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: local('Nunito Bold'), local('Nunito-Bold'), url(https://fonts.gstatic.com/s/nunito/v10/XRXW3I6Li01BKofAjsOUb-vIWzgPDEtj.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-display: 'auto';
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: local('Nunito Bold'), local('Nunito-Bold'), url(https://fonts.gstatic.com/s/nunito/v10/XRXW3I6Li01BKofAjsOUYevIWzgPDA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

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
    font-family: 'Nunito';

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
      background-color: white;
      margin: 0 auto;
      position: relative;

}

ol, ul {
  list-style-type: none;
  padding: 0;
}

h1 {
    font-size: 2.435rem; 
    font-weight: bold; 
    color: #78abe1;
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
    border-bottom: 10px solid #78abe1;
}

.inspirational {
    background-color: #f8f8f8;
    padding: 1em 3em;
    font-size: 1.157rem;
    color: #888;
    text-align: center;
    font-weight: bold;
    border-bottom: 10px solid #78abe1;
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
