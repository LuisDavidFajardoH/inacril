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
  Building2,
  Hotel,
  Briefcase,
  Landmark,
  ArrowRight,
  Layers,
  Wrench,
  Shield,
  LayoutGrid,
} from 'lucide-react'
import { Footer } from '@/components/Footer'
import './maxi.css'

const MotionBox = motion.create(Box)

// Imagen local + imagen de apoyo (baño corporativo/hotel moderno)
const IMG_HERO = '/max.jpeg'
const IMG_INTRO = 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80'
const IMG_CTA = 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1600&q=80'

const caracteristicas = [
  'Pilastra estructural',
  'Sin tubular superior',
  'Imagen moderna y minimalista',
  'Alta resistencia al impacto y humedad',
  'Herrajes de alta durabilidad',
]

const idealPara = [
  { label: 'Oficinas premium', icon: Building2 },
  { label: 'Hoteles', icon: Hotel },
  { label: 'Proyectos corporativos modernos', icon: Briefcase },
  { label: 'Espacios institucionales de alto estándar', icon: Landmark },
]

export default function LineaMaxiPage() {
  return (
    <Box bg="white" minH="100vh">
      {/* 1. HERO */}
      <div className="maxi-intro-banner">
        <div className="maxi-intro-overlay" />
        <img
          src={IMG_HERO}
          alt="Línea Max - Baños"
          className="maxi-intro-bg"
        />
        <div className="maxi-intro-content">
          <div className="maxi-intro-label">LÍNEA MAX</div>
          <h1 className="maxi-intro-title">
            Estética limpia, <span className="highlight">mayor independencia estructural</span>
          </h1>
          <p className="maxi-intro-tagline">
            Elimina el tubular superior para una apariencia más limpia y contemporánea. Pilastra estructural sin tubular superior, mayor independencia visual entre cabinas.
          </p>
        </div>
      </div>

      {/* 2. INTRO / PROPUESTA DE VALOR */}
      <Box bg="white" py={{ base: 16, md: 24 }}>
        <Container maxW="8xl" px={8}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 20 }} alignItems="center">
            <VStack align="flex-start" gap={6}>
              <Text color="green.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                LA LÍNEA MAX
              </Text>
              <Heading color="gray.900" fontSize={{ base: '2xl', md: '4xl' }} lineHeight="1.2">
                Donde el <Text as="span" color="green.500">diseño es protagonista</Text>
              </Heading>
              <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                La Línea Max elimina el tubular superior, logrando una apariencia más limpia y contemporánea. Incorpora pilastra estructural sin tubular superior, ofreciendo mayor independencia visual entre cabinas.
              </Text>
              <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                Ideal para proyectos donde el diseño es protagonista.
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
                alt="Línea Max - Baño moderno"
                objectFit="cover"
                objectPosition="center"
                w="100%"
                h="100%"
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
                  Max es presencia arquitectónica.
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

      {/* 4. IDEAL PARA */}
      <Box bg="white" py={{ base: 16, md: 24 }}>
        <Container maxW="8xl" px={8}>
          <VStack gap={4} textAlign="center" mb={12}>
            <Text color="green.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
              SECTORES
            </Text>
            <Heading color="gray.900" fontSize={{ base: '2xl', md: '4xl' }}>
              Ideal para
            </Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
            {idealPara.map((item, i) => (
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
                Mayor impacto visual con desempeño técnico garantizado
              </Heading>
              <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                Estética limpia y contemporánea sin tubular superior. Pilastra estructural que ofrece independencia visual entre cabinas.
              </Text>
              <Box borderLeft="4px solid #48BB78" pl={6} py={2} my={2}>
                <Text fontStyle="italic" color="whiteAlpha.900" fontSize="xl" fontWeight="medium">
                  Max es presencia arquitectónica.
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
                    {['Estructura', 'Diseño', 'Durabilidad', 'Minimalista'][i]}
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
      <div className="maxi-cta">
        <div className="maxi-cta-overlay" />
        <img
          src={IMG_CTA}
          alt="Proyecto con Línea Max"
          className="maxi-cta-bg"
        />
        <div className="maxi-cta-content">
          <h2 className="maxi-cta-title">¿Tu proyecto necesita la Línea Max?</h2>
          <p className="maxi-cta-text">
            Mayor impacto visual con desempeño técnico garantizado. Ideal para oficinas premium, hoteles, proyectos corporativos modernos y espacios institucionales de alto estándar.
          </p>
          <HStack justify="center" gap={4} flexWrap="wrap">
            <button type="button" className="maxi-cta-button">
              <span>Cotizar Línea Max</span>
              <ArrowRight size={20} />
            </button>
          </HStack>
        </div>
      </div>

      <Footer />
    </Box>
  )
}
