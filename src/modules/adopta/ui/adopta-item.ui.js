import styled from 'styled-components'
import AdoptItem from '../adoptaItem.component'

export default styled(AdoptItem)`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 78px;
  padding: 3em;
  text-align: justify;

  .pics {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 1em;

    img {
      max-width: 384px;
      margin: 0.5em;
      border-radius: 0.25rem;
    }
  }
  & .social-share {
    display: flex;
    p {
      padding: 0 1em;
    }
  }
  & .cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div > * {
      margin: 0.5em;
    }
  }

  & p {
    line-height: 1.65em;
    margin: 1em 0;
    font-size: 1rem;
    color: #666;
  }
  header {
    display: flex;
    a {
      margin-left: 2em;
    }
  }
  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10em;
  }
  @media (max-width: 768px) {
    margin-top: 57px;
    padding: 1em;
    .pics > img {
      max-width: 100%;
    }
    .cta,
    .social-share {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0;
    }
  }
`
