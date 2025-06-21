import { ModalContext } from '@/app/contexts'
import { Header } from '@/app/ui'
import { HomePage } from '@/pages'
import { Modal } from '@/shared'
import { useContext, useEffect, useRef, useState } from 'react'
const audio = require('@/shared/assets/audio/123.mp3')

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const { visible } = useContext(ModalContext)
  const [, setIsMusic] = useState(true)
  const desiredVolume = 0.4

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = desiredVolume
      audioRef.current.play().catch((err) => {
        console.error('Autoplay failed:', err)
      })
    }
  }, [visible])

  const handleToggleMusic = () => {
    setIsMusic((prev) => {
      const newState = !prev
      if (audioRef.current) {
        newState
          ? audioRef.current.play().catch((e) => console.error('Playback error:', e))
          : audioRef.current.pause()
      }
      return newState
    })
  }

  return (
    <>
      <audio ref={audioRef} src={audio} loop></audio>
      <Header toggleMusic={handleToggleMusic} />
      {!visible && <HomePage />}
      <Modal />
    </>
  )
}

export default App
