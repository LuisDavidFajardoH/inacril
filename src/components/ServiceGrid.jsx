'use client'

import React from 'react'
import { Box, SimpleGrid, Text, Heading, VStack, Image, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box)

const services = [
  {
    title: 'Trayectoria',
    highlight: 'que respalda',
    subtitle: 'tus decisiones',
    description: 'Casi cinco décadas trabajando con constructoras, arquitectos, acríleros y marcas, entendiendo las exigencias de obra, montaje y operación.',
    buttonText: 'Conocer más',
    image: '/santa fe.jpg',
  },
  {
    title: 'Materiales',
    highlight: 'de alto',
    subtitle: 'desempeño',
    description: 'Láminas, cubiertas, paneles y sistemas pensados para soportar el uso real: impacto, clima, tráfico de personas y mantenimiento frecuente.',
    buttonText: 'Ver líneas de producto',
    image: '/plaza.jpg',
  },
  {
    title: 'Acompañamiento',
    highlight: 'técnico',
    subtitle: 'cercano',
    description: 'Te ayudamos a elegir el material y el sistema adecuado para cada proyecto, con asesoría en especificación, detalle y montaje.',
    buttonText: 'Ver más servicios',
    image: '/plaza.jpg',
  },
  {
    title: 'Portafolio integral',
    highlight: 'en un solo',
    subtitle: 'proveedor',
    description: 'Desde cubiertas y fachadas hasta divisiones en HPL, puertas cortafuego y láminas para señalética, todo conectado en un mismo portafolio.',
    buttonText: 'Conocer productos',
    image: '/santa fe.jpg',
  }
]

const ServiceCard = ({ service, index }) => {
  const isRightSide = index % 2 !== 0
  
  const panelVariants = {
    initial: { x: isRightSide ? "100%" : "-100%" },
    hover: { x: 0 }
  }

  const staticVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0 }
  }

  return (
    <MotionBox
      position="relative"
      height="450px"
      overflow="hidden"
      initial="initial"
      whileHover="hover"
      borderRight={(index + 1) % 2 !== 0 ? "1px solid" : "none"}
      borderBottom={index < 2 ? "1px solid" : "none"}
      borderColor="whiteAlpha.200"
    >
      {/* Background Image */}
      <Image
        src={service.image}
        alt={service.title}
        objectFit="cover"
        w="100%"
        h="100%"
        filter="brightness(0.3) grayscale(0.5)"
        transition="all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
      />

      {/* Static Content (Title) */}
      <MotionBox
        as={Flex}
        variants={staticVariants}
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        p={12}
        direction="column"
        justify="center"
        align={isRightSide ? "flex-start" : "flex-end"}
        zIndex="2"
      >
        <VStack align={isRightSide ? "flex-start" : "flex-end"} gap={0}>
          <Heading color="white" fontSize="3xl" fontWeight="800" letterSpacing="-1px">
            {service.title} <Text as="span" fontWeight="300">{service.highlight}</Text>
          </Heading>
          <Text color="whiteAlpha.800" fontSize="xl" fontWeight="300">
            {service.subtitle}
          </Text>
        </VStack>
      </MotionBox>

      {/* Hover Panel */}
      <MotionBox
        variants={panelVariants}
        position="absolute"
        top="0"
        left={isRightSide ? "auto" : "0"}
        right={isRightSide ? "0" : "auto"}
        w="70%"
        h="100%"
        bg="rgba(255, 255, 255, 0.98)"
        zIndex="10"
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        p={12}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <VStack align="flex-start" gap={8}>
          <Text color="gray.700" fontSize="lg" fontWeight="500" lineHeight="1.4">
            {service.description}
          </Text>
          <Box
            as="button"
            bg="#48BB78"
            color="white"
            px={8}
            py={3}
            rounded="md"
            fontWeight="bold"
            fontSize="sm"
            _hover={{ bg: "#38A169", transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            {service.buttonText}
          </Box>
        </VStack>
      </MotionBox>
    </MotionBox>
  )
}

export const ServiceGrid = () => {
  return (
    <Box bg="#0a0a0a" borderY="1px solid" borderColor="whiteAlpha.200" position="relative">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </SimpleGrid>

      {/* Decorative Center Element - Glassmorphism style */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="160px"
        h="80px"
        bg="rgba(255, 255, 255, 0.05)"
        backdropFilter="blur(10px)"
        border="1px solid"
        borderColor="whiteAlpha.300"
        display={{ base: 'none', md: 'flex' }}
        alignItems="center"
        justifyContent="center"
        zIndex="20"
        boxShadow="0 0 40px rgba(0, 163, 255, 0.1)"
        flexDirection="column"
        textAlign="center"
        px={2}
      >
        <Text
          color="cyan.400"
          fontSize="10px"
          fontWeight="bold"
          letterSpacing="0.2em"
          textTransform="uppercase"
          mb={1}
        >
          Desde 1976
        </Text>
        <Box w="30px" h="1px" bg="whiteAlpha.400" mb={1} />
        <Text
          color="white"
          fontSize="14px"
          fontWeight="700"
          lineHeight="1.1"
        >
          Calidad & <br /> Servicio
        </Text>
      </Box>
    </Box>
  )
}
