import * as S from './components'

interface HeaderType {
  toggleMusic: () => void
}

export const Header = ({ toggleMusic }: HeaderType) => {
  return (
    <S.Container>
      <S.MuteIcon onClick={toggleMusic} />

      <S.UlContainer>
        <li>Home</li>
        <li>Reaasons</li>
        <li>Memes</li>
      </S.UlContainer>
    </S.Container>
  )
}
