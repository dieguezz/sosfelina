import styled from 'styled-components'
import Apadrina from './apadrina.component'
import Bg from '../../../public/assets/hero-image.jpg'

export default styled(Apadrina)`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 78px;
  & header {
    padding: 0 3em;
    color: #78abe1;
    margin-top: 1em;
    background-image: url(${Bg});
    background-size: cover;
    background-position: 50% 50%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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

  @media (max-width: 768px) {
    padding: 1px 1em;
    margin-top: 57px;
  }
`
