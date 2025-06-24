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

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 20%;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 19px;
  font-family: 'Alk';
  animation: ${fadeIn} 7s ease-in-out;

  ul {
    li:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`

export const VicImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  animation: ${fadeIn} 3s ease-in-out;

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
  animation: ${fadeIn} 10s ease-in-out;

  img {
    max-width: 200px;
  }
`
