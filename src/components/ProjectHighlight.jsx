'use client'

import React from 'react'
import { Box, Container, Heading, Text, Button, VStack, Flex, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const MotionBox = motion.create(Box)
const MotionVStack = motion.create(VStack)

export const ProjectHighlight = () => {
  return (
    <Box 
      position="relative" 
      height={{ base: "auto", md: "800px" }} 
      width="100%" 
      overflow="hidden"
      bg="#0a0a0a"
    >
      {/* Background Image with Zoom Effect */}
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image 
          src="/MULTIPLAZA-1-1.webp" 
          alt="Proyecto Multiplaza" 
          objectFit="cover" 
          w="100%" 
          h="100%" 
          filter="brightness(0.6)"
        />
        {/* Dynamic Gradient Overlay */}
        <Box 
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="linear-gradient(to right, rgba(10, 16, 33, 0.9) 0%, rgba(10, 16, 33, 0.4) 50%, transparent 100%)"
        />
      </MotionBox>

      <Container maxW="8xl" h="100%" px={8} position="relative" zIndex="1">
        <Flex h="100%" align="center">
          <MotionVStack
            align="flex-start"
            gap={8}
            maxW="2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <VStack align="flex-start" gap={4}>
              <Text 
                color="cyan.400" 
                fontWeight="bold" 
                fontSize="sm" 
                letterSpacing="0.3em" 
                textTransform="uppercase"
              >
                PROYECTO DESTACADO
              </Text>
              <Heading 
                color="white" 
                fontSize={{ base: "4xl", md: "6xl" }} 
                fontWeight="bold" 
                lineHeight="1.1"
                letterSpacing="-0.02em"
              >
                Sistema de cubiertas traslúcidas y revestimientos exteriores
              </Heading>
            </VStack>

            <Text color="whiteAlpha.900" fontSize="xl" lineHeight="relaxed">
              Para crear espacios más luminosos, protegidos y coherentes con la imagen de la marca. Nuestra intervención en Multiplaza demuestra la versatilidad de la ingeniería plástica en grandes superficies.
            </Text>

            <Button
              size="xl"
              bg="#48BB78"
              color="white"
              rounded="md"
              px={10}
              height="60px"
              fontSize="md"
              fontWeight="bold"
              rightIcon={<ArrowRight size={20} />}
              _hover={{ bg: "#38A169", transform: "translateX(5px)" }}
              transition="all 0.3s"
            >
              Ver detalle del proyecto
            </Button>
          </MotionVStack>
        </Flex>
      </Container>

      {/* Glass Detail Widget */}
      <MotionBox
        position="absolute"
        bottom="10%"
        right="8%"
        p={8}
        bg="rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(20px)"
        border="1px solid"
        borderColor="whiteAlpha.200"
        color="white"
        display={{ base: "none", lg: "block" }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <VStack align="flex-start" gap={6}>
          <Box>
            <Text color="whiteAlpha.600" fontSize="xs" fontWeight="bold" letterSpacing="widest">UBICACIÓN</Text>
            <Text fontSize="lg" fontWeight="bold">Centro Comercial Multiplaza</Text>
          </Box>
          <Box>
            <Text color="whiteAlpha.600" fontSize="xs" fontWeight="bold" letterSpacing="widest">MATERIAL</Text>
            <Text fontSize="lg" fontWeight="bold">Policarbonato & HPL</Text>
          </Box>
          <Box w="100%" h="1px" bg="whiteAlpha.300" />
          <Text color="cyan.400" fontWeight="bold" fontSize="sm">Eficiencia Energética +85%</Text>
        </VStack>
      </MotionBox>
    </Box>
  )
}
