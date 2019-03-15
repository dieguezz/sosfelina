import React from 'react'
import Instagram from '../../../public/assets/instagram.svg'
import Facebook from '../../../public/assets/facebook.svg'
import Linkedin from '../../../public/assets/linkedin.svg'
import Youtube from '../../../public/assets/youtube.svg'
import Twitter from '../../../public/assets/twitter.svg'

export default function Social({ className }) {
  return (
    <div className={className}>
      <ul>
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
          <a
            href="https://www.pinterest.es/felinafelinae"
            target="_blank"
            rel="noopener noreferrer">
            <p>Youtube</p>
            <img src={Youtube} alt="Youtube" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/felinafelinae" target="_blank" rel="noopener noreferrer">
            <p>Twitter</p>
            <img src={Twitter} alt="Twitter" />
          </a>
        </li>
        <li>
          <a
            href="https://www.pinterest.es/felinafelinae"
            target="_blank"
            rel="noopener noreferrer">
            <p>Linkedin</p>
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </li>
      </ul>
    </div>
  )
}
