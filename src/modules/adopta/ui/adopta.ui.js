import styled from 'styled-components'
import Adopta from '../adopta.component'
import Bg from '../../../../public/assets/hero-image.jpg'

export default styled(Adopta)`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 78px;
  overflow: hidden;
  & header {
    color: #78abe1;
    margin-top: 1em;
    background-image: url(${Bg});
    background-size: cover;
    background-position: 50% 50%;
    height: 600px;
    display: flex;
    padding: 0 3em;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    transform: translateX(-50%);
    margin-left: 50%;
    div {
      padding-left: 3em;
    }
  }
  & header p {
    font-size: 1.25rem;
    padding: 1em 0;
  }
  & .cta {
    margin: 2em 0;
    text-align: center;
    font-size: 1.75rem;
    p {
      color: #78abe1;
      padding: 1em;
      font-weight: bold;
    }
  }
  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10em;
  }
  @media (max-width: 768px) {
    padding: 1px 1em;
    margin-top: 57px;
  }
`
