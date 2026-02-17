'use client'

import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Flex,
  Image,
  Grid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  GraduationCap,
  Landmark,
  Building2,
  ArrowRight,
  Layers,
  Wrench,
  Shield,
  LayoutGrid,
} from 'lucide-react'
import { Footer } from '@/components/Footer'
import './esencial.css'

const MotionBox = motion.create(Box)

// Imágenes desde public/escencial
const IMG_HERO = `/escencial/${encodeURIComponent('WhatsApp Image 2019-11-07 at 8.18.48 AM.jpeg')}`
const IMG_INTRO = `/escencial/${encodeURIComponent('WhatsApp Image 2019-12-07 at 2.36.58 PM.jpeg')}`
const IMG_CTA = `/escencial/${encodeURIComponent('WhatsApp Image 2019-12-07 at 2.36.58 PM.jpeg')}`

const caracteristicas = [
  'Pilastra apoyada a piso',
  'Tubular superior estabilizador',
  'HPL resistente a humedad y alto tráfico',
  'Fácil limpieza',
  'Larga vida útil',
]

const aplicaciones = [
  { label: 'Instituciones educativas', icon: GraduationCap },
  { label: 'Edificaciones públicas', icon: Landmark },
  { label: 'Proyectos VIS', icon: Building2 },
  { label: 'Áreas administrativas', icon: LayoutGrid },
]

export default function LineaEsencialPage() {
  return (
    <Box bg="white" minH="100vh">
      {/* 1. HERO */}
      <div className="esencial-intro-banner">
        <div className="esencial-intro-overlay" />
        <img
          src={IMG_HERO}
          alt="Línea Esencial - Baños"
          className="esencial-intro-bg"
        />
        <div className="esencial-intro-content">
          <div className="esencial-intro-label">LÍNEA ESENCIAL</div>
          <h1 className="esencial-intro-title">
            La solución <span className="highlight">práctica y confiable</span>
          </h1>
          <p className="esencial-intro-tagline">
            Máxima funcionalidad con excelente relación costo-beneficio. Pilastra a piso y tubular superior para firmeza y alineación estructural.
          </p>
        </div>
      </div>

      {/* 2. INTRO / PROPUESTA DE VALOR */}
      <Box bg="white" py={{ base: 16, md: 24 }}>
        <Container maxW="8xl" px={8}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 20 }} alignItems="center">
            <VStack align="flex-start" gap={6}>
              <Text color="green.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                LA SOLUCIÓN ESENCIAL
              </Text>
              <Heading color="gray.900" fontSize={{ base: '2xl', md: '4xl' }} lineHeight="1.2">
                Diseñada para proyectos que requieren <Text as="span" color="green.500">máxima funcionalidad</Text>
              </Heading>
              <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                La Línea Esencial cuenta con pilastra a piso y tubular superior, lo que proporciona firmeza y alineación estructural. Excelente relación costo-beneficio.
              </Text>
              <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                Es ideal para proyectos institucionales de gran volumen.
              </Text>
            </VStack>
            <Box
              position="relative"
              h={{ base: '320px', md: '400px' }}
              rounded="2xl"
              overflow="hidden"
              boxShadow="2xl"
              bg="gray.100"
            >
              <Image
                src={IMG_INTRO}
                alt="Línea Esencial - Detalle"
                objectFit="contain"
                objectPosition="center center"
                w="100%"
                h="100%"
                transform="scale(0.92)"
                transformOrigin="center center"
                transition="transform 0.5s ease-out"
                _hover={{ transform: 'scale(1)' }}
              />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="linear-gradient(to top, rgba(10,16,33,0.9), transparent)"
                p={6}
              >
                <Text color="white" fontWeight="bold" fontSize="lg">
                  Esencial cumple, resiste y permanece.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* 3. CARACTERÍSTICAS */}
      <Box bg="gray.50" py={{ base: 16, md: 24 }}>
        <Container maxW="8xl" px={8}>
          <VStack gap={4} textAlign="center" mb={12}>
            <Text color="green.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
              ESPECIFICACIONES
            </Text>
            <Heading color="gray.900" fontSize={{ base: '2xl', md: '4xl' }}>
              Características
            </Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6} maxW="5xl" mx="auto">
            {caracteristicas.map((item, i) => (
              <HStack
                key={i}
                bg="white"
                p={5}
                rounded="xl"
                align="flex-start"
                gap={4}
                shadow="md"
                borderTop="4px solid"
                borderColor="green.500"
                _hover={{ shadow: 'xl', transform: 'translateY(-2px)' }}
                transition="all 0.3s"
              >
                <Box color="green.500" mt={0.5}>
                  <CheckCircle size={22} />
                </Box>
                <Text color="gray.700" fontWeight="500" fontSize="sm">
                  {item}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 4. APLICACIONES */}
      <Box bg="white" py={{ base: 16, md: 24 }}>
        <Container maxW="8xl" px={8}>
          <VStack gap={4} textAlign="center" mb={12}>
            <Text color="green.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
              SECTORES
            </Text>
            <Heading color="gray.900" fontSize={{ base: '2xl', md: '4xl' }}>
              Aplicaciones
            </Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {aplicaciones.map((item, i) => (
              <MotionBox
                key={i}
                bg="gray.50"
                p={6}
                rounded="xl"
                border="1px solid"
                borderColor="gray.200"
                whileHover={{ borderColor: 'green.300', boxShadow: 'lg' }}
                transition={{ duration: 0.2 }}
              >
                <HStack gap={4}>
                  <Box p={3} bg="green.50" rounded="lg" color="green.600">
                    <item.icon size={24} />
                  </Box>
                  <Text color="gray.800" fontWeight="600" fontSize="md">
                    {item.label}
                  </Text>
                </HStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 5. DIFERENCIAL - Bloque oscuro */}
      <Box bg="#0a1021" py={{ base: 16, md: 24 }} color="white">
        <Container maxW="8xl" px={8}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 20 }} alignItems="center">
            <VStack align="flex-start" gap={6}>
              <Text color="green.400" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                DIFERENCIAL
              </Text>
              <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" lineHeight="1.2">
                Optimiza presupuesto sin sacrificar durabilidad
              </Heading>
              <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                La solución práctica y confiable para proyectos de gran volumen que exigen resistencia y facilidad de mantenimiento.
              </Text>
              <Box borderLeft="4px solid #48BB78" pl={6} py={2} my={2}>
                <Text fontStyle="italic" color="whiteAlpha.900" fontSize="xl" fontWeight="medium">
                  Esencial cumple, resiste y permanece.
                </Text>
              </Box>
            </VStack>
            <Flex wrap="wrap" gap={4} justify="center">
              {[Layers, Wrench, Shield, LayoutGrid].map((Icon, i) => (
                <Box
                  key={i}
                  bg="whiteAlpha.05"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  p={6}
                  rounded="xl"
                  minW="120px"
                  textAlign="center"
                >
                  <Icon size={32} color="#48BB78" style={{ margin: '0 auto 8px' }} />
                  <Text fontSize="xs" color="whiteAlpha.700" textTransform="uppercase" letterSpacing="wider">
                    {['Estructura', 'Instalación', 'Durabilidad', 'Modular'][i]}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Grid>
        </Container>
      </Box>

      {/* Separador visual */}
      <Box bg="white" py={8} borderTop="4px solid" borderBottom="4px solid" borderColor="green.500">
        <Container maxW="8xl" px={8}>
          <Flex justify="center" align="center" gap={3}>
            <Box w="40px" h="2px" bg="green.500" />
            <Text color="gray.500" fontSize="xs" fontWeight="bold" letterSpacing="0.2em" textTransform="uppercase">
              Siguiente paso
            </Text>
            <Box w="40px" h="2px" bg="green.500" />
          </Flex>
        </Container>
      </Box>

      {/* 6. CTA */}
      <div className="esencial-cta">
        <div className="esencial-cta-overlay" />
        <img
          src={IMG_CTA}
          alt="Proyecto con Línea Esencial"
          className="esencial-cta-bg"
        />
        <div className="esencial-cta-content">
          <h2 className="esencial-cta-title">¿Tu proyecto necesita Esencial?</h2>
          <p className="esencial-cta-text">
            Optimiza presupuesto sin sacrificar durabilidad. Ideal para instituciones educativas, edificaciones públicas, proyectos VIS y áreas administrativas.
          </p>
          <HStack justify="center" gap={4} flexWrap="wrap">
            <button type="button" className="esencial-cta-button">
              <span>Cotizar Línea Esencial</span>
              <ArrowRight size={20} />
            </button>
          </HStack>
        </div>
      </div>

      <Footer />
    </Box>
  )
}
