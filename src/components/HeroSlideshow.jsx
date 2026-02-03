import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountdownTimer from './CountdownTimer'

const PHOTOS = [
  "/assets/images/photos/photo1.jpg",
  "/assets/images/photos/photo2.jpg",
  "/assets/images/photos/photo3.jpg",
  "/assets/images/photos/photo4.jpg",
  "/assets/images/photos/photo5.jpg",
  "/assets/images/photos/photo6.jpg",
  "/assets/images/photos/photo7.jpg",
  "/assets/images/photos/photo8.jpg",
  "/assets/images/photos/photo9.jpg",
  "/assets/images/photos/photo10.jpg",
  "/assets/images/photos/photo11.jpg",
  "/assets/images/photos/photo12.jpg",
  "/assets/images/photos/RamSita.jpg"
]

// Fallback Unsplash URLs
const FALLBACK_PHOTOS = [
  "https://images.unsplash.com/photo-1567591370504-80142b28f1c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhZGhhJTIwYW5kJTIwa3Jpc2huYXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1690271961502-35f311ada169?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a3Jpc2huYSUyMGFuZCUyMHJhZGhhfGVufDB8fDB8fHww",
  "https://www.shutterstock.com/image-vector/lord-sita-ram-wedding-illustration-260nw-2607402115.jpg",
  "https://www.shutterstock.com/shutterstock/photos/2524636543/display_1500/stock-photo-lord-ram-tying-goddess-sita-s-hair-both-smiling-sitting-outside-their-cottage-lush-jungle-2524636543.jpg",
  "https://img.freepik.com/premium-photo/eternal-bond-tale-lord-ram-sita_1283705-3563.jpg?ga=GA1.1.1698063096.1724865011&semt=ais_hybrid&w=740&q=80"
]

const HeroSlideshow = () => {
  const [index, setIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState([])

  // Preload images
  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve(src)
        img.onerror = () => reject(src)
      })
    }

    const preloadImages = async () => {
      const imagePromises = PHOTOS.map(src => 
        loadImage(src).catch(() => FALLBACK_PHOTOS[PHOTOS.indexOf(src) % FALLBACK_PHOTOS.length])
      )
      
      try {
        const loaded = await Promise.all(imagePromises)
        setLoadedImages(loaded)
      } catch (error) {
        console.error("Failed to preload images:", error)
        setLoadedImages(FALLBACK_PHOTOS)
      }
    }

    preloadImages()
  }, [])

  // Slideshow timer
  useEffect(() => {
    if (loadedImages.length === 0) return

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % loadedImages.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [loadedImages])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Overlay Gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#2a0a0a]/60 via-transparent to-[#2a0a0a]/90 pointer-events-none" />
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle at 50% 50%,transparent_30%,#2a0a0a_150%)] pointer-events-none opacity-80" />

      {/* Slideshow */}
      {loadedImages.length > 0 ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={loadedImages[index]}
              alt={`Wedding moment ${index + 1}`}
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 8, ease: "linear" }}
              className="w-full h-full object-cover"
              loading="lazy"
              fetchpriority={index === 0 ? "high" : "low"}
              sizes="100vw"
              srcSet={`
                ${loadedImages[index]}?w=480 480w,
                ${loadedImages[index]}?w=768 768w,
                ${loadedImages[index]}?w=1024 1024w,
                ${loadedImages[index]}?w=1280 1280w
              `}
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        // Loading skeleton
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a0a0a] via-[#420808] to-[#2a0a0a]"></div>
      )}

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-between text-center p-4 pt-12 pb-8 safe-top">
        {/* Top Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="w-full"
        >
          <h2 className="text-[#D4AF37] text-base md:text-lg tracking-[0.3em] mb-2 uppercase font-cinzel border-b border-[#D4AF37]/30 pb-2 inline-block">
            The Sacred Union Of
          </h2>
        </motion.div>

        {/* Main Names */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="w-full px-2"
        >
          <h1 
            className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 md:mb-6 text-balance leading-tight"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            <span className="text-[#F5F5DC] block md:inline">Jyoti </span>
            <span className="text-[#D4AF37] mx-2 md:mx-4 text-2xl md:text-4xl">&</span>
            <span className="text-[#F5F5DC] block md:inline"> Hansraj <span className='text-2xl'>(Anshu)</span> </span>
          </h1>
          
          <p className="text-[#D4AF37]/90 text-lg md:text-xl italic tracking-wide font-light max-w-2xl mx-auto leading-relaxed font-cormorant">
            "Love, Laughter & Happily Ever After"
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full mt-4 md:mt-8"
        >
          <CountdownTimer />
        </motion.div>

        {/* Scroll Indicator for Desktop */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-8 hidden md:block"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-60"></div>
          <p className="text-[#D4AF37]/50 text-xs mt-2 tracking-widest">Scroll Down</p>
        </motion.div>

        {/* Touch Indicator for Mobile */}
        <div className="mt-4 md:hidden">
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-10 border-2 border-[#D4AF37]/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#D4AF37]/60 rounded-full mt-2 animate-bounce"></div>
            </div>
            <p className="text-[#D4AF37]/50 text-xs mt-1">Swipe up</p>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {loadedImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index 
                ? 'bg-[#D4AF37] w-4' 
                : 'bg-[#D4AF37]/40 hover:bg-[#D4AF37]/60'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Mobile Safe Area */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#2a0a0a] to-transparent z-20 md:hidden"></div>
    </div>
  )
}

export default HeroSlideshow