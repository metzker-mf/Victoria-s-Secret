import vicImage from '@/shared/assets/images/MOSHED_2025_6_19_0_3_13_ezgif_com_optimize.gif'
import logo from '@/shared/assets/images/vs-logo.png'
import * as S from './components'

export const HomePage = () => {
  return (
    <S.Container>
      <S.LogoContainer>
        <img src={logo} alt="" />
      </S.LogoContainer>

      <S.VicImageContainer>
        <img src={vicImage} alt="" />
      </S.VicImageContainer>
    </S.Container>
  )
}
