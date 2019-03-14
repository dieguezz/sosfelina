import styled from 'styled-components'
import Adopt from '../adopt.home.component'

export default styled(Adopt)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0;
  background-color: black;
  padding: 0;
  margin-top: 1em;
  border-radius: 0.25em;
  & {
    header {
      order: 0;
      color: #f2f2f2;
      padding-left: 3em;

      p {
        padding: 1em 0;
        font-size: 1.25em;
      }
    }
  }

  & > .cta > img {
    order: -1;
    height: 400px;
  }
  @media (max-width: 890px) {
    flex-direction: column;
    position: relative;
    & > .cta > img {
      max-height: 400px;
      width: 100vw;
      height: unset;
    }
    header {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 150px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 0;
      justify-content: center;
      h1 {
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        font-weight: bold;
        font-size: 1.5em;
        text-align: center;
        padding: 0 2em;
      }
    }
  }
`
