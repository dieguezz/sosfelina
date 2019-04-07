import styled from 'styled-components'
import HowToAdopt from './how-to-adopt.component'

export default styled(HowToAdopt)`
  margin-top: 78px;
  padding: 3em;
  header {
    color: #888;
    border-radius: 0.25em;
    margin-top: 1em;
  }
  & p {
    padding: 1em 0;
    font-size: 1.125rem;
    line-height: 1.5em;
  }

  ol {
    display: flex;
    justify-content: space-between;
    list-style-type: decimal;
    li {
      h2 {
        font-size: 1.2em;
        font-weight: bold;
        white-space: nowrap;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #666;
      }
      flex: 1;
      padding: 1em;
      margin: 0 1rem;
      color: #888;
      &:first-child,
      &:last-child {
        margin-left: 0;
      }
      position: relative;
    }
  }
  .list {
    margin: 0 1em;
  }
  @media (max-width: 768px) {
    padding: 1em;
    margin-top: 57px;
    ol {
      flex-direction: column;
      flex-wrap: wrap;
      li {
        margin: 0;
      }
    }
  }
`
