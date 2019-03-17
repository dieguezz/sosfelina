import Logo from '../../../public/assets/logo.png'

export default function getData(title, date, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://google.com/article',
    },
    headline: title,
    image: [],
    datePublished: date,
    publisher: {
      '@type': 'Organization',
      name: 'SOS Felina Felinae',
      logo: {
        '@type': 'ImageObject',
        url: Logo,
      },
    },
    description,
  }
}
