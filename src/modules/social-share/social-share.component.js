import React from 'react'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  TumblrShareButton,
  EmailShareButton,
} from 'react-share'

import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  TumblrIcon,
  EmailIcon,
} from 'react-share'

export default function SocialShare({ url, className }) {
  return (
    <div className={className}>
      <FacebookShareButton url={url}>
        <FacebookIcon />
      </FacebookShareButton>
      <GooglePlusShareButton url={url}>
        <GooglePlusIcon />
      </GooglePlusShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon />
      </TwitterShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon />
      </TelegramShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon />
      </WhatsappShareButton>
      <TumblrShareButton url={url}>
        <TumblrIcon />
      </TumblrShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon />
      </LinkedinShareButton>
      <EmailShareButton url={url}>
        <EmailIcon />
      </EmailShareButton>
    </div>
  )
}
