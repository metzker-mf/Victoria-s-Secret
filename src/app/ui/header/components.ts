import muteIcon from '@/shared/assets/images/mute-svgrepo-com.svg'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  font-size: 20px;
  padding-right: 100px;
  font-family: 'Alk';
`
export const UlContainer = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 40px;

  li {
    margin-left: 10px;
    cursor: pointer;
  }
`

export const MuteIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${muteIcon});
  background-size: cover;
  cursor: pointer;
`
