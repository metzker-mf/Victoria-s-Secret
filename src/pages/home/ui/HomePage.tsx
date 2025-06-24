import vicImage from '@/shared/assets/images/MOSHED_2025_6_19_0_3_13_ezgif_com_optimize.gif'
import logo from '@/shared/assets/images/vs-logo.png'
import * as S from './components'
import { leftTextConfig, rightTextConfig } from './config'

export const HomePage = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TextWrapper>
          <ul>
            {leftTextConfig.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </S.TextWrapper>
        <div>
          <S.LogoContainer>
            <img src={logo} alt="" />
          </S.LogoContainer>

          <S.VicImageContainer>
            <img src={vicImage} alt="" />
          </S.VicImageContainer>
        </div>

        <S.TextWrapper>
          <ul>
            {rightTextConfig.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </S.TextWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
