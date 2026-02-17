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
  Sparkles,
  GraduationCap,
  Heart,
  Palette,
  ArrowRight,
  Layers,
  Wrench,
  Shield,
  LayoutGrid,
} from 'lucide-react'
import { Footer } from '@/components/Footer'
import './infantil.css'

const MotionBox = motion.create(Box)

// Imágenes desde public/infantiles
const IMG_HERO = `/infantiles/${encodeURIComponent('obra baños cucuta niños 2.jpg')}`
const IMG_INTRO = `/infantiles/${encodeURIComponent('obra baños cucuta niños 3.jpg')}`
const IMG_CTA = `/infantiles/${encodeURIComponent('obra baños cucuta niños 4.jpg')}`

const caracteristicas = [
  'Panel fenólico resistente a humedad',
  'Bordes seguros',
  'Diseños personalizados',
  'Colores vibrantes',
  'Fácil limpieza',
]

const idealPara = [
  { label: 'Jardines infantiles', icon: Sparkles },
  { label: 'Colegios', icon: GraduationCap },
  { label: 'Clínicas pediátricas', icon: Heart },
  { label: 'Centros recreativos', icon: Palette },
]

export default function LineaInfantilPage() {
  return (
    <Box bg="white" minH="100vh">
      {/* 1. HERO */}
      <div className="infantil-intro-banner">
        <div className="infantil-intro-overlay" />
        <img
          src={IMG_HERO}
          alt="Línea Infantil - Baños"
          className="infantil-intro-bg"
        />
        <div className="infantil-intro-content">
          <div className="infantil-intro-label">LÍNEA INFANTIL</div>
          <h1 className="infantil-intro-title">
            Diseño lúdico para espacios que <span className="highlight">inspiran</span>
          </h1>
          <p className="infantil-intro-tagline">
            Transformamos los espacios sanitarios en experiencias visuales amigables y creativas. Mamparas con formas de animales, frutas o figuras personalizadas.
          </p>
        </div>
      </div>

      {/* 2. INTRO / PROPUESTA DE VALOR */}
      <Box bg="white" py={{ base: 16, md: 24 }}>
        <Container maxW="8xl" px={8}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 20 }} alignItems="center">
            <VStack align="flex-start" gap={6}>
              <Text color="green.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                LA LÍNEA INFANTIL
              </Text>
              <Heading color="gray.900" fontSize={{ base: '2xl', md: '4xl' }} lineHeight="1.2">
                Más que divisiones, <Text as="span" color="green.500">elementos que generan confianza</Text> y bienestar
              </Heading>
              <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                La Línea Infantil transforma los espacios sanitarios en experiencias visuales amigables y creativas. Las mamparas pueden diseñarse con formas de animales, frutas o figuras personalizadas.
              </Text>
              <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                Más que divisiones, son elementos que generan confianza y bienestar en niños.
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
                alt="Línea Infantil - Detalle"
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
                  Espacios funcionales que también educan y divierten.
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
                Combina seguridad, resistencia y creatividad
              </Heading>
              <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                Diseño lúdico que transforma baños en espacios amigables. Más que divisiones: elementos que generan confianza y bienestar en los niños.
              </Text>
              <Box borderLeft="4px solid #48BB78" pl={6} py={2} my={2}>
                <Text fontStyle="italic" color="whiteAlpha.900" fontSize="xl" fontWeight="medium">
                  Espacios funcionales que también educan y divierten.
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
                    {['Estructura', 'Seguridad', 'Durabilidad', 'Diseño'][i]}
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
      <div className="infantil-cta">
        <div className="infantil-cta-overlay" />
        <img
          src={IMG_CTA}
          alt="Proyecto con Línea Infantil"
          className="infantil-cta-bg"
        />
        <div className="infantil-cta-content">
          <h2 className="infantil-cta-title">¿Tu proyecto necesita la Línea Infantil?</h2>
          <p className="infantil-cta-text">
            Combina seguridad, resistencia y creatividad. Ideal para jardines infantiles, colegios, clínicas pediátricas y centros recreativos.
          </p>
          <HStack justify="center" gap={4} flexWrap="wrap">
            <button type="button" className="infantil-cta-button">
              <span>Cotizar Línea Infantil</span>
              <ArrowRight size={20} />
            </button>
          </HStack>
        </div>
      </div>

      <Footer />
    </Box>
  )
}
