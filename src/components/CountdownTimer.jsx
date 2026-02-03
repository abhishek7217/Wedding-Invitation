import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const weddingDate = new Date('March 11, 2026 10:00:00').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = weddingDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        // Timer has ended
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
      }
    }

    updateTimer()
    const timerId = setInterval(updateTimer, 1000)

    return () => clearInterval(timerId)
  }, [])

  const TimeUnit = ({ value, label, index }) => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 200,
        delay: index * 0.1 
      }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/20 to-transparent blur-md rounded-lg"></div>
        
        {/* Main card */}
        <div className="relative bg-gradient-to-b from-[#2a0a0a] to-[#1a0505] border border-[#D4AF37]/30 rounded-lg p-3 md:p-4 min-w-[60px] md:min-w-[80px] shadow-xl">
          <span className="text-2xl md:text-4xl font-bold text-[#F5F5DC] font-cinzel tabular-nums">
            {String(value).padStart(2, '0')}
          </span>
        </div>
        
        {/* Corner decorations */}
        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#D4AF37]/50"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#D4AF37]/50"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#D4AF37]/50"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#D4AF37]/50"></div>
      </div>
      <span className="text-[#D4AF37]/70 text-xs md:text-sm mt-2 uppercase tracking-wider font-cinzel">
        {label}
      </span>
    </motion.div>
  )

  return (
    <div className="w-full max-w-4xl mx-auto px-2 md:px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mb-6 md:mb-8"
      >
        <h3 className="text-[#D4AF37] text-base md:text-xl tracking-wider uppercase mb-2 font-cinzel">
          Countdown to the Auspicious Moment
        </h3>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-4 gap-1 md:gap-3">
        <TimeUnit value={timeLeft.days} label="Days" index={0} />
        <TimeUnit value={timeLeft.hours} label="Hours" index={1} />
        <TimeUnit value={timeLeft.minutes} label="Minutes" index={2} />
        <TimeUnit value={timeLeft.seconds} label="Seconds" index={3} />
      </div>

      {/* Date and Time */}
      <div className="mt-6 md:mt-8 text-center">
        <p className="text-[#F5F5DC]/60 text-sm md:text-base font-cormorant italic">
          <span className="text-[#D4AF37] font-semibold">March 11th, 2026</span> • 10:00 AM
        </p>
        <p className="text-[#D4AF37]/40 text-xs md:text-sm mt-1 font-cormorant">
          Maurya Residence
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 md:mt-8 max-w-md mx-auto">
        <div className="relative h-2 bg-[#2a0a0a] border border-[#D4AF37]/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ 
              width: `${((365 - timeLeft.days) / 365) * 100}%` 
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#D4AF37] to-[#aa8c2c]"
          />
        </div>
        <p className="text-[#D4AF37]/50 text-xs text-center mt-2">
          {365 - timeLeft.days} days passed • {timeLeft.days} days to go
        </p>
      </div>
    </div>
  )
}

export default CountdownTimer