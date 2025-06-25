import { Link } from 'react-router-dom'
import * as S from './components'
interface HeaderType {
  toggleMusic: () => void
}

export const Header = ({ toggleMusic }: HeaderType) => {
  return (
    <S.Container>
      <S.MuteIcon onClick={toggleMusic} />

      <S.UlContainer>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/info'}>Info</Link>
        </li>
        <li>
          <Link to={'/memes'}>Memes</Link>
        </li>
      </S.UlContainer>
    </S.Container>
  )
}
