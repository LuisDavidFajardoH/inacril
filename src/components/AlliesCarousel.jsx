'use client'

import React from 'react'
import { Box, Container, Image, Text, VStack } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

export const AlliesCarousel = () => {
  const allies = [
    { src: '/aliados/7.png', alt: 'Aliado 7' },
    { src: '/aliados/8.png', alt: 'Aliado 8' },
    { src: '/aliados/9.png', alt: 'Aliado 9' },
    { src: '/aliados/10.png', alt: 'Aliado 10' },
    { src: '/aliados/11.png', alt: 'Aliado 11' },
    { src: '/aliados/12.png', alt: 'Aliado 12' },
    { src: '/aliados/13.png', alt: 'Aliado 13' },
    { src: '/aliados/14.png', alt: 'Aliado 14' },
  ]

  return (
    <Box 
      bg="white" 
      py={{ base: 10, md: 16 }} 
      position="relative"
      zIndex="10"
      borderY="1px solid"
      borderColor="gray.100"
    >
      <Container maxW="8xl" px={8}>
        <VStack gap={4} mb={{ base: 8, md: 12 }}>
          <Text 
            color="gray.400" 
            fontSize="xs" 
            fontWeight="bold" 
            letterSpacing="0.4em" 
            textTransform="uppercase"
            textAlign="center"
          >
            Nuestros Aliados Estratégicos
          </Text>
        </VStack>

        <Box position="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 50 },
              768: { slidesPerView: 4, spaceBetween: 60 },
              1024: { slidesPerView: 5, spaceBetween: 80 },
              1600: { slidesPerView: 6, spaceBetween: 100 },
            }}
            style={{ transitionTimingFunction: 'linear' }}
          >
            {allies.map((logo, index) => (
              <SwiperSlide key={index}>
                <Box 
                  h={{ base: "60px", md: "100px" }} 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                  transition="all 0.4s"
                  _hover={{ transform: "scale(1.1)" }}
                >
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    maxH="100%" 
                    maxW="100%" 
                    objectFit="contain"
                    mixBlendMode="multiply"
                    loading="eager"
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  )
}
