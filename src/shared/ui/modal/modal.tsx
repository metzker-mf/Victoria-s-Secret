import { ModalContext } from '@/app/contexts'
import { useContext } from 'react'
import { createPortal } from 'react-dom'
import * as S from './components'

export const Modal = () => {
  const { visible, setVisible } = useContext(ModalContext)

  const handleSetVisible = () => {
    setVisible(false)
  }

  return (
    <>
      {visible &&
        createPortal(
          <>
            <S.Mask />
            <S.Container>
              <S.Wrapper>
                <S.Title>
                  <div>YOU WANT TO DIE?</div>
                  <div>YOU WANT A GIFT?</div>
                  <div>THE ENDLESS LIFE</div>
                </S.Title>

                <S.ButtonsWrapper>
                  <S.Button onClick={handleSetVisible}>die</S.Button>
                  <S.Button onClick={handleSetVisible}>666</S.Button>
                </S.ButtonsWrapper>
              </S.Wrapper>
            </S.Container>
          </>,
          document.body
        )}
    </>
  )
}
