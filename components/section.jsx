import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ children, delay = 0.5 }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ marginTop: '20px', marginBottom: '20px' }}
    >
      {children}
    </motion.div>
  )
}
