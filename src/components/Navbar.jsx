'use client'

import { Box, Flex, HStack, Text, Container, Icon, Link, VStack, Image, IconButton } from '@chakra-ui/react'
import { Search, User, MapPin, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Acrílicos, PETG', subLabel: 'y Señalética', color: '#9F7AEA', href: '/acrilicos' },
  { label: 'Imagen Corporativa', subLabel: 'Integral', color: '#718096', href: '/imagen-corporativa' },
  { label: 'Fachadas y', subLabel: 'Exteriores', color: '#4299E1', href: '/fachadas-exteriores' },
  { label: 'Baños Industriales', subLabel: 'y Hogar', color: '#48BB78', href: '/banos-industriales-hogar' },
  { label: 'Puertas y Mobiliario', subLabel: 'Interior', color: '#A0AEC0', href: '/puertas-mobiliario' },
  { label: 'Cubiertas en', subLabel: 'Policarbonato y UPVC', color: '#667EEA', href: '/cubiertas' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      bg={scrolled || isMobileMenuOpen ? 'rgba(6, 18, 54, 0.98)' : 'rgba(6, 18, 54, 0.6)'}
      backdropFilter="blur(12px)"
      color="white"
      borderBottom="1px solid"
      borderColor={scrolled || isMobileMenuOpen ? 'whiteAlpha.300' : 'whiteAlpha.100'}
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

          {/* Menu Items (Desktop) */}
          <HStack gap={8} display={{ base: 'none', xl: 'flex' }}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                cursor="pointer"
                position="relative"
                role="group"
                py={2}
                _hover={{ textDecoration: 'none' }}
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
              </Link>
            ))}
          </HStack>

          {/* Icons & Menu Toggle */}
          <HStack gap={6}>
            <HStack display={{ base: 'none', md: 'flex' }} gap={6}>
              <Box as={Search} size="18px" strokeWidth={1.5} cursor="pointer" _hover={{ color: 'cyan.400' }} transition="all 0.2s" />
              <Box as={User} size="18px" strokeWidth={1.5} cursor="pointer" _hover={{ color: 'cyan.400' }} transition="all 0.2s" />
              <Box as={MapPin} size="18px" strokeWidth={1.5} cursor="pointer" _hover={{ color: 'cyan.400' }} transition="all 0.2s" />
            </HStack>
            
            {/* Hamburger Toggle - Hidden on XL */}
            <HStack 
              cursor="pointer" 
              role="group" 
              display={{ base: 'flex', xl: 'none' }}
              onClick={toggleMobileMenu}
            >
              <Box position="relative" w="24px" h="24px">
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <VStack gap="5px" align="flex-end">
                        <Box w="24px" h="2px" bg="white" />
                        <Box w="16px" h="2px" bg="white" />
                        <Box w="24px" h="2px" bg="white" />
                      </VStack>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </HStack>
          </HStack>
        </Flex>
      </Container>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <Box
              display={{ base: 'block', xl: 'none' }}
              bg="rgba(6, 18, 54, 0.98)"
              borderTop="1px solid"
              borderColor="whiteAlpha.200"
              pb={8}
              px={8}
            >
              <VStack align="stretch" gap={4} pt={6}>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    _hover={{ textDecoration: 'none' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <HStack 
                      p={4} 
                      borderRadius="lg" 
                      bg="whiteAlpha.50" 
                      borderLeft="4px solid" 
                      borderColor={item.color}
                      transition="all 0.2s"
                      _hover={{ bg: 'whiteAlpha.100', transform: 'translateX(5px)' }}
                    >
                      <VStack align="flex-start" gap={0}>
                        <Text fontSize="10px" fontWeight="medium" textTransform="uppercase" letterSpacing="0.05em" opacity={0.7}>
                          {item.label}
                        </Text>
                        <Text fontSize="14px" fontWeight="bold">
                          {item.subLabel}
                        </Text>
                      </VStack>
                    </HStack>
                  </Link>
                ))}
                
                {/* Mobile User Icons */}
                <Flex gap={8} pt={6} borderTop="1px solid" borderColor="whiteAlpha.100" justify="center">
                  <Box as={Search} size="20px" strokeWidth={1.5} cursor="pointer" _hover={{ color: 'cyan.400' }} />
                  <Box as={User} size="20px" strokeWidth={1.5} cursor="pointer" _hover={{ color: 'cyan.400' }} />
                  <Box as={MapPin} size="20px" strokeWidth={1.5} cursor="pointer" _hover={{ color: 'cyan.400' }} />
                </Flex>
              </VStack>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}
