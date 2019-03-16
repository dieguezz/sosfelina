import styled from 'styled-components'
import SocialShare from './social-share.component'

export default styled(SocialShare)`
  display: flex;
  flex-wrap: wrap;
  & img {
    padding: 0.5em;
    background-color: white;
    border-radius: 0.25em;
  }
  svg,
  .SocialMediaShareButton {
    outline: 0;
    width: 40px;
  }
  @media (max-width: 768px) {
    padding: 0em;
    justify-content: center;
  }
  &:hover  {
    cursor: pointer;
  }
`
