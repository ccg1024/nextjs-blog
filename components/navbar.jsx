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
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

import ToggleTheme from './toggle-theme'

import styles from '../styles/navbar.module.css'

const NavBrand = () => {
  return (
    <Box className={styles.navBrandBox}>
      <Link href="/">
        <Heading padding={2} as="h2" fontFamily="'M Plus Rounded 1c'">
          NextJs
        </Heading>
      </Link>
    </Box>
  )
}

const NavLeftItem = ({ isActive, children }) => {
  const colors = {
    hover: useColorModeValue('blackAlpha.50', 'whiteAlpha.200'),
    active: useColorModeValue('blue.100', 'cyan.800')
  }
  return (
    <Text
      padding={2}
      _hover={
        !isActive && {
          backgroundColor: colors.hover
        }
      }
      backgroundColor={isActive && colors.active}
      fontFamily="'M Plus Rounded 1c'"
    >
      {children}
    </Text>
  )
}

export default function Navbar({ path }) {
  return (
    <Box
      position="fixed"
      backgroundColor={useColorModeValue('whiteAlpha.50', 'blackAlpha.50')}
      width="100%"
      backdropFilter="auto"
      backdropBlur="8px"
      boxShadow="lg"
      zIndex={10}
    >
      <Flex alignItems="center">
        <NavBrand />

        <Flex justifyContent="space-between" flexGrow={1} alignItems="center">
          <Box display={{ base: 'none', md: 'flex' }}>
            <Link href="/work" className={styles.navLink}>
              <NavLeftItem isActive={/^\/work/.test(path)}>work</NavLeftItem>
            </Link>
            <Link href="/note" className={styles.navLink}>
              <NavLeftItem isActive={/^\/note/.test(path)}>note</NavLeftItem>
            </Link>
          </Box>
          <Box
            display="flex"
            justifyContent="right"
            flexGrow={1}
            alignItems="center"
          >
            <ToggleTheme />
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                backgroundColor={useColorModeValue(
                  'whiteAlpha.50',
                  'blackAlpha.50'
                )}
              />
              <MenuList fontFamily="'M Plus Rounded 1c'">
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
