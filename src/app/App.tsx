import { Header, ModalContext } from '@/app'
import { HomePage, InfoPage } from '@/pages'
import { Modal } from '@/shared'
import { useContext, useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
const audio = require('@/shared/assets/audio/123.mp3')

function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const { visible } = useContext(ModalContext)
  const [, setIsMusic] = useState(true)
  const desiredVolume = 0.35

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

      <Routes>
        <Route path="/" element={!visible && <HomePage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="memes" element={<div>memes</div>} />
      </Routes>
      <Modal />
    </>
  )
}

export default App
