import styled from 'styled-components'
import CatList from './cat-list.component'

export default styled(CatList)`
  & img {
    min-width: 100%;
  }

  & h2 {
    font-size: 1.25rem;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    font-weight: bold;
    padding: 1em;
  }
  & p {
    position: absolute;
    color: white;
    background-color: #ed0719;
    width: 10px;
    padding: 1em;
    right: 0;
    text-orientation: mixed;
    writing-mode: vertical-lr;
    font-size: 1.25rem;
    font-weight: bold;
    border-bottom-left-radius: 0.25em;
    display: flex;
    align-items: center;
  }
  display: flex;
  background-color: white;
  flex-direction: column;
  margin: 1em;
  flex: 30%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  flex-wrap: wrap;
  max-width: 32%;
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  border-radius: 0.25em;
  overflow: hidden;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5em 0;
    & img {
      max-width: 100%;
    }
  }
`
