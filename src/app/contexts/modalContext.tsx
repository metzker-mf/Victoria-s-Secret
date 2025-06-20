import { createContext, PropsWithChildren, useState } from 'react'

interface ModalContextType {
  visible: boolean
  setVisible: (value: boolean) => void
}

export const ModalContext = createContext<ModalContextType>({
  visible: true,
  setVisible: () => {},
})

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [visible, setVisible] = useState(true)

  const handleSetVisible = (value: boolean) => {
    setVisible(value)
  }
  return (
    <ModalContext.Provider
      value={{
        visible,
        setVisible: handleSetVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
