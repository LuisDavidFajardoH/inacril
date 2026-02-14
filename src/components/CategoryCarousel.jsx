'use client'

import React from 'react'
import { Box, Container, Heading, Text, Image, Flex, VStack } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const categories = [
  {
    title: 'Acrílicos, PETG y Señalética',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    color: 'rgba(72, 52, 117, 0.8)' // Muted Plum
  },
  {
    title: 'Imagen Corporativa Integral',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop',
    color: 'rgba(130, 103, 39, 0.8)' // Deep Ochre
  },
  {
    title: 'Mobiliario Exterior y Fachadas',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    color: 'rgba(34, 64, 110, 0.8)' // Slate Blue
  },
  {
    title: 'Mobiliario Interior y HPL',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    color: 'rgba(35, 78, 64, 0.8)' // Sage Green
  },
  {
    title: 'Puertas Cortafuego RF',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    color: 'rgba(55, 59, 62, 0.8)' // Graphite
  },
  {
    title: 'Cubiertas en Policarbonato',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
    color: 'rgba(43, 49, 78, 0.8)' // Atmospheric Blue
  }
]

export const CategoryCarousel = () => {
  return (
    <Box 
      bg="gray.50" 
      py={24} 
      position="relative" 
      overflow="hidden"
      borderY="1px solid"
      borderColor="gray.200"
    >
      {/* Subtle Architectural Grid Pattern */}
      <Box 
        position="absolute" 
        top="0" 
        left="0" 
        right="0" 
        bottom="0" 
        opacity="0.4"
        pointerEvents="none"
        backgroundImage="radial-gradient(#CBD5E0 1px, transparent 1px)"
        backgroundSize="40px 40px"
      />

      <Container maxW="8xl" px={8} mb={12} position="relative" zIndex="1">
        <VStack align="flex-start" gap={1}>
          <Text color="cyan.600" fontWeight="bold" fontSize="xs" letterSpacing="0.2em" textTransform="uppercase">PRODUCTOS</Text>
          <Heading color="gray.800" fontSize="4xl" fontWeight="200">
            Nuestras Líneas de <Text as="span" fontWeight="bold">Producción</Text>
          </Heading>
        </VStack>
      </Container>

      <Box px={4}>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 }
          }}
          style={{ paddingBottom: '40px' }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <Box 
                height="500px" 
                position="relative" 
                role="group" 
                overflow="hidden"
                cursor="pointer"
              >
                {/* Background Image */}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  transition="all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                  filter="brightness(0.9)"
                  _groupHover={{ transform: 'scale(1.1)', filter: 'brightness(1)' }}
                />

                {/* Bottom Overlay Label */}
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  p={10}
                  bg={cat.color}
                  backdropFilter="blur(12px)"
                  transition="all 0.4s"
                  height="110px"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="center"
                  textAlign="left"
                  _groupHover={{ height: '150px', bg: cat.color.replace('0.8', '0.95') }}
                  boxShadow="0 -10px 40px rgba(0,0,0,0.1)"
                >
                  <Box 
                    w="40px" 
                    h="2px" 
                    bg="white" 
                    mb={4} 
                    transition="all 0.4s"
                    _groupHover={{ w: '70px', bg: "cyan.300" }}
                  />
                  <Text 
                    color="white" 
                    fontSize="lg" 
                    fontWeight="600" 
                    lineHeight="1.2"
                    letterSpacing="0.01em"
                    textShadow="0 2px 10px rgba(0,0,0,0.2)"
                  >
                    {cat.title}
                  </Text>
                  
                  {/* Subtle reveal text on hover */}
                  <Text
                    color="whiteAlpha.900"
                    fontSize="xs"
                    fontWeight="bold"
                    mt={4}
                    opacity="0"
                    transform="translateY(10px)"
                    transition="all 0.4s"
                    _groupHover={{ opacity: 1, transform: 'translateY(0)' }}
                  >
                    VER DETALLES →
                  </Text>
                </Box>

                {/* Hover Reveal Border/Effect */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="120px"
                  border="0px solid"
                  borderColor="whiteAlpha.400"
                  transition="all 0.3s"
                  _groupHover={{ borderLeftWidth: '8px' }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}
