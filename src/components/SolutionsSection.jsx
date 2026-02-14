'use client'

import React from 'react'
import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, VStack, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Building2, Library, Store, Megaphone } from 'lucide-react'

const MotionBox = motion.create(Box)

const sectors = [
  {
    title: 'Construcción',
    subtitle: 'e Infraestructura',
    icon: Building2,
    color: 'rgba(34, 64, 110, 0.8)',
    image: '/santa fe.jpg'
  },
  {
    title: 'Institucional',
    subtitle: 'y Educativo',
    icon: Library,
    color: 'rgba(43, 49, 78, 0.8)',
    image: '/plaza.jpg'
  },
  {
    title: 'Retail',
    subtitle: 'y Comercio',
    icon: Store,
    color: 'rgba(26, 32, 44, 0.8)',
    image: '/santa fe.jpg'
  },
  {
    title: 'Publicidad y Visual',
    subtitle: 'Merchandising',
    icon: Megaphone,
    color: 'rgba(72, 52, 117, 0.8)',
    image: '/plaza.jpg'
  }
]

export const SolutionsSection = () => {
  return (
    <Box 
      position="relative" 
      py={32} 
      bgImage="url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop')"
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
    >
      {/* Light Gradient Overlay */}
      <Box 
        position="absolute" 
        top="0" 
        left="0" 
        right="0" 
        bottom="0" 
        bg="radial-gradient(circle at 50% 0%, rgba(0, 163, 255, 0.15) 0%, rgba(10, 16, 33, 0.85) 70%)" 
        backdropFilter="blur(2px)"
        zIndex="0"
      />

      <Container maxW="8xl" px={8} position="relative" zIndex="1">
        <VStack spacing={4} textAlign="center" mb={20}>
          <Text color="cyan.400" fontWeight="bold" fontSize="xs" letterSpacing="0.2em" textTransform="uppercase">
            Sectores de Aplicación
          </Text>
          <Heading color="white" fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" letterSpacing="-0.02em">
            Soluciones según tu tipo de proyecto
          </Heading>
          <Text color="whiteAlpha.700" fontSize="lg" maxW="2xl">
            Sistemas especializados diseñados para responder a los estándares más exigentes de cada industria.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {sectors.map((sector, index) => (
            <MotionBox
              key={index}
              position="relative"
              height="220px"
              bg="rgba(255, 255, 255, 0.05)"
              backdropFilter="blur(15px)"
              border="1px solid"
              borderColor="whiteAlpha.100"
              overflow="hidden"
              cursor="pointer"
              whileHover={{ 
                scale: 1.02, 
                borderColor: 'whiteAlpha.400',
                boxShadow: "0 20px 40px rgba(0, 163, 255, 0.15)"
              }}
              transition={{ duration: 0.3 }}
              role="group"
            >
              {/* Background Sector Image */}
              <Box position="absolute" top="0" left="0" right="0" bottom="0" zIndex="0">
                <Image 
                  src={sector.image} 
                  alt={sector.title} 
                  objectFit="cover" 
                  w="100%" 
                  h="100%" 
                  filter="brightness(0.5) contrast(1.1)"
                  transition="all 0.8s ease"
                  _groupHover={{ filter: "brightness(0.7) contrast(1.2)", transform: "scale(1.1)" }}
                />
              </Box>

              {/* Luminous Glow Effect on Hover */}
              <Box 
                position="absolute" 
                top="-50%" 
                left="-50%" 
                w="200%" 
                h="200%" 
                bg="radial-gradient(circle, rgba(0, 163, 255, 0.1) 0%, transparent 50%)"
                opacity="0"
                transition="opacity 0.5s"
                _groupHover={{ opacity: 1 }}
                zIndex="1"
              />

              <Flex h="100%" position="relative" zIndex="2">
                {/* Icon Section - Bright glass pill */}
                <Flex 
                  w="140px" 
                  align="center" 
                  justify="center" 
                  bg="whiteAlpha.100"
                  borderRight="1px solid"
                  borderColor="whiteAlpha.200"
                  transition="all 0.3s"
                  _groupHover={{ bg: 'whiteAlpha.200' }}
                >
                  <Icon 
                    as={sector.icon} 
                    w={12} 
                    h={12} 
                    color="white" 
                    transition="all 0.3s"
                    _groupHover={{ color: 'cyan.300', transform: 'scale(1.1)' }}
                    filter="drop-shadow(0 0 10px rgba(255,255,255,0.3))"
                  />
                </Flex>

                {/* Text Content Section */}
                <Flex 
                  flex="1" 
                  align="center" 
                  px={10} 
                  bg="linear-gradient(to right, rgba(0,0,0,0.6), transparent)"
                >
                  <VStack align="flex-start" gap={1}>
                    <Text color="white" fontSize="3xl" fontWeight="bold" lineHeight="1.1" letterSpacing="-0.03em">
                      {sector.title}
                    </Text>
                    <Text color="cyan.400" fontSize="lg" fontWeight="400">
                      {sector.subtitle}
                    </Text>
                  </VStack>
                </Flex>
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
