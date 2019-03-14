import React from 'react'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
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
      <GooglePlusShareButton url={url} />
      <TwitterShareButton url={url}>
        <TwitterIcon />
      </TwitterShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon />
      </TelegramShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon />
      </WhatsappShareButton>
      <RedditShareButton url={url}>
        <GooglePlusIcon />
      </RedditShareButton>
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
