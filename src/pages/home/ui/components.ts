import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const VicImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  img {
    max-width: 100%;
  }
`
export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    max-width: 200px;
  }
`
