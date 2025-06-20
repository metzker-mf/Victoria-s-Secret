import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const VicImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  animation: ${fadeIn} 1s ease-in-out;

  img {
    max-width: 650px;
    width: 100%;
    height: auto;
  }
`
export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 7s ease-in-out;

  img {
    max-width: 200px;
  }
`
