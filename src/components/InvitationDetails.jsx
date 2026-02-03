import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'

const InvitationDetails = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const events = [
    {
      title: "Oil Ceremony (तेलपूजन)",
      date: "March 9th, 2026",
      time: "2:00 PM Onwards",
      venue: "Maurya Residence",
      address: "Bansi Rihayak, Raebareli",
      icon: <Users className="w-6 h-6" />,
      description: "A traditional ritual to purify and bless the couple before the wedding festivities",
      color: "from-[#D4AF37]/10 to-[#034127]/10"
    },
    {
      title: "Haldi & Mehandi Ceremony (मातृपूजन)",
      date: "March 10th, 2026",
      time: "5:00 PM Onwards",
      venue: "Maurya Residence",
      address: "Bansi Rihayak, Raebareli",
      icon: <Users className="w-6 h-6" />,
      description: "An evening of music, dance, and celebration with family and friends",
      color: "from-[#D4AF37]/10 to-[#034127]/10"
    },
    {
      title: "Wedding Ceremony (शुभ विवाह)",
      date: "March 11th, 2026",
      time: "5:00 PM Onwards",
      venue: "Maurya Residence",
      address: "Bansi Rihayak, Raebareli",
      icon: <Calendar className="w-6 h-6" />,
      description: "The sacred union ceremony with traditional rituals and blessings",
      color: "from-[#034127]/10 to-[#D4AF37]/10"
    },
    {
      title: "Vidai Ceremony (विदाई)",
      date: "March 12th, 2026",
      time: "10:00 AM Onwards",
      venue: "Maurya Residence",
      address: "Bansi Rihayak, Raebareli",
      icon: <Calendar className="w-6 h-6" />,
      description: "A bittersweet goodbye, a sweet new beginning 🌻",
      color: "from-[#034127]/10 to-[#D4AF37]/10"
    }
  ]

  return (
    <div className="relative z-20 min-h-screen bg-gradient-to-b from-[#2a0a0a] to-[#1a0505] py-12 md:py-24 px-4 md:px-8 text-center">
      {/* Decorative Top Border */}
      <div className="w-full flex justify-center mb-8 md:mb-12 opacity-40">
        <svg width="80" height="20" viewBox="0 0 80 20" fill="none" className="md:w-24 md:h-28">
          <path d="M0 20C0 20 15 0 40 0C65 0 80 20 80 20" stroke="#D4AF37" strokeWidth="1"/>
        </svg>
      </div>

      <motion.h3 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="text-2xl md:text-4xl text-[#F5F5DC] mb-6 md:mb-8 font-cinzel"
      >
        Save The Date
      </motion.h3>
      
      <motion.p 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-[#D4AF37]/80 mb-12 md:mb-20 max-w-2xl mx-auto leading-relaxed font-cormorant"
      >
        With immense joy and gratitude, we invite you to witness and bless our sacred union. 
        Your presence will make our special day complete.
      </motion.p>

      {/* Events Section */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-24">
        <motion.h4 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="text-xl md:text-2xl text-[#F5F5DC] mb-8 md:mb-12 font-cinzel"
        >
          Wedding Events
          <br/> <br/>
        </motion.h4>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 px-2">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.2 }}
              className={`relative border border-[#D4AF37]/20 p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm bg-gradient-to-br ${event.color}`}
            >
              {/* Icon */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#aa8c2c] rounded-full flex items-center justify-center shadow-lg">
                {event.icon}
              </div>
              
              {/* Content */}
              <div className="pt-4">
                <br/><br/>
                <h4 className="text-xl md:text-2xl text-[#F5F5DC] mb-3 md:mb-4 font-cinzel">
                  {event.title}
                </h4>
                
                <div className="space-y-3 md:space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 text-[#D4AF37]" />
                      <p className="text-[#D4AF37] text-lg md:text-xl font-semibold">
                        {event.date}
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4 text-[#D4AF37]" />
                      <p className="text-gray-300 text-base md:text-lg">
                        {event.time}
                      </p>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto my-4"></div>
                  
                  {/* Venue */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 text-[#D4AF37]" />
                      <p className="text-gray-300 text-base md:text-lg font-semibold">
                        {event.venue}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm md:text-base">
                      {event.address}
                    </p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-sm md:text-base italic mt-4">
                    {event.description}
                  </p>
                </div>
                
                {/* Action Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 md:mt-8 px-6 md:px-8 py-3 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 text-[#D4AF37] rounded-full text-sm md:text-base hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#aa8c2c] hover:text-[#2a0a0a] transition-all duration-300 w-full"
                >
                  {index === 0 ? "Add to Calendar" : "Get Directions"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dress Code Section */}
      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="max-w-2xl mx-auto mb-16 md:mb-24 p-6 md:p-8 border border-[#D4AF37]/20 rounded-2xl bg-gradient-to-b from-[#1a0505]/40 to-[#2a0a0a]/40"
      >
        <h4 className="text-xl md:text-2xl text-[#F5F5DC] mb-4 font-cinzel">
          Dress Code
        </h4>
        <p className="text-[#D4AF37] text-lg mb-2">
          Traditional Indian Attire
        </p>
        <p className="text-gray-300 text-base">
          We request you to dress in traditional Indian wear to complement the occasion.
          <br />
          <span className="text-sm text-gray-400">
            Sarees, Lehengas, Sherwanis, or Kurta Pyjamas (Come with a lower and T-shirts if you don't have traditional attires😉 But Please come!!)
          </span>
        </p>
      </motion.div>

      {/* RSVP Section */}
      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-md mx-auto"
      >
        <div className="space-y-6">
          <div>
            <h4 className="text-2xl md:text-3xl text-[#F5F5DC] mb-2 font-cinzel">
              Please Join Us 🙏
            </h4>
            <p className="text-[#D4AF37]/60 text-sm md:text-base">
              Please RSVP by March 1st, 2026
            </p>
          </div>
          
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 md:px-16 py-4 md:py-5 bg-gradient-to-r from-[#D4AF37] to-[#aa8c2c] text-[#2a0a0a] rounded-full text-lg md:text-xl font-semibold tracking-wider uppercase shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 w-full"
            >
              RSVP Now
            </motion.button>
            
            <p className="text-gray-400 text-sm">
              Or call us at{" "}
              <a href="tel:+917217821748" className="text-[#D4AF37] hover:underline">
                +91 7217821748
              </a>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Mobile Bottom Spacing */}
      <div className="h-8 md:hidden"></div>
    </div>
  )
}

export default InvitationDetails


// import { motion } from 'framer-motion'
// import { Calendar, MapPin, Clock, Users } from 'lucide-react'

// const InvitationDetails = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" }
//     }
//   }

//   const cardVariant = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { 
//       opacity: 1, 
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" }
//     }
//   }

//   const events = [
//     {
//       title: "Haldi & Mehandi Ceremony",
//       date: "March 10th, 2026",
//       time: "5:00 PM Onwards",
//       venue: "Maurya Residence",
//       address: "Bansi Rihayak, Raebareli",
//       icon: <Users className="w-6 h-6" />,
//       description: "An evening of music, dance, and celebration with family and friends",
//       color: "from-[#D4AF37]/10 to-[#034127]/10"
//     },
//     {
//       title: "Wedding Ceremony",
//       date: "March 11th, 2026",
//       time: "5:00 PM Onwards",
//       venue: "Maurya Residence",
//       address: "Bansi Rihayak, Raebareli",
//       icon: <Calendar className="w-6 h-6" />,
//       description: "The sacred union ceremony with traditional rituals and blessings",
//       color: "from-[#034127]/10 to-[#D4AF37]/10"
//     },
//     {
//       title: "Vidai Ceremony",
//       date: "March 12th, 2026",
//       time: "10:00 AM Onwards",
//       venue: "Maurya Residence",
//       address: "Bansi Rihayak, Raebareli",
//       icon: <Calendar className="w-6 h-6" />,
//       description: "The sacred union ceremony with traditional rituals and blessings",
//       color: "from-[#034127]/10 to-[#D4AF37]/10"
//     }
//   ]

//   return (
//     <div className="relative z-20 min-h-screen bg-gradient-to-b from-[#2a0a0a] to-[#1a0505] py-12 md:py-24 px-4 md:px-8 text-center">
//       {/* Decorative Top Border */}
//       <div className="w-full flex justify-center mb-8 md:mb-12 opacity-40">
//         <svg width="80" height="20" viewBox="0 0 80 20" fill="none" className="md:w-24 md:h-28">
//           <path d="M0 20C0 20 15 0 40 0C65 0 80 20 80 20" stroke="#D4AF37" strokeWidth="1"/>
//         </svg>
//       </div>

//       <motion.h3 
//         variants={fadeInUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//         className="text-2xl md:text-4xl text-[#F5F5DC] mb-6 md:mb-8 font-cinzel"
//       >
//         Save The Date
//       </motion.h3>
      
//       <motion.p 
//         variants={fadeInUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//         transition={{ delay: 0.2 }}
//         className="text-lg md:text-xl text-[#D4AF37]/80 mb-12 md:mb-20 max-w-2xl mx-auto leading-relaxed font-cormorant"
//       >
//         With immense joy and gratitude, we invite you to witness and bless our sacred union. 
//         Your presence will make our special day complete.
//       </motion.p>

//       {/* Events Section */}
//       <div className="max-w-6xl mx-auto mb-16 md:mb-24">
//         <motion.h4 
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           className="text-xl md:text-2xl text-[#F5F5DC] mb-8 md:mb-12 font-cinzel"
//         >
//           Wedding Events
//         </motion.h4>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 px-2">
//           {events.map((event, index) => (
//             <motion.div 
//               key={index}
//               variants={cardVariant}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-30px" }}
//               transition={{ delay: index * 0.2 }}
//               className={`relative border border-[#D4AF37]/20 p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm bg-gradient-to-br ${event.color}`}
//             >
//               {/* Icon - Adjusted top position */}
//               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#aa8c2c] rounded-full flex items-center justify-center shadow-lg z-10">
//                 <div className="text-[#2a0a0a]">
//                   {event.icon}
//                 </div>
//               </div>
              
//               {/* Content - Increased padding-top to fix overlap */}
//               <div className="pt-10">
//                 <h4 className="text-xl md:text-2xl text-[#F5F5DC] mb-4 md:mb-6 font-cinzel leading-tight">
//                   {event.title}
//                 </h4>
                
//                 <div className="space-y-3 md:space-y-4">
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-center gap-2">
//                       <Calendar className="w-4 h-4 text-[#D4AF37]" />
//                       <p className="text-[#D4AF37] text-lg md:text-xl font-semibold">
//                         {event.date}
//                       </p>
//                     </div>
//                     <div className="flex items-center justify-center gap-2">
//                       <Clock className="w-4 h-4 text-[#D4AF37]" />
//                       <p className="text-gray-300 text-base md:text-lg">
//                         {event.time}
//                       </p>
//                     </div>
//                   </div>
                  
//                   {/* Divider */}
//                   <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto my-4"></div>
                  
//                   {/* Venue */}
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-center gap-2">
//                       <MapPin className="w-4 h-4 text-[#D4AF37]" />
//                       <p className="text-gray-300 text-base md:text-lg font-semibold">
//                         {event.venue}
//                       </p>
//                     </div>
//                     <p className="text-gray-400 text-sm md:text-base">
//                       {event.address}
//                     </p>
//                   </div>
                  
//                   {/* Description */}
//                   <p className="text-gray-400 text-sm md:text-base italic mt-4">
//                     {event.description}
//                   </p>
//                 </div>
                
//                 {/* Action Button */}
//                 <motion.button 
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="mt-6 md:mt-8 px-6 md:px-8 py-3 bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 text-[#D4AF37] rounded-full text-sm md:text-base hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#aa8c2c] hover:text-[#2a0a0a] transition-all duration-300 w-full"
//                 >
//                   {index === 0 ? "Add to Calendar" : "Get Directions"}
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Dress Code Section */}
//       <motion.div 
//         variants={fadeInUp}
//         initial="hidden"
//         whileInView="visible"
//         className="max-w-2xl mx-auto mb-16 md:mb-24 p-6 md:p-8 border border-[#D4AF37]/20 rounded-2xl bg-gradient-to-b from-[#1a0505]/40 to-[#2a0a0a]/40"
//       >
//         <h4 className="text-xl md:text-2xl text-[#F5F5DC] mb-4 font-cinzel">
//           Dress Code
//         </h4>
//         <p className="text-[#D4AF37] text-lg mb-2">
//           Traditional Indian Attire
//         </p>
//         <p className="text-gray-300 text-base">
//           We request you to dress in traditional Indian wear to complement the occasion.
//           <br />
//           <span className="text-sm text-gray-400">
//             (Sarees, Lehengas, Sherwanis, or Kurta Pyjamas)
//           </span>
//         </p>
//       </motion.div>

//       {/* RSVP Section */}
//       <motion.div 
//         variants={fadeInUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="max-w-md mx-auto"
//       >
//         <div className="space-y-6">
//           <div>
//             <h4 className="text-2xl md:text-3xl text-[#F5F5DC] mb-2 font-cinzel">
//               Please Join Us 🙏
//             </h4>
//             <p className="text-[#D4AF37]/60 text-sm md:text-base">
//               Please RSVP by March 1st, 2026
//             </p>
//           </div>
          
//           <div className="space-y-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-10 md:px-16 py-4 md:py-5 bg-gradient-to-r from-[#D4AF37] to-[#aa8c2c] text-[#2a0a0a] rounded-full text-lg md:text-xl font-semibold tracking-wider uppercase shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all duration-300 w-full"
//             >
//               RSVP Now
//             </motion.button>
            
//             <p className="text-gray-400 text-sm">
//               Or call us at{" "}
//               <a href="tel:+917217821748" className="text-[#D4AF37] hover:underline">
//                 +91 7217821748
//               </a>
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Mobile Bottom Spacing */}
//       <div className="h-8 md:hidden"></div>
//     </div>
//   )
// }

// export default InvitationDetails