import React from 'react'
import { motion } from 'framer-motion'

const Animation = () => {
  
  return (
    
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
      }}
      style={ball}>
      
        
      deborah
    </motion.div>
  )
}

const ball = {
  width: 100,
  height: 100,
  backgroundColor: '#4e1cd8ff',
  borderRadius: "50%",
  textAlign: 'center',
  paddingTop: 35,
}

export default Animation
