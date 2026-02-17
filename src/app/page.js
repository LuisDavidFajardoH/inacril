'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Flex, HStack, Image, SimpleGrid, Link } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ServiceGrid } from "@/components/ServiceGrid"
import { CategoryCarousel } from "@/components/CategoryCarousel"
import { SolutionsSection } from "@/components/SolutionsSection"
import { ProjectHighlight } from "@/components/ProjectHighlight"
import { ProjectForm } from "@/components/ProjectForm"
import { AlliesCarousel } from "@/components/AlliesCarousel"
import { PlazaCentralSection } from "@/components/PlazaCentralSection"
import { Footer } from "@/components/Footer"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const MotionVStack = motion.create(VStack)
const MotionBox = motion.create(Box)

const slides = [
  {
    image: '/santa fe.jpg',
    title: 'Casi 50 años',
    subtitle: 'transformando espacios',
    description: 'con cubiertas, fachadas, mobiliario, puertas cortafuego y soluciones para publicidad.'
  },
  {
    image: '/plaza.jpg',
    title: 'Explora',
    subtitle: 'las líneas de producto',
    description: 'y descubre cómo podemos ayudarte a iluminar, proteger y comunicar mejor cada espacio.',
    buttonText: 'Cuéntanos tu Proyecto',
    align: 'flex-end',
    textAlign: 'right'
  },
  {
    image: '/baños/baños cc jardin plaza cucuta 3.jpg',
    title: 'Expertos en',
    subtitle: 'Espacios de Alto Tráfico',
    description: 'Desde centros comerciales hasta instituciones educativas, garantizamos durabilidad y diseño.',
    buttonText: 'Ver Proyectos',
    align: 'center',
    textAlign: 'center'
  }
]

export default function Home() {
  return (
    <Box minH="100vh" bg="#0a0a0a">
      {/* Hero Section with Swiper */}
      <Box position="relative" h="100vh" w="100%">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect={'fade'}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          style={{ height: '100%', width: '100%' }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box position="relative" h="100%" w="100%">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  filter="brightness(0.35)"
                />

                {/* Content Overlay */}
                <Container maxW="8xl" h="100%" position="absolute" top="0" left="0" right="0" zIndex="1" px={8}>
                  <Flex h="100%" align="center" justify={slide.align || "flex-start"}>
                    <MotionVStack
                      align={slide.align || 'flex-start'}
                      textAlign={slide.textAlign || 'left'}
                      gap={10}
                      maxW="3xl"
                      initial={{ opacity: 0, x: slide.align === 'flex-end' ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <VStack align={slide.align || 'flex-start'} gap={4}>
                        <Heading
                          as="h1"
                          color="white"
                          fontSize={{ base: "4xl", md: "7xl" }}
                          fontWeight="bold"
                          lineHeight="1.1"
                          letterSpacing="-0.02em"
                        >
                          <Text as="span" display="block">{slide.title}</Text>
                          <Text as="span" display="block">{slide.subtitle}</Text>
                        </Heading>
                      </VStack>

                      <Text color="whiteAlpha.900" fontSize="2xl" maxW="2xl" fontWeight="400" lineHeight="1.3">
                        {slide.description}
                      </Text>

                      <HStack gap={6} pt={4}>
                        <Button
                          size="xl"
                          bg="#48BB78"
                          color="white"
                          rounded="md"
                          px={10}
                          fontSize="md"
                          fontWeight="bold"
                          _hover={{ bg: "#38A169", transform: "translateY(-2px)" }}
                          transition="all 0.3s"
                        >
                          {slide.buttonText || 'Ver líneas de Producto'}
                        </Button>
                      </HStack>
                    </MotionVStack>
                  </Flex>
                </Container>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* WhatsApp Floating Button */}
        <Box
          position="fixed"
          bottom="30px"
          left="30px"
          zIndex="1000"
          cursor="pointer"
          _hover={{ transform: 'scale(1.1)' }}
          transition="transform 0.2s"
        >
          <Box
            bg="#25D366"
            p={4}
            rounded="full"
            boxShadow="0 4px 12px rgba(0,0,0,0.3)"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              w="30px"
              h="30px"
            />
          </Box>
        </Box>
      </Box>

      {/* Services Grid Section */}
      <ServiceGrid />

      {/* Category Carousel Section */}
      <CategoryCarousel />

      {/* Project Highlight Section */}
      <ProjectHighlight />

      {/* Allies Carousel Section */}
      <AlliesCarousel />

      {/* Plaza Central Section */}
      <PlazaCentralSection />

      {/* Differentiator / Spacer */}
      <Box h="2px" w="100%" bg="whiteAlpha.100" my={20} />

      {/* Project Form Section */}
      <ProjectForm />

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Plaza Central Section */}
      {/* Moved above */}

      {/* Immersive Experience Section */}
      <Box position="relative" py={40} overflow="hidden">
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="0"
        >
          <Image
            src="/santa fe.jpg"
            alt="Experience"
            objectFit="cover"
            w="100%"
            h="100%"
            filter="brightness(0.3) grayscale(0.2)"
          />
        </Box>

        <Container maxW="8xl" px={8} position="relative" zIndex="1">
          <Flex direction={{ base: "column", lg: "row" }} align="center" gap={20}>
            <VStack flex="1" align="flex-start" gap={8}>
              <Box>
                <Text color="cyan.400" fontWeight="bold" fontSize="xs" mb={4} letterSpacing="0.2em">NUESTRA FILOSOFÍA</Text>
                <Heading color="white" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="200" lineHeight="1.1">
                  <Text as="span" display="block">Innovamos para</Text>
                  <Text as="span" fontWeight="bold">construir el futuro</Text>
                </Heading>
              </Box>
              <Text color="whiteAlpha.800" fontSize="xl" lineHeight="relaxed" maxW="xl">
                Llevamos casi cinco décadas liderando la transformación de espacios a través de la ingeniería plástica de alta precisión. Cada proyecto es un testimonio de nuestra búsqueda incansable por la perfección y la funcionalidad.
              </Text>
              <Button
                size="xl"
                variant="outline"
                borderColor="cyan.400"
                color="cyan.400"
                rounded="none"
                px={10}
                _hover={{ bg: "cyan.400", color: "black" }}
              >
                Nuestra Historia
              </Button>
            </VStack>

            <Box flex="1" w="100%">
              <SimpleGrid columns={2} spacing={4}>
                <Box height="300px" overflow="hidden">
                  <Image src="/baños/CC CUCUTA2.jpg" alt="Detail 1" objectFit="cover" w="100%" h="100%" filter="brightness(0.7)" transition="transform 0.6s" _hover={{ transform: 'scale(1.1)' }} />
                </Box>
                <Box height="300px" overflow="hidden" mt={8}>
                  <Image src="/divisiones de baño.png" alt="Detail 2" objectFit="cover" w="100%" h="100%" filter="brightness(0.7)" transition="transform 0.6s" _hover={{ transform: 'scale(1.1)' }} />
                </Box>
              </SimpleGrid>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Footer />

    </Box>
  )
}
