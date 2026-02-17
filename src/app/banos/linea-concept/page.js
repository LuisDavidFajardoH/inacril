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
  GraduationCap,
  Heart,
  Briefcase,
  Landmark,
  ArrowRight,
  Layers,
  Wrench,
  Shield,
  LayoutGrid,
} from 'lucide-react'
import { Footer } from '@/components/Footer'
import './concept.css'

const MotionBox = motion.create(Box)

// Imágenes locales desde public/baños
const IMG_HERO = `/baños/${encodeURIComponent('baños cc jardin plaza cucuta 3.jpg')}`
const IMG_INTRO = '/baños/f2cc75a7-5543-4bf6-adc1-4d5e113ce957.jpg'
const IMG_CTA = `/baños/${encodeURIComponent('CC CUCUTA2.jpg')}`

const caracteristicasTecnicas = [
  'Panel fenólico (HPL) de alta resistencia',
  'Pie regulable en acero inoxidable',
  'Tubular superior estructural',
  'Herrajes anticorrosivos',
  'Sistema modular adaptable',
  'Fácil instalación y mantenimiento',
]

const idealPara = [
  { label: 'Centros comerciales', icon: Building2 },
  { label: 'Universidades', icon: GraduationCap },
  { label: 'Clínicas', icon: Heart },
  { label: 'Proyectos corporativos', icon: Briefcase },
  { label: 'Edificios institucionales', icon: Landmark },
]

export default function LineaConceptPage() {
  return (
    <Box bg="white" minH="100vh">
      {/* 1. HERO BANNER */}
      <div className="concept-intro-banner">
        <div className="concept-intro-overlay" />
        <img
          src={IMG_HERO}
          alt="Línea Concept - Baños"
          className="concept-intro-bg"
        />
        <div className="concept-intro-content">
          <div className="concept-intro-label">LÍNEA CONCEPT</div>
          <h1 className="concept-intro-title">
            Diseño funcional con <span className="highlight">estructura visible superior</span>
          </h1>
          <p className="concept-intro-tagline">
            Estabilidad estructural y estética moderna. Pie regulable en acero inoxidable y tubular superior para alineación perfecta y mayor rigidez en proyectos de alto tráfico.
          </p>
        </div>
      </div>

      {/* 2. INTRO / PROPUESTA DE VALOR */}
      <Box bg="white" py={{ base: 16, md: 24 }}>
        <Container maxW="8xl" px={8}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 20 }} alignItems="center">
            <VStack align="flex-start" gap={6}>
              <Text color="green.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                LA SOLUCIÓN CONCEPT
              </Text>
              <Heading color="gray.900" fontSize={{ base: '2xl', md: '4xl' }} lineHeight="1.2">
                Versatilidad que equilibra <Text as="span" color="green.500">costo, durabilidad y presencia</Text> arquitectónica
              </Heading>
              <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                La Línea Concept combina estabilidad estructural y estética moderna. Incorpora pie regulable en acero inoxidable y tubular superior, garantizando alineación perfecta y mayor rigidez en proyectos de alto tráfico.
              </Text>
              <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                Es una solución versátil, ideal cuando se busca equilibrio entre costo, durabilidad y presencia arquitectónica.
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
                alt="Línea Concept - Detalle"
                objectFit="contain"
                objectPosition="center"
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
                  Concept = diseño + resistencia + eficiencia
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* 3. CARACTERÍSTICAS TÉCNICAS */}
      <Box bg="gray.50" py={{ base: 16, md: 24 }}>
        <Container maxW="8xl" px={8}>
          <VStack gap={4} textAlign="center" mb={12}>
            <Text color="green.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
              ESPECIFICACIONES
            </Text>
            <Heading color="gray.900" fontSize={{ base: '2xl', md: '4xl' }}>
              Características técnicas
            </Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6} maxW="5xl" mx="auto">
            {caracteristicasTecnicas.map((item, i) => (
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
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
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
                  <Text color="gray.800" fontWeight="600" fontSize="lg">
                    {item.label}
                  </Text>
                </HStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 5. ¿POR QUÉ ELEGIR CONCEPT? - Bloque oscuro */}
      <Box bg="#0a1021" py={{ base: 16, md: 24 }} color="white">
        <Container maxW="8xl" px={8}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 12, lg: 20 }} alignItems="center">
            <VStack align="flex-start" gap={6}>
              <Text color="green.400" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                POR QUÉ ELEGIR CONCEPT
              </Text>
              <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" lineHeight="1.2">
                Estabilidad estructural superior sin elevar el presupuesto
              </Heading>
              <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                Ofrece estabilidad estructural superior sin elevar significativamente el presupuesto del proyecto.
              </Text>
              <Box borderLeft="4px solid #48BB78" pl={6} py={2} my={2}>
                <Text fontStyle="italic" color="whiteAlpha.900" fontSize="xl" fontWeight="medium">
                  Concept es equilibrio: diseño + resistencia + eficiencia.
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

      {/* Separador visual: bloque oscuro terminó, viene CTA */}
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
      <div className="concept-cta">
        <div className="concept-cta-overlay" />
        <img
          src={IMG_CTA}
          alt="Proyecto con Línea Concept"
          className="concept-cta-bg"
        />
        <div className="concept-cta-content">
          <h2 className="concept-cta-title">¿Tu proyecto necesita Concept?</h2>
          <p className="concept-cta-text">
            Equilibrio entre costo, durabilidad y presencia arquitectónica. Ideal para centros comerciales, universidades, clínicas y edificios institucionales.
          </p>
          <HStack justify="center" gap={4} flexWrap="wrap">
            <button type="button" className="concept-cta-button">
              <span>Cotizar Línea Concept</span>
              <ArrowRight size={20} />
            </button>
          </HStack>
        </div>
      </div>

      <Footer />
    </Box>
  )
}
