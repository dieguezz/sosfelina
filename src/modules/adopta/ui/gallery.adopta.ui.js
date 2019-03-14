import styled from 'styled-components'
import Gallery from '../gallery.component'

export default styled(Gallery)`
  padding: 1em 0;
  & ol {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`
