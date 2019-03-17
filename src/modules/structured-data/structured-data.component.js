import { useEffect } from 'react'
import getData from './script'

export default function StructuredData({ title, date, description }) {
  useEffect(() => {
    const script = document.createElement('script')
    const text = getData(title, date, description)
    script.type = 'application/ld+json'
    script.text = JSON.stringify(text)
    document.body.appendChild(script)

    return function cleanup() {
      document.body.removeChild(script)
    }
  })
  return null
}
