import { ModalContext } from '@/app/contexts'
import { Header } from '@/app/ui'
import { HomePage } from '@/pages'
import { Modal } from '@/shared'
import { useContext, useEffect, useRef } from 'react'
const audio = require('@/shared/assets/audio/123.mp3')

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const { visible } = useContext(ModalContext)
  const desiredVolume = 0.4

  const handleButtonPlay = () => {}
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = desiredVolume
      audioRef.current.play().catch((err) => {
        console.error('Autoplay failed:', err)
      })
    }
  }, [visible])

  return (
    <>
      <Header />
      <audio ref={audioRef} src={audio} loop></audio>
      <button onClick={handleButtonPlay}>play</button>
      <HomePage />
      <Modal />
    </>
  )
}

export default App
