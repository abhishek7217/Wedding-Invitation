import { motion } from 'framer-motion'
import { Volume2, VolumeX, Music } from 'lucide-react'

const AudioController = ({ isPlaying, togglePlay, isMobile }) => {
  return (
    <>
      {/* Desktop Controller */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <motion.button 
          onClick={togglePlay}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#D4AF37]/30 bg-[#2a0a0a]/90 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]"
          aria-label={isPlaying ? "Pause background music" : "Play background music"}
        >
          {/* Animated Rings */}
          {isPlaying && (
            <>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-20"></span>
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-10"></span>
            </>
          )}
          
          {/* Icon */}
          {isPlaying ? (
            <Volume2 className="text-[#D4AF37] w-6 h-6" />
          ) : (
            <VolumeX className="text-[#D4AF37]/60 w-6 h-6" />
          )}
          
          {/* Tooltip */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-[#2a0a0a]/95 border border-[#D4AF37]/20 rounded-lg px-3 py-2">
              <span className="text-[#D4AF37] text-xs tracking-wider uppercase font-cinzel">
                {isPlaying ? "Music Playing" : "Music Paused"}
              </span>
              <div className="text-[#D4AF37]/60 text-[10px] mt-1">
                "Do Anjaane Ajnabi"
              </div>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#2a0a0a] border-r border-b border-[#D4AF37]/20 transform rotate-45"></div>
          </div>
        </motion.button>
      </div>

      {/* Mobile Controller - Bottom Center */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-4"
      >
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.button 
              onClick={togglePlay}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-3 px-5 py-4 rounded-full border-2 border-[#D4AF37]/30 bg-[#2a0a0a]/95 backdrop-blur-lg shadow-xl"
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              {/* Icon */}
              <div className="relative">
                {isPlaying ? (
                  <>
                    <Volume2 className="text-[#D4AF37] w-6 h-6" />
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
                  </>
                ) : (
                  <VolumeX className="text-[#D4AF37]/70 w-6 h-6" />
                )}
              </div>
              
              {/* Text */}
              <div className="text-left">
                <p className="text-[#D4AF37] text-xs font-medium">
                  {isPlaying ? "Music Playing" : "Tap to Play"}
                </p>
                <p className="text-[#D4AF37]/60 text-xs">
                  "Do Anjaane Ajnabi"
                </p>
              </div>
              
              {/* Visualizer for playing state */}
              {isPlaying && (
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 2, 1].map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [2, height * 6, 2] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 0.8,
                        delay: i * 0.1 
                      }}
                      className="w-1 bg-gradient-to-t from-[#D4AF37] to-[#aa8c2c] rounded-full"
                    />
                  ))}
                </div>
              )}
            </motion.button>
            
            {/* Volume Warning for Mobile */}
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <div className="bg-[#2a0a0a]/95 border border-[#D4AF37]/20 rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Music className="w-3 h-3 text-[#D4AF37]" />
                    <span className="text-[#D4AF37] text-xs">
                      Tap for background music
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Safe area spacer for mobile */}
        <div className="h-8"></div>
      </motion.div>
    </>
  )
}

export default AudioController