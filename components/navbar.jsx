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
    <Box className={styles.navBrandBox}>
      <Link href="/">
        <Heading padding={2} as="h2">
          NextJs
        </Heading>
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

export default function Navbar({ path }) {
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
            <Link href="/work" className={styles.navLink}>
              <NavLeftItem isActive={path === '/work'}>work</NavLeftItem>
            </Link>
            <Link href="/note" className={styles.navLink}>
              <NavLeftItem isActive={path === '/note'}>note</NavLeftItem>
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
                <Link href="/">
                  <MenuItem>About</MenuItem>
                </Link>
                <Link href="/work">
                  <MenuItem>work</MenuItem>
                </Link>

                <Link href="/note">
                  <MenuItem>note</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
