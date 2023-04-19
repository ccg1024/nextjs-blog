import React from 'react'
import Link from 'next/link'
import {
  Box,
  Heading,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

import styles from '../styles/navbar.module.css'

const NavBrand = () => {
  return (
    <Box p={2}>
      <Link href="/">
        <Heading as="h2">Crazyboy</Heading>
      </Link>
    </Box>
  )
}

const NavLeftItem = ({ isActive, children }) => {
  return (
    <Text
      padding={2}
      _hover={!isActive && { backgroundColor: 'blackAlpha.50' }}
      backgroundColor={isActive && 'blue.100'}
    >
      {children}
    </Text>
  )
}

export default function Navbar() {
  return (
    <Box
      position="fixed"
      backgroundColor="whiteAlpha.50"
      width="100%"
      backdropFilter="auto"
      backdropBlur="8px"
      boxShadow="lg"
    >
      <Flex alignItems="center">
        <NavBrand />

        <Flex justifyContent="space-between" flexGrow={1} alignItems="center">
          <Box display={{ base: 'none', md: 'flex' }}>
            <Link href="/" className={styles.navLink}>
              <NavLeftItem>work</NavLeftItem>
            </Link>
            <Link href="#" className={styles.navLink}>
              <NavLeftItem>error</NavLeftItem>
            </Link>
          </Box>
          <Box display="flex" justifyContent="right" flexGrow={1}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                backgroundColor="white"
              />
              <MenuList>
                <MenuItem>about</MenuItem>
                <MenuItem>work</MenuItem>
                <MenuItem>error</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
