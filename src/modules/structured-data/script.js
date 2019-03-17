import Logo from '../../../public/assets/logo.png'

export default function getData(title, date, description, pictures) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://google.com/article',
    },
    headline: title,
    image: pictures || [
      'https://images.ctfassets.net/qhgwkj3lu81s/4FzHhePlYHF9CWxs2daloM/7d1969fa583323b97177dd7672cad5f7/SOS-FELINA-Felinae__1___1_.jpg?h=250',
    ],
    datePublished: date || new Date(),
    dateModified: date || new Date(),
    author: {
      '@type': 'Person',
      name: 'Diego Segura',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SOS Felina Felinae',
      logo: {
        '@type': 'ImageObject',
        url: `http://sosfelinaapp.azurewebsites.net${Logo}`,
      },
    },
    description,
  }
}
