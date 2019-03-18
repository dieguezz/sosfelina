import styled from 'styled-components'
import Blog from '../blog.component'

export default styled(Blog)`
  padding: 3em;
  display: flex;
  margin-top: 78px;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  & input {
    width: 320px;
    padding: 0.5em;
    border: 1px solid #78abe1;
    color: #666;
    border-radius: 0.25rem;
    background-color: transparent;
    outline: 0;
    margin-top: 2em;
    font-size: 1.25em;
  }
  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10em;
  }
  @media (max-width: 768px) {
    padding: 2em;
    margin-top: 57px;
  }
`
