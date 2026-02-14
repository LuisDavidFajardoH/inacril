'use client'

import { Box, Flex, HStack, Text, Container, Icon, Link, VStack, Image } from '@chakra-ui/react'
import { Search, User, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Acrílicos, PETG', subLabel: 'y Señalética', color: '#9F7AEA' },
  { label: 'Imagen Corporativa', subLabel: 'Integral', color: '#718096' },
  { label: 'Mobiliario Exterior', subLabel: 'y Fachadas', color: '#4299E1' },
  { label: 'Mobiliario Interior', subLabel: 'y Baños HPL', color: '#48BB78' },
  { label: 'Puertas Cortafuego', subLabel: 'RF 60-90-120', color: '#A0AEC0' },
  { label: 'Cubiertas en', subLabel: 'Policarbonato y UPVC', color: '#667EEA' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      bg={scrolled ? 'rgba(6, 18, 54, 0.98)' : 'rgba(6, 18, 54, 0.6)'}
      backdropFilter="blur(12px)"
      color="white"
      borderBottom="1px solid"
      borderColor={scrolled ? 'whiteAlpha.300' : 'whiteAlpha.100'}
    >
      <Container maxW="8xl" px={8}>
        <Flex h="100px" align="center" justify="space-between">
          {/* Logo */}
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            <Image 
              src="/logo-blanco.png" 
              alt="Inacril Logo" 
              h="60px" 
              objectFit="contain"
            />
          </Link>

          {/* Menu Items */}
          <HStack gap={8} display={{ base: 'none', xl: 'flex' }}>
            {navItems.map((item, index) => (
              <Box
                key={index}
                cursor="pointer"
                position="relative"
                role="group"
                py={2}
              >
                <VStack align="flex-start" gap={0}>
                  <Text fontSize="10px" fontWeight="medium" textTransform="uppercase" letterSpacing="0.05em" opacity={0.7}>
                    {item.label}
                  </Text>
                  {item.subLabel && (
                    <Text fontSize="11px" fontWeight="bold" whiteSpace="nowrap">
                      {item.subLabel}
                    </Text>
                  )}
                </VStack>
                {/* Underline */}
                <Box
                  position="absolute"
                  bottom="-4px"
                  left="0"
                  w="100%"
                  h="3px"
                  bg={item.color}
                  transform="scaleX(1)"
                  transformOrigin="left"
                />
              </Box>
            ))}
          </HStack>

          {/* Icons & Menu */}
          <HStack gap={6}>
            <HStack display={{ base: 'none', md: 'flex' }} gap={6}>
              <Box as={Search} size="18px" strokeWidth={1.5} cursor="pointer" _hover={{ color: 'cyan.400' }} transition="all 0.2s" />
              <Box as={User} size="18px" strokeWidth={1.5} cursor="pointer" _hover={{ color: 'cyan.400' }} transition="all 0.2s" />
              <Box as={MapPin} size="18px" strokeWidth={1.5} cursor="pointer" _hover={{ color: 'cyan.400' }} transition="all 0.2s" />
            </HStack>
            <HStack cursor="pointer" role="group">
              
              <Box w="24px" h="1px" bg="white" position="relative" _groupHover={{ bg: 'cyan.400' }} transition="all 0.2s">
                <Box w="24px" h="1px" bg="inherit" position="absolute" top="-6px" />
                <Box w="24px" h="1px" bg="inherit" position="absolute" bottom="-6px" />
              </Box>
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
