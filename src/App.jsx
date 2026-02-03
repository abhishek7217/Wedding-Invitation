import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AudioController from './components/AudioController'
import EntryGate from './components/EntryGate'
import FloatingParticles from './components/FloatingParticles'
import HeroSlideshow from './components/HeroSlideshow'
import InvitationDetails from './components/InvitationDetails'
import Footer from './components/Footer'

function App() {
  const [hasEntered, setHasEntered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const audioRef = useRef(null)

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle entrance with audio autoplay
  const handleEnter = () => {
    setHasEntered(true)
    
    // Play audio after user interaction
    if (audioRef.current) {
      const playPromise = audioRef.current.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
            audioRef.current.volume = isMobile ? 0.3 : 0.4
          })
          .catch(error => {
            console.log("Audio autoplay prevented:", error)
            setIsPlaying(false)
          })
      }
    }
  }

  // Toggle audio playback
  const toggleAudio = () => {
    if (!audioRef.current) return
    
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error("Play error:", err))
    }
    setIsPlaying(!isPlaying)
  }

  // Handle page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current && isPlaying) {
        audioRef.current.pause()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isPlaying])

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/assets/audio/Do Anjaane Ajnabi.mp3"
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onError={(e) => {
          console.error("Audio loading error:", e.target.error)
          setIsPlaying(false)
        }}
      />

      {/* Entry Gate */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            key="entry-gate"
            exit={{ 
              opacity: 0,
              transition: { 
                duration: 1.5,
                ease: "easeInOut"
              }
            }}
            className="fixed inset-0 z-[100]"
          >
            <EntryGate onEnter={handleEnter} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div 
        className={`relative min-h-screen transition-all duration-1000 ${
          hasEntered 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background Particles */}
        <FloatingParticles />

        {/* Main Content */}
        <main className="relative z-10">
          <HeroSlideshow />
          <InvitationDetails />
          <Footer />
        </main>

        {/* Audio Controller */}
        {hasEntered && (
          <AudioController 
            isPlaying={isPlaying} 
            togglePlay={toggleAudio} 
            isMobile={isMobile}
          />
        )}

        {/* Loading State (hidden after load) */}
        <div className="sr-only" aria-live="polite">
          {hasEntered ? "Website fully loaded" : "Loading wedding invitation"}
        </div>
      </div>
    </>
  )
}

export default App