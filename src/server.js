import App from './App'
import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
// Import the StyledComponents SSR util
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import Helmet from 'react-helmet'
import compression from 'compression'
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)
const server = express()
server.use(compression())

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    // Create the server side style sheet
    const context = {}

    const sheet = new ServerStyleSheet()
    // When the app is rendered collect the styles that are used inside it
    const markup = renderToString(
      sheet.collectStyles(
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>,
      ),
    )
    const helmet = Helmet.renderStatic()

    if (context.url) {
      res.redirect(context.url)
    } else {
      // Generate all the style tags so they can be rendered into the page
      const styleTags = sheet.getStyleTags()
      const url = req.protocol + '://' + req.get('host') + req.originalUrl
      res.send(
        `<!doctype html>
    <html ${helmet.htmlAttributes.toString()} prefix="og: http://ogp.me/ns/website#" lang="es">
            <head>
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136531901-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-136531901-1');
            </script>
            ${helmet.title.toString() || (
              <title>SOS Felina Felinae | Asociación protectora felina</title>
            )}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
            <meta charSet='utf-8' />
            <meta property="og:title" content="SOS Felina Felinae | Asociación protectora felina" />
            <meta property="og:description" content="Somos una Asociación Protectora Felina sin Ánimo de Lucro que surge de la necesidad de Gestionar Éticamente determinadas Colonias Felinas" />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://images.ctfassets.net/qhgwkj3lu81s/4FzHhePlYHF9CWxs2daloM/7d1969fa583323b97177dd7672cad5f7/SOS-FELINA-Felinae__1___1_.jpg?h=250" />
            <meta property="og:image:secure_url" content="https://images.ctfassets.net/qhgwkj3lu81s/4FzHhePlYHF9CWxs2daloM/7d1969fa583323b97177dd7672cad5f7/SOS-FELINA-Felinae__1___1_.jpg?h=250" />
            <meta property="og:image:alt" content="SOS Felina Felinae | Asociación protectora felina" />
            <meta property=" og:image:width" content="197" />
            <meta property=" og:image:height" content="250" />
            <meta property="og:site_name" content="SOS Felina Felinae" />
            <meta property="og:url" content="${url}" />
            <meta name="twitter:card" content="app"></meta>
            <meta name="twitter:site" content="@FelinaFelinae" />
            <meta name="twitter:creator" content="@FelinaFelinae" />

            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
            ${
              process.env.NODE_ENV === 'production'
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${assets.client.js}" defer crossorigin></script>`
            }
            <!-- Render the style tags gathered from the components into the DOM -->
            ${styleTags}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
            <link rel="manifest" href="/site.webmanifest">
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
            <meta name="msapplication-TileColor" content="#da532c">
            <meta name="theme-color" content="#ffffff">
        </head>
    <body ${helmet.bodyAttributes.toString()} itemscope itemtype="http://schema.org/NGO">
        <div id="root">${markup}</div>
    </body>
</html>`,
      )
    }
  })

export default server
