import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-left: 20px;
  padding-right: 20px;
`
export const TitleWrapper = styled.div`
  text-align: center;
  font-family: 'Izvod';
  color: #ff6363;
`
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`
export const InfoWrapper = styled.div`
  position: static;
  z-index: 3;
  text-align: center;
  font-family: 'Alk';
  max-width: 50%;
`

export const ImageWrapper = styled.div`
  img {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
    max-width: 600px;
    height: auto;
  }
`

export const RedText = styled.span`
  color: red;
`
