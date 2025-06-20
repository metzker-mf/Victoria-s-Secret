import vicImage from '@/shared/assets/images/MOSHED-2025-6-19-0-3-13-ezgif.com-optimize.gif'
import logo from '@/shared/assets/images/vs-logo.png'
import { Header } from '@/widgets'
import * as S from './components'

export const HomePage = () => {
  return (
    <S.Container>
      <Header />

      <S.LogoContainer>
        <img src={logo} alt="" />
      </S.LogoContainer>

      <S.VicImageContainer>
        <img src={vicImage} alt="" />
      </S.VicImageContainer>
    </S.Container>
  )
}
