import { useMemo } from 'react'
import { motion } from 'framer-motion'

const FloatingParticles = () => {
  // Optimized for mobile performance - fewer particles
  const particles = useMemo(() => {
    const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 25
    
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.2 + 0.1
    }))
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a0a0a] via-[#1a0505] to-[#420808] opacity-80"></div>
      
      {/* Main particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background: 'radial-gradient(circle at center, #D4AF37, #aa8c2c)',
            boxShadow: '0 0 10px 2px rgba(212, 175, 55, 0.3)',
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 15, -15, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Large floating elements for depth */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute rounded-full border border-[#D4AF37]/5"
          style={{
            left: `${10 + i * 30}%`,
            top: `${15 + i * 25}%`,
            width: 60 + i * 30,
            height: 60 + i * 30,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 40 + i * 15,
            repeat: Infinity,
            delay: i * 8,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Ambient light effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#034127]/5 rounded-full blur-3xl"></div>
    </div>
  )
}

export default FloatingParticles



// import { useState } from 'react'
// import { motion as Motion} from 'framer-motion'

// const FloatingParticles = () => {
//   // Use a state initializer function to generate particles only once on mount
//   const [particles] = useState(() => {
//     const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 25
//     return Array.from({ length: count }).map((_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       top: Math.random() * 100,
//       size: Math.random() * 3 + 1,
//       duration: Math.random() * 20 + 15,
//       delay: Math.random() * 10,
//       opacity: Math.random() * 0.2 + 0.1
//     }))
//   })

//   return (
//     <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-[#2a0a0a] via-[#1a0505] to-[#420808] opacity-80"></div>
      
//       {particles.map((p) => (
//         <motion.div
//           key={p.id}
//           className="absolute rounded-full"
//           style={{
//             left: `${p.left}%`,
//             top: `${p.top}%`,
//             width: p.size,
//             height: p.size,
//             background: 'radial-gradient(circle at center, #D4AF37, #aa8c2c)',
//             boxShadow: '0 0 10px 2px rgba(212, 175, 55, 0.3)',
//             opacity: p.opacity,
//           }}
//           animate={{
//             y: [0, -60, 0],
//             x: [0, 15, -15, 0],
//             opacity: [p.opacity, p.opacity * 2, p.opacity],
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: p.duration,
//             repeat: Infinity,
//             delay: p.delay,
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//       {/* ... rest of your background elements ... */}

// {[0, 1, 2].map((i) => (
//         <motion.div
//           key={`large-${i}`}
//           className="absolute rounded-full border border-[#D4AF37]/5"
//           style={{
//             left: `${10 + i * 30}%`,
//             top: `${15 + i * 25}%`,
//             width: 60 + i * 30,
//             height: 60 + i * 30,
//           }}
//           animate={{
//             y: [0, -20, 0],
//             rotate: [0, 180, 360],
//             opacity: [0.02, 0.05, 0.02],
//           }}
//           transition={{
//             duration: 40 + i * 15,
//             repeat: Infinity,
//             delay: i * 8,
//             ease: "linear",
//           }}
//         />
//       ))}
      
//       {/* Ambient light effect */}
//       <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#034127]/5 rounded-full blur-3xl"></div>

//     </div>
//   )
// }

// export default FloatingParticles
