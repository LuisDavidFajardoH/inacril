'use client'
import React, { useRef, useEffect } from 'react'
import { Box, Container, Heading, Text, VStack, SimpleGrid, Image, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)
const MotionVStack = motion.create(VStack)

export const PlazaCentralSection = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8 // Slow motion effect for elegance
    }
  }, [])

  return (
    <Box position="relative" h={{ base: "auto", lg: "90vh" }} overflow="hidden" py={32} bg="black">
      {/* Video Background */}
      <Box position="absolute" top="0" left="0" w="100%" h="100%" zIndex="0">
         <video
            ref={videoRef}
            src="/plaza-central/plaza_video.mp4"
            poster="/plaza-central/plaza_1.jpeg"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }}
         />
      </Box>

      {/* Content */}
      <Container maxW="8xl" h="100%" position="relative" zIndex="1" px={8}>
        <Flex h="100%" direction={{ base: "column", lg: "row" }} align="center" gap={{ base: 12, lg: 24 }}>
            {/* Text Content */}
            <MotionVStack 
                flex={1} 
                align="flex-start" 
                gap={8}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Box>
                    <Text color="orange.400" fontWeight="bold" letterSpacing="widest" mb={4} fontSize="sm">
                        PROYECTO ICÓNICO
                    </Text>
                    <Heading color="white" fontSize={{ base: "5xl", md: "8xl" }} lineHeight="0.9" fontWeight="800" letterSpacing="-0.03em">
                        Plaza <br/>Central
                    </Heading>
                </Box>
                <Text color="whiteAlpha.800" fontSize={{ base: "lg", md: "2xl" }} maxW="lg" lineHeight="1.4">
                    Donde la arquitectura cobra vida. Una demostración de nuestra capacidad para fusionar diseño, seguridad y funcionalidad en espacios de alto tráfico.
                </Text>
            </MotionVStack>

            {/* Images Grid */}
            <Box flex={1.2} w="100%">
                <SimpleGrid columns={2} spacing={8}>
                    {/* Image 1 */}
                    <MotionBox
                        h={{ base: "250px", md: "500px" }}
                        rounded="3xl"
                        overflow="hidden"
                        position="relative"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        boxShadow="0 20px 40px rgba(0,0,0,0.5)"
                        transform="translateY(40px)"
                    >
                        <Image 
                            src="/plaza-central/plaza_1.jpeg" 
                            alt="Plaza Central Vista 1" 
                            w="100%" 
                            h="100%" 
                            objectFit="cover"
                            transition="transform 0.7s ease-out"
                            _hover={{ transform: 'scale(1.05)' }}
                        />
                    </MotionBox>
                    
                    {/* Image 2 */}
                    <MotionBox
                        h={{ base: "250px", md: "500px" }}
                        rounded="3xl"
                        overflow="hidden"
                        position="relative"
                        mt={{ base: 0, lg: -16 }} // Staggered layout
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        boxShadow="0 20px 40px rgba(0,0,0,0.5)"
                    >
                        <Image 
                            src="/plaza-central/plaza_2.jpeg" 
                            alt="Plaza Central Vista 2" 
                            w="100%" 
                            h="100%" 
                            objectFit="cover"
                            transition="transform 0.7s ease-out"
                            _hover={{ transform: 'scale(1.05)' }}
                        />
                    </MotionBox>
                </SimpleGrid>
            </Box>
        </Flex>
      </Container>
    </Box>
  )
}
