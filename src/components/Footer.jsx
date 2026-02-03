// import { motion } from 'framer-motion'
// import { Heart, Mail, Phone, Instagram, MessageCircle, Home } from 'lucide-react'

// const Footer = () => {
//   const socialLinks = [
//     {
//       icon: <Mail className="w-5 h-5" />,
//       label: "Email",
//       href: "mailto:maurya91abhishek@gmail.com",
//       color: "hover:text-[#D4AF37] hover:bg-[#D4AF37]/10",
//       ariaLabel: "Send email to wedding organizers"
//     },
//     {
//       icon: <Phone className="w-5 h-5" />,
//       label: "Call",
//       href: "tel:+917217821748",
//       color: "hover:text-green-400 hover:bg-green-400/10",
//       ariaLabel: "Call wedding organizers"
//     },
//     {
//       icon: <MessageCircle className="w-5 h-5" />,
//       label: "WhatsApp",
//       href: "https://wa.me/+917217821748?text=I'm%20confirming%20my%20attendance%20for%20Jyoti%20%26%20Anshu's%20wedding",
//       color: "hover:text-green-500 hover:bg-green-500/10",
//       ariaLabel: "Message on WhatsApp"
//     },
//     {
//       icon: <Instagram className="w-5 h-5" />,
//       label: "Instagram",
//       href: "https://www.instagram.com/itzabhi0005?utm_source=qr&igsh=eTJpbndwZjJlYzhh",
//       color: "hover:text-pink-400 hover:bg-pink-400/10",
//       ariaLabel: "Follow on Instagram"
//     },
//     {
//       icon: <Home className="w-5 h-5" />,
//       label: "Venue",
//       href: "https://maps.app.goo.gl/HtdQfuVbbkKM6kXu6",
//       color: "hover:text-blue-400 hover:bg-blue-400/10",
//       ariaLabel: "View venue location"
//     }
//   ]

//   return (
//     <footer className="relative bg-gradient-to-b from-[#1a0505] to-[#0a0202] py-12 md:py-16 border-t border-[#D4AF37]/10 safe-bottom">
//       {/* Decorative Top Border */}
//       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      
//       <div className="max-w-6xl mx-auto px-4 md:px-8">
//         {/* Heart Icon with Animation */}
//         <motion.div
//           animate={{ 
//             scale: [1, 1.1, 1],
//             rotate: [0, 5, -5, 0]
//           }}
//           transition={{ 
//             repeat: Infinity, 
//             duration: 3,
//             ease: "easeInOut" 
//           }}
//           className="flex justify-center mb-8"
//         >
//           <Heart className="w-10 h-10 text-[#D4AF37] fill-[#D4AF37]/20" />
//         </motion.div>

//         {/* Social Links */}
//         <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10">
//           {socialLinks.map((link, index) => (
//             <motion.a
//               key={index}
//               href={link.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5, scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className={`flex flex-col items-center p-4 rounded-xl bg-gradient-to-b from-[#2a0a0a]/50 to-[#1a0505]/50 border border-[#D4AF37]/10 backdrop-blur-sm transition-all duration-300 min-w-[80px] md:min-w-[90px] ${link.color}`}
//               aria-label={link.ariaLabel}
//             >
//               <div className="mb-2">{link.icon}</div>
//               <span className="text-xs text-gray-300 font-medium">{link.label}</span>
//             </motion.a>
//           ))}
//         </div>

//         {/* Contact Information */}
//         <div className="text-center space-y-6 mb-10">
//           <div>
//             <p className="text-[#D4AF37]/60 text-sm tracking-widest uppercase mb-3">
//               For Queries & Blessings
//             </p>
//             <div className="space-y-2">
//               <a 
//                 href="tel:+917217821748" 
//                 className="text-gray-300 hover:text-[#D4AF37] transition-colors block text-lg md:text-xl font-cormorant"
//               >
//                 +91 7217821748
//               </a>
//               <a 
//                 href="mailto:maurya91abhishek@gmail.com" 
//                 className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm md:text-base"
//               >
//                 maurya91abhishek@gmail.com
//               </a>
//             </div>
//           </div>

//           {/* Family Contacts */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
//             <div className="p-4 border border-[#D4AF37]/10 rounded-lg bg-[#2a0a0a]/30">
//               <p className="text-[#D4AF37] text-sm mb-2">Groom's Family</p>
//               <p className="text-gray-300 text-sm">Late Shivbalak Maurya & Mrs. Shanti Devi</p>
//               <p className="text-gray-400 text-xs">+91 9893959691</p>
//             </div>
//             <div className="p-4 border border-[#D4AF37]/10 rounded-lg bg-[#2a0a0a]/30">
//               <p className="text-[#D4AF37] text-sm mb-2">Bride's Family</p>
//               <p className="text-gray-300 text-sm">Mr. Ratipal Maurya & Mrs. Manju Devi</p>
//               <p className="text-gray-400 text-xs">+91 7217821748</p>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto my-8"></div>

//         {/* Copyright and Messages */}
//         <div className="text-center space-y-4">
//           <p className="text-[#D4AF37]/40 text-xs tracking-widest uppercase font-cinzel">
//             WITH LOVE & GRATITUDE FROM BOTH FAMILIES
//           </p>
          
//           <div className="space-y-2">
//             <p className="text-gray-500 text-sm font-cormorant italic">
//               "May your presence bring blessings to our new beginning"
//             </p>
//             <p className="text-gray-600 text-xs">
//               © {new Date().getFullYear()} Jyoti & Anshu's Wedding. All blessings reserved.
//             </p>
//           </div>

//           {/* Mobile Quick Actions */}
//           <div className="md:hidden mt-8 space-y-3">
//             <div className="grid grid-cols-2 gap-3">
//               <a 
//                 href="tel:+917217821748" 
//                 className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-lg text-gray-300 hover:text-[#D4AF37] transition-colors text-sm"
//               >
//                 <Phone className="w-4 h-4" />
//                 Call Now
//               </a>
//               <a 
//                 href="sms:+917217821748&body=I'm%20confirming%20my%20attendance%20for%20the%20wedding"
//                 className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-lg text-gray-300 hover:text-[#D4AF37] transition-colors text-sm"
//               >
//                 <MessageCircle className="w-4 h-4" />
//                 Quick SMS
//               </a>
//             </div>
            
//             <p className="text-[#D4AF37]/50 text-xs">
//               For urgent assistance, tap above
//             </p>
//           </div>
//         </div>

//         {/* Bottom Decoration */}
//         <div className="mt-10 flex justify-center">
//           <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full opacity-50"></div>
//         </div>

//         {/* Back to Top Button for Mobile */}
//         <motion.button
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           whileTap={{ scale: 0.95 }}
//           className="fixed bottom-24 right-4 md:hidden w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#aa8c2c] rounded-full flex items-center justify-center shadow-lg z-40"
//           aria-label="Scroll to top"
//         >
//           <svg className="w-5 h-5 text-[#2a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//           </svg>
//         </motion.button>
//       </div>
//     </footer>
//   )
// }

// export default Footer



import { motion } from 'framer-motion'
import { Heart, Mail, Phone, Instagram, MessageCircle, Home } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:maurya91abhishek@gmail.com",
      color: "hover:text-[#D4AF37] hover:bg-[#D4AF37]/10",
      ariaLabel: "Send email to wedding organizers"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call",
      href: "tel:+917217821748",
      color: "hover:text-green-400 hover:bg-green-400/10",
      ariaLabel: "Call wedding organizers"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/+917217821748?text=I'm%20confirming%20my%20attendance%20for%20Jyoti%20%26%20Anshu's%20wedding",
      color: "hover:text-green-500 hover:bg-green-500/10",
      ariaLabel: "Message on WhatsApp"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://www.instagram.com/itzabhi0005?utm_source=qr&igsh=eTJpbndwZjJlYzhh",
      color: "hover:text-pink-400 hover:bg-pink-400/10",
      ariaLabel: "Follow on Instagram"
    },
    {
      icon: <Home className="w-5 h-5" />,
      label: "Venue",
      href: "https://maps.app.goo.gl/HtdQfuVbbkKM6kXu6",
      color: "hover:text-blue-400 hover:bg-blue-400/10",
      ariaLabel: "View venue location"
    }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-[#1a0505] to-[#0a0202] py-12 md:py-16 border-t border-[#D4AF37]/10 safe-bottom">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heart Icon with Animation */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            ease: "easeInOut" 
          }}
          className="flex justify-center mb-8"
        >
          <Heart className="w-10 h-10 text-[#D4AF37] fill-[#D4AF37]/20" />
        </motion.div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex flex-col items-center p-4 rounded-xl bg-gradient-to-b from-[#2a0a0a]/50 to-[#1a0505]/50 border border-[#D4AF37]/10 backdrop-blur-sm transition-all duration-300 min-w-[80px] md:min-w-[90px] ${link.color}`}
              aria-label={link.ariaLabel}
            >
              <div className="mb-2">{link.icon}</div>
              <span className="text-xs text-gray-300 font-medium">{link.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="text-center space-y-6 mb-10">
          <div>
            <p className="text-[#D4AF37]/60 text-sm tracking-widest uppercase mb-3">
              For Queries & Blessings
            </p>
            <div className="space-y-2">
              <a 
                href="tel:+917217821748" 
                className="text-gray-300 hover:text-[#D4AF37] transition-colors block text-lg md:text-xl font-cormorant"
              >
                +91 7217821748
              </a>
              <a 
                href="mailto:maurya91abhishek@gmail.com" 
                className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm md:text-base"
              >
                maurya91abhishek@gmail.com
              </a>
            </div>
          </div>

          {/* Family Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-4 border border-[#D4AF37]/10 rounded-lg bg-[#2a0a0a]/30">
              <p className="text-[#D4AF37] text-sm mb-2">Groom's Family</p>
              <p className="text-gray-300 text-sm">Late Shivbalak Maurya & Mrs. Shanti Devi</p>
              <p className="text-gray-400 text-xs">+91 9893959691</p>
            </div>
            <div className="p-4 border border-[#D4AF37]/10 rounded-lg bg-[#2a0a0a]/30">
              <p className="text-[#D4AF37] text-sm mb-2">Bride's Family</p>
              <p className="text-gray-300 text-sm">Mr. Ratipal Maurya & Mrs. Manju Devi</p>
              <p className="text-gray-400 text-xs">+91 7217821748</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto my-8"></div>

        {/* Copyright and Messages */}
        <div className="text-center space-y-4">
          <p className="text-[#D4AF37]/40 text-xs tracking-widest uppercase font-cinzel">
            WITH LOVE & GRATITUDE FROM BOTH FAMILIES
          </p>
          
          <div className="space-y-2">
            <p className="text-gray-500 text-sm font-cormorant italic">
              "May your presence bring blessings to our new beginning"
            </p>
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Jyoti & Anshu's Wedding. All blessings reserved.
            </p>
          </div>

          {/* Developer Attribution Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-3 pt-6 border-t border-[#D4AF37]/5 mt-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/20 blur-sm rounded-full"></div>
              <img 
                src="/assets/images/Abhishek.jpg" 
                alt="Abhishek Maurya" 
                className="relative w-30 h-40 rounded-full border border-[#D4AF37]/40 object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Developed by</p>
              <a 
                href="https://www.instagram.com/itzabhi0005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors font-cinzel"
              >
                Abhishek Maurya
              </a>
            </div>
          </motion.div>

          {/* Mobile Quick Actions */}
          <div className="md:hidden mt-8 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="tel:+917217821748" 
                className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-lg text-gray-300 hover:text-[#D4AF37] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a 
                href="sms:+917217821748"
                className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-lg text-gray-300 hover:text-[#D4AF37] transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Quick SMS
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button for Mobile */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-24 right-4 md:hidden w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#aa8c2c] rounded-full flex items-center justify-center shadow-lg z-40"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5 text-[#2a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer