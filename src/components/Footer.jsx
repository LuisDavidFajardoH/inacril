'use client'

import React from 'react'
import { 
  Box, 
  Container, 
  SimpleGrid, 
  VStack, 
  HStack, 
  Text, 
  Link, 
  Image, 
  Flex,
  Icon
} from '@chakra-ui/react'
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box 
      bg="rgb(93, 109, 155)" 
      color="white" 
      pt={20} 
      pb={10} 
    >
      <Container maxW="8xl" px={8}>
        {/* Top Section: Logo and Main Nav */}
        <Flex 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between" 
          align={{ base: 'flex-start', md: 'center' }}
          mb={16}
          gap={8}
        >
          <VStack align="flex-start" gap={1}>
            <Image src="/logo-blanco.png" alt="Inacril Logo" h="60px" objectFit="contain" />
            <Text fontSize="xs" color="whiteAlpha.800" ml={1}>¡Somos calidad y servicio!</Text>
          </VStack>

          <HStack 
            gap={{ base: 4, lg: 6 }} 
            flexWrap="wrap" 
            fontSize="lg" 
            fontWeight="400" 
            color="white"
            divider={<Box w="1px" h="20px" bg="whiteAlpha.400" />}
          >
            <Link _hover={{ opacity: 0.7 }}>Sobre INACRIL</Link>
            <Link _hover={{ opacity: 0.7 }}>Soluciones por sector</Link>
            <Link _hover={{ opacity: 0.7 }}>Servicios</Link>
            <Link _hover={{ opacity: 0.7 }}>Blog</Link>
            <Link _hover={{ opacity: 0.7 }}>Sucursales</Link>
            <Link _hover={{ opacity: 0.7 }}>Contacto</Link>
          </HStack>
        </Flex>

        {/* Content Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 10, md: 24 }} mb={16}>
          {/* Column 1: Addresses */}
          <VStack align="flex-start" gap={8}>
            <Heading>Direcciones</Heading>
            <VStack align="flex-start" gap={5} fontSize="xs" lineHeight="1.6" opacity="0.9">
              <Box>
                <Text fontWeight="bold">Bogotá:</Text>
                <Text>Cra. 69 B No. 24A-35 Sur, Carvajal.</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Bucaramanga:</Text>
                <Text>CL 20 No. 19-63 San Francisco.</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Medellín:</Text>
                <Text>CLL 7 No. 50-89 Zona Industrial Coltabaco.</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Cali:</Text>
                <Text>Cra. 6 No. 24 - 42 San Nicolas.</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Tenjo:</Text>
                <Text>Parque empresarial San Isidro P.H. Autopista Medellín km. 6.8.</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Barranquilla:</Text>
                <Text>CLL 75 No. 72-40 Bodega 7 - parque empresarial METROTEX.</Text>
              </Box>
            </VStack>
          </VStack>

          {/* Column 2: Phones & Certifications */}
          <VStack align="flex-start" gap={10}>
            <VStack align="flex-start" gap={8}>
              <Heading>Teléfonos</Heading>
              <VStack align="flex-start" gap={4} fontSize="xs" opacity="0.9">
                <Box>
                  <Text fontWeight="bold">Bogotá:</Text>
                  <Text>318 2726674</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">Zona Centro y Sur:</Text>
                  <Text>3176697936</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">Zona Norte:</Text>
                  <Text>3158792455</Text>
                </Box>
              </VStack>
            </VStack>

            {/* Certification Badge Placeholder */}
            <Box p={3} border="1px solid" borderColor="whiteAlpha.400" rounded="sm" bg="whiteAlpha.100" maxW="80px">
              <VStack gap={1}>
                <Image src="/logo-blanco.png" alt="PREAD" opacity="0.9" h="30px" objectFit="contain" />
                <Text fontSize="8px" textAlign="center" fontWeight="bold">PREAD</Text>
              </VStack>
            </Box>
          </VStack>

          {/* Column 3: Legal & Social */}
          <VStack align="flex-start" justify="space-between" h="100%" gap={10}>
            <VStack align="flex-start" gap={5} fontSize="sm">
              <Link _hover={{ textDecoration: 'underline' }}>Trabaja con Nosotros</Link>
              <Link _hover={{ textDecoration: 'underline' }}>Términos y Condiciones</Link>
              <Link _hover={{ textDecoration: 'underline' }}>Política de Tratamiento de Datos</Link>
              <Link _hover={{ textDecoration: 'underline' }}>Política de Cookies</Link>
            </VStack>

            <HStack gap={4}>
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={MessageCircle} />
            </HStack>
          </VStack>
        </SimpleGrid>

        {/* Bottom bar */}
        <Box borderTop="1px solid" borderColor="whiteAlpha.300" pt={8}>
          <Text fontSize="xs" color="whiteAlpha.700" textAlign="center">
            © {currentYear} INACRIL - Ingeniería en Acrílicos. Todos los derechos reservados.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

const Heading = ({ children, ...props }) => (
  <Text 
    color="white" 
    fontSize="lg" 
    fontWeight="bold" 
    letterSpacing="wider" 
    textTransform="uppercase"
    {...props}
  >
    {children}
  </Text>
)

const SocialIcon = ({ icon }) => (
  <Link
    w="45px"
    h="45px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    rounded="full"
    border="1px solid"
    borderColor="whiteAlpha.300"
    color="whiteAlpha.700"
    _hover={{ color: 'cyan.400', borderColor: 'cyan.400', transform: 'translateY(-3px)' }}
    transition="all 0.3s"
  >
    <Icon as={icon} w={5} h={5} />
  </Link>
)
