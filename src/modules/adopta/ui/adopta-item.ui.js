import styled from 'styled-components'
import AdoptItem from '../adoptaItem.component'

export default styled(AdoptItem)`
  padding: 3em;
  .pics {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 1em;

    img {
      max-width: 352px;
      margin: 0.5em;
      border-radius: 0.25rem;
    }
  }
  & .cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & h1 {
    margin-bottom: 1em;
  }
  & p {
    line-height: 1.65em;
    font-size: 1.25rem;
    margin: 1em 0;
  }
  header {
    display: flex;
    a {
      margin-left: 2em;
    }
  }
  @media (max-width: 890px) {
    padding: 1em;
    .pics > img {
      max-width: 100%;
    }
  }
`
