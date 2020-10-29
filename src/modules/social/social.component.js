import React from 'react'
import Instagram from '../../../public/assets/instagram.svg'
import Facebook from '../../../public/assets/facebook.svg'
import Twitter from '../../../public/assets/twitter.svg'
import Youtube from '../../../public/assets/youtube.svg'
import Phone from '../../../public/assets/phone.svg'
import Whatsapp from '../../../public/assets/whatsapp.svg'

export default function Social({ className }) {
  return (
    <div className={className}>
      <ul>
        <li>
          <span>647665310</span>
        </li>
        <li>
          <a
            href="tel:647665310"
            onClick={url => {
              var callback = function () {
                if (typeof url !== 'undefined') {
                  window.location = url
                }
              }
              window.gtag('event', 'conversion', {
                send_to: 'AW-753912554/LNOgCPTQ5JcBEOqVv-cC',
                event_callback: callback,
              })
            }}>
            <p>Teléfono</p>
            <img src={Phone} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/34626978712" target="_blank" rel="noopener noreferrer">
            <p>Whatsapp</p>
            <img src={Whatsapp} alt="WhatsApp" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/sosfelinafelinae"
            target="_blank"
            rel="noopener noreferrer">
            <p>Instagram</p>
            <img src={Instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/sosfelinafelinae"
            target="_blank"
            rel="noopener noreferrer">
            <p>Facebook</p>
            <img src={Facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/FelinaFelinae" target="_blank" rel="noopener noreferrer">
            <p>Twitter</p>
            <img src={Twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCCsR7ARmqW55o2GhumpN-iw"
            target="_blank"
            rel="noopener noreferrer">
            <p>Youtube</p>
            <img src={Youtube} alt="Youtube" />
          </a>
        </li>
      </ul>
    </div>
  )
}
