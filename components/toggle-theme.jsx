import React from 'react'
import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

export default function ToggleTheme() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLight = colorMode === 'light'
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={colorMode}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle Theme"
          size="md"
          icon={isLight ? <MoonIcon /> : <SunIcon />}
          backgroundColor={isLight ? 'whiteAlpha.50' : 'blackAlpha.50'}
          marginX="1rem"
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  )
}
