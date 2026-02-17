'use client'

import { Box, Flex, HStack, Text, Container, Link, VStack, Image } from '@chakra-ui/react'
import { Search, User, MapPin, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const banosSubmenus = [
  { label: 'Línea Concept', href: '/banos/linea-concept' },
  { label: 'Línea Esencial', href: '/banos/linea-esencial' },
  { label: 'Línea Infantil', href: '/banos/linea-infantil' },
  { label: 'Línea Maxi', href: '/banos/linea-maxi' },
  { label: 'Línea Plus', href: '/banos/linea-plus' },
  { label: 'Línea Pro', href: '/banos/linea-pro' },
]

const puertasSubmenus = [
  { label: 'PUERTAS CF', href: '/puertas-mobiliario/puertas-cf' },
  { label: 'PUERTAS PANEL FENOLICO', href: '/puertas-mobiliario/puertas-panel-fenolico' },
  { label: 'SHUTS CF', href: '/puertas-mobiliario/shuts-cf' },
]

const navItems = [
  { subLabel: 'PUBLICIDAD', color: '#9F7AEA', href: '/acrilicos' },
  { subLabel: 'IMAGEN CORPORATIVA', color: '#718096', href: '/imagen-corporativa' },
  { label: 'FACHADAS Y', subLabel: 'EXTERIORES', color: '#4299E1', href: '/fachadas-exteriores' },
  { label: 'BAÑOS', subLabel: 'INDUSTRIALES Y HOGAR', color: '#48BB78', href: '/banos-industriales-hogar', submenus: banosSubmenus },
  { subLabel: 'PUERTAS TECNICAS', color: '#A0AEC0', href: '/puertas-mobiliario', submenus: puertasSubmenus },
  { subLabel: 'CUBIERTAS', color: '#667EEA', href: '/cubiertas' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null)

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
      bg="#061236"
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
              <Box
                key={index}
                position="relative"
                onMouseEnter={() => item.submenus && setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  cursor="pointer"
                  position="relative"
                  role="group"
                  py={2}
                  display="flex"
                  alignItems="flex-end"
                  _hover={{ textDecoration: 'none' }}
                >
                  <VStack align="flex-start" gap={0} h="32px" justify="flex-end">
                    {item.label && (
                      <Text fontSize="10px" fontWeight="medium" textTransform="uppercase" letterSpacing="0.05em" opacity={0.7} lineHeight="1">
                        {item.label}
                      </Text>
                    )}
                    <HStack gap={1} align="center">
                      <Text fontSize="11px" fontWeight="bold" whiteSpace="nowrap" lineHeight="1.2">
                        {item.subLabel}
                      </Text>
                      {item.submenus && <Box as={ChevronDown} size={14} opacity={openDropdown === index ? 1 : 0.7} />}
                    </HStack>
                  </VStack>
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
                {/* Dropdown submenus */}
                {item.submenus && openDropdown === index && (
                  <Box
                    position="absolute"
                    top="100%"
                    left="0"
                    mt={1}
                    minW="200px"
                    py={2}
                    bg="rgba(6, 18, 54, 0.98)"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    borderRadius="md"
                    boxShadow="xl"
                    zIndex={1001}
                  >
                    {item.submenus.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        display="block"
                        px={4}
                        py={2}
                        fontSize="13px"
                        borderLeft="3px solid transparent"
                        _hover={{ bg: 'whiteAlpha.100', textDecoration: 'none', borderLeftColor: item.color }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </Box>
                )}
              </Box>
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
                  <Box key={index}>
                    <Link
                      href={item.href}
                      _hover={{ textDecoration: 'none' }}
                      onClick={(e) => { if (item.submenus) e.preventDefault(); else setIsMobileMenuOpen(false); }}
                    >
                      <HStack
                        p={4}
                        borderRadius="lg"
                        bg="whiteAlpha.50"
                        borderLeft="4px solid"
                        borderColor={item.color}
                        transition="all 0.2s"
                        _hover={{ bg: 'whiteAlpha.100', transform: 'translateX(5px)' }}
                        justifyContent="space-between"
                        onClick={(e) => item.submenus && (e.stopPropagation(), setOpenMobileSubmenu(openMobileSubmenu === index ? null : index))}
                      >
                        <VStack align="flex-start" gap={0} h="40px" justify="flex-end">
                          {item.label && (
                            <Text fontSize="10px" fontWeight="medium" textTransform="uppercase" letterSpacing="0.05em" opacity={0.7} lineHeight="1">
                              {item.label}
                            </Text>
                          )}
                          <Text fontSize="14px" fontWeight="bold" lineHeight="1.2">
                            {item.subLabel}
                          </Text>
                        </VStack>
                        {item.submenus && (
                          <Box
                            as={ChevronDown}
                            size={20}
                            transform={openMobileSubmenu === index ? 'rotate(180deg)' : 'rotate(0)'}
                            transition="transform 0.2s"
                          />
                        )}
                      </HStack>
                    </Link>
                    {item.submenus && openMobileSubmenu === index && (
                      <VStack align="stretch" gap={0} pl={6} mt={2} borderLeft="2px solid" borderColor={item.color}>
                        <Link
                          href={item.href}
                          py={2}
                          fontSize="13px"
                          opacity={0.9}
                          _hover={{ textDecoration: 'none', opacity: 1 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Ver todos
                        </Link>
                        {item.submenus.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            py={2}
                            fontSize="13px"
                            _hover={{ textDecoration: 'none', opacity: 1 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </VStack>
                    )}
                  </Box>
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
