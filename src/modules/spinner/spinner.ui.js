import styled from 'styled-components'
import Spinner from './spinner.component'

export default styled(Spinner)`
  animation: rotator 1.4s linear infinite;
  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(270deg);
    }
  }

  @keyframes colors {
    0% {
      stroke: #4285f4;
    }
    25% {
      stroke: #de3e35;
    }
    50% {
      stroke: #f7c223;
    }
    75% {
      stroke: #1b9a59;
    }
    100% {
      stroke: #4285f4;
    }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 87;
    }
    50% {
      stroke-dashoffset: 87/4;
      transform: rotate(135deg);
    }
    100% {
      stroke-dashoffset: 87;
      transform: rotate(450deg);
    }
  }

  .path {
    stroke-dasharray: 187;
    stroke-dashoffset: ;
    transform-origin: center;
    animation: dash 1.4s ease-in-out infinite, colors 10s ease-in-out infinite;
  }
`
