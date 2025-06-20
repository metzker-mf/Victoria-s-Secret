import modalImage from '@/shared/assets/images/2007.jpg'
import styled from 'styled-components'

export const Mask = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.91);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
`
export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10001;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  width: 735px;
  height: 763px;
  border-radius: 20px;
  background-image: url(${modalImage});
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ButtonsWrapper = styled.div``
