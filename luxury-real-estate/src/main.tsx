import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function setFavicon(path: string) {
  const href = `${import.meta.env.BASE_URL}${path}?v=5`
  document
    .querySelectorAll("link[rel~='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']")
    .forEach(el => el.remove())

  const icon = document.createElement('link')
  icon.rel = 'icon'
  icon.type = 'image/jpeg'
  icon.href = href
  document.head.appendChild(icon)

  const apple = document.createElement('link')
  apple.rel = 'apple-touch-icon'
  apple.href = href
  document.head.appendChild(apple)
}

setFavicon('logo-mark.jpeg')
document.title = 'Billionaires Tree Realty | Luxury Real Estate - Delhi, NCR, Goa & Uttarakhand'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)