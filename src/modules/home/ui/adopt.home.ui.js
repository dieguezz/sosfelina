import styled from 'styled-components'
import Adopt from '../adopt.home.component'
import AdoptCat from '../../../../public/assets/cat-header.jpg'

export default styled(Adopt)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0;
  background-color: black;
  padding: 0;
  overflow: hidden;
  background-image: url('${AdoptCat}');
  background-position: 50% 50%;
  background-size: cover;
  min-height: 600px;
  width: 100vw;
  transform: translateX(-50%);
  margin-left: 50%;
  & h1 {
    max-width: 60%;
  }
  & {
    header {
      order: 0;
      color: #78abe1;
      margin-left: 3em;

      p {
        padding: 1em 0;
        font-size: 1.25em;
      }
    }
  }

  & > .cta > img {
    order: -1;
    height: 400px;
    max-width: 100%;
  }
  @media (max-width: 768px) {
    margin-top: 57px;
    flex-direction: column;
    position: relative;
    &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .5;
    pointer-events: none;
}
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
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        padding: 0 2em;
      }
      p {
        padding: 1em;
      }
    }
  }
`
