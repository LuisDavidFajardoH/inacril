'use client'

import React from 'react'
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  Flex, 
  Input, 
  Textarea, 
  SimpleGrid,
  Image,
  HStack
} from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin } from 'lucide-react'

const MotionBox = motion.create(Box)

export const ProjectForm = () => {
  return (
    <Box 
      position="relative" 
      py={{ base: 20, md: 32 }} 
      bg="#0a0a0a" 
      overflow="hidden"
    >
      {/* Background Image with Parallax-like feel */}
      <Box 
        position="absolute" 
        top="0" 
        left="0" 
        right="0" 
        bottom="0" 
        zIndex="0"
      >
        <Image 
          src="/MULTIPLAZA-1-1.webp" 
          alt="Multiplaza Background" 
          objectFit="cover" 
          w="100%" 
          h="100%" 
          filter="brightness(0.3) saturate(0.8)"
        />
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          right="0" 
          bottom="0" 
          bg="linear-gradient(to bottom, rgba(10, 16, 33, 0.9) 0%, rgba(10, 16, 33, 0.6) 100%)"
        />
      </Box>

      <Container maxW="8xl" px={8} position="relative" zIndex="1">
        <Flex direction={{ base: "column", lg: "row" }} gap={16} align="center">
          
          {/* Left Side: Information */}
          <VStack flex="1" align="flex-start" gap={10}>
            <Box>
              <Text color="cyan.400" fontWeight="bold" fontSize="xs" letterSpacing="0.3em" textTransform="uppercase" mb={4}>
                CONTÁCTANOS
              </Text>
              <Heading color="white" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold" mb={6} lineHeight="1.1">
                ¿Tienes un gran <br />
                <Text as="span" color="cyan.400">proyecto en mente?</Text>
              </Heading>
              <Text color="whiteAlpha.800" fontSize="xl" maxW="xl">
                Nuestro equipo de ingeniería está listo para asesorarte en la especificación y diseño de tu próxima obra con los mejores materiales traslúcidos.
              </Text>
            </Box>

            <VStack align="flex-start" gap={6} w="100%">
              <HStack gap={6}>
                <Flex w="50px" h="50px" bg="whiteAlpha.100" rounded="full" align="center" justify="center" border="1px solid" borderColor="whiteAlpha.200">
                  <Phone size={20} color="#4FD1C5" />
                </Flex>
                <Box>
                  <Text color="whiteAlpha.500" fontSize="xs" fontWeight="bold">TELÉFONO</Text>
                  <Text color="white" fontWeight="600">+57 601 234 5678</Text>
                </Box>
              </HStack>
              <HStack gap={6}>
                <Flex w="50px" h="50px" bg="whiteAlpha.100" rounded="full" align="center" justify="center" border="1px solid" borderColor="whiteAlpha.200">
                  <Mail size={20} color="#4FD1C5" />
                </Flex>
                <Box>
                  <Text color="whiteAlpha.500" fontSize="xs" fontWeight="bold">EMAIL</Text>
                  <Text color="white" fontWeight="600">contacto@inacril.com</Text>
                </Box>
              </HStack>
              <HStack gap={6}>
                <Flex w="50px" h="50px" bg="whiteAlpha.100" rounded="full" align="center" justify="center" border="1px solid" borderColor="whiteAlpha.200">
                  <MapPin size={20} color="#4FD1C5" />
                </Flex>
                <Box>
                  <Text color="whiteAlpha.500" fontSize="xs" fontWeight="bold">OFICINA CENTRAL</Text>
                  <Text color="white" fontWeight="600">Bogotá, Colombia</Text>
                </Box>
              </HStack>
            </VStack>
          </VStack>

          {/* Right Side: Form */}
          <MotionBox
            flex="1"
            w="100%"
            bg="rgba(255, 255, 255, 0.03)"
            backdropFilter="blur(20px)"
            p={{ base: 8, md: 12 }}
            border="1px solid"
            borderColor="whiteAlpha.200"
            rounded="xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <VStack gap={6}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="100%">
                <VStack align="flex-start" gap={2}>
                  <Text color="whiteAlpha.700" fontSize="sm">Nombre Completo</Text>
                  <Input 
                    bg="whiteAlpha.100" 
                    border="0" 
                    _focus={{ bg: "whiteAlpha.200", outline: "1px solid", outlineColor: "cyan.400" }} 
                    color="white"
                    placeholder="Escribe tu nombre"
                  />
                </VStack>
                <VStack align="flex-start" gap={2}>
                  <Text color="whiteAlpha.700" fontSize="sm">Empresa</Text>
                  <Input 
                    bg="whiteAlpha.100" 
                    border="0" 
                    _focus={{ bg: "whiteAlpha.200", outline: "1px solid", outlineColor: "cyan.400" }} 
                    color="white"
                    placeholder="Nombre de tu empresa"
                  />
                </VStack>
              </SimpleGrid>

              <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="100%">
                <VStack align="flex-start" gap={2}>
                  <Text color="whiteAlpha.700" fontSize="sm">Correo Electrónico</Text>
                  <Input 
                    type="email"
                    bg="whiteAlpha.100" 
                    border="0" 
                    _focus={{ bg: "whiteAlpha.200", outline: "1px solid", outlineColor: "cyan.400" }} 
                    color="white"
                    placeholder="email@ejemplo.com"
                  />
                </VStack>
                <VStack align="flex-start" gap={2}>
                  <Text color="whiteAlpha.700" fontSize="sm">Celular</Text>
                  <Input 
                    bg="whiteAlpha.100" 
                    border="0" 
                    _focus={{ bg: "whiteAlpha.200", outline: "1px solid", outlineColor: "cyan.400" }} 
                    color="white"
                    placeholder="+57 3..."
                  />
                </VStack>
              </SimpleGrid>

              <VStack align="flex-start" gap={2} w="100%">
                <Text color="whiteAlpha.700" fontSize="sm">Detalles del Proyecto</Text>
                <Textarea 
                  bg="whiteAlpha.100" 
                  border="0" 
                  h="150px"
                  _focus={{ bg: "whiteAlpha.200", outline: "1px solid", outlineColor: "cyan.400" }} 
                  color="white"
                  placeholder="Cuéntanos un poco sobre lo que necesitas..."
                />
              </VStack>

              <Button
                size="xl"
                w="100%"
                bg="#48BB78"
                color="white"
                _hover={{ bg: "#38A169", transform: "translateY(-2px)" }}
                transition="all 0.3s"
                fontWeight="bold"
              >
                <HStack gap={2}>
                  <Send size={18} />
                  <Text>Enviar Solicitud</Text>
                </HStack>
              </Button>
              <Text color="whiteAlpha.500" fontSize="xs" textAlign="center">
                Al enviar aceptas nuestro tratamiento de datos personales.
              </Text>
            </VStack>
          </MotionBox>

        </Flex>
      </Container>
    </Box>
  )
}
