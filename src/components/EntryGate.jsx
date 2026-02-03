import { motion } from 'framer-motion'

const EntryGate = ({ onEnter }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] bg-gradient-to-br from-[#1a0505] via-[#2a0a0a] to-[#420808] flex flex-col items-center justify-center p-4 safe-top safe-bottom"
      onClick={onEnter}
      role="button"
      aria-label="Enter wedding invitation"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onEnter()
        }
      }}
    >
      {/* Decorative border */}
      <div className="absolute inset-4 border border-[#D4AF37]/20 rounded-lg pointer-events-none"></div>
      
      {/* Lord Ganesh Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
        className="relative mb-6 md:mb-8"
      >
        <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#D4AF37]/30 shadow-2xl">
          <img 
            src="/assets/images/ganesh.jpg" 
            alt="Lord Ganesh - Remover of Obstacles" 
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              e.target.onerror = null
              // Fallback to Unsplash image if local image fails
              e.target.src = "https://unsplash.com/photos/lord-ganesha-figurine-ICt8jR9TAtQ"
            }}
          />
        </div>
        
        {/* Decorative rings */}
        <div className="absolute -inset-4 border border-[#D4AF37]/10 rounded-full animate-spin-slow pointer-events-none"></div>
        <div className="absolute -inset-6 border border-[#D4AF37]/5 rounded-full animate-spin-slow pointer-events-none" 
             style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center max-w-md mx-auto"
      >
        <div className="mb-4 md:mb-6">
          <p className="text-[#D4AF37]/60 text-sm tracking-[0.4em] uppercase mb-1 font-cinzel">
            With Blessings Of
          </p>
          <p className="text-[#D4AF37] text-lg md:text-xl tracking-[0.2em] uppercase font-cinzel">
            श्री गणेशाय नमः
          </p>
        </div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="border border-[#D4AF37] p-5 md:p-8 rounded-full mb-6 md:mb-8 backdrop-blur-sm bg-[#2a0a0a]/30"
        >
          <div className="text-[#D4AF37] text-center">
            <p className="uppercase tracking-[0.4em] text-xs md:text-sm mb-3 font-cinzel">
              Royal Invitation
            </p>
            <h1 
              className="text-4xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              Jyoti & Anshu
            </h1>
          </div>
        </motion.div>

        <div className="space-y-3 md:space-y-4">
          <p className="text-[#F5F5DC]/70 text-sm md:text-base leading-relaxed font-cormorant italic px-2">
            " वक्रतुंड महाकाय सूर्यकोटि समप्रभा।<br/>
            निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"
          </p>
          
          <p className="text-[#D4AF37]/80 text-xs md:text-sm font-cormorant ">
            (O Lord Ganesha, with your curved trunk and massive body,<br/>
            the brilliance of a million suns, please remove all obstacles from our path.)
          </p>
          <br/>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-6 md:mt-8 text-[#D4AF37] text-sm tracking-widest uppercase font-cinzel border"
          >
            Tap to Enter ➡️
          </motion.p>
          
          {/* Mobile touch hint */}
          <div className="mt-3 flex flex-col items-center gap-2">
            <div className="w-10 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full"></div>
            <p className="text-[#D4AF37]/50 text-xs">or press Enter key</p>
          </div>
        </div>
      </motion.div>

      {/* Volume warning for mobile */}
      <div className="absolute bottom-8 left-4 right-4 text-center md:hidden">
        <p className="text-[#D4AF37]/40 text-xs">
          🔊 Please ensure your device volume is on for the best experience
        </p>
      </div>
    </div>
  )
}

export default EntryGate