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
  Icon,
  Grid,
  GridItem
} from '@chakra-ui/react'
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box 
      bg="#050505" 
      color="whiteAlpha.800" 
      pt={16} 
      pb={8} 
      borderTop="1px solid" 
      borderColor="whiteAlpha.100"
    >
      <Container maxW="8xl" px={8}>
        <Grid 
          templateColumns={{ base: "1fr", lg: "1.5fr 2fr 1fr" }} 
          gap={{ base: 12, lg: 20 }} 
          mb={12}
        >
          {/* Column 1: Brand & Social */}
          <GridItem>
            <VStack align="flex-start" gap={8}>
              <Box>
                <Image src="/logo-blanco.png" alt="Inacril Logo" h="45px" objectFit="contain" mb={2} />
                <Text fontSize="xs" color="whiteAlpha.500" letterSpacing="widest">INGENIERÍA EN ACRÍLICOS</Text>
              </Box>
              <Text fontSize="sm" lineHeight="relaxed" maxW="300px">
                Líderes en soluciones plásticas de alta precisión para arquitectura e industria desde 1976.
              </Text>
              <HStack gap={4}>
                <SocialIcon icon={Facebook} />
                <SocialIcon icon={Instagram} />
                <SocialIcon icon={Linkedin} />
                <SocialIcon icon={MessageCircle} />
              </HStack>
            </VStack>
          </GridItem>

          {/* Column 2: Addresses Grid */}
          <GridItem>
            <VStack align="flex-start" gap={6}>
              <FooterHeading>Presencia Nacional</FooterHeading>
              <SimpleGrid columns={{ base: 1, md: 2 }} gapX={12} gapY={4} w="100%">
                <AddressItem city="Bogotá" address="Cra. 69 B No. 24A-35 Sur" />
                <AddressItem city="Bucaramanga" address="CL 20 No. 19-63" />
                <AddressItem city="Medellín" address="CLL 7 No. 50-89" />
                <AddressItem city="Cali" address="Cra. 6 No. 24 - 42" />
                <AddressItem city="Tenjo" address="P.E. San Isidro P.H." />
                <AddressItem city="Barranquilla" address="CLL 75 No. 72-40" />
              </SimpleGrid>
            </VStack>
          </GridItem>

          {/* Column 3: Quick Links */}
          <GridItem>
            <VStack align="flex-start" gap={6}>
              <FooterHeading>Compañía</FooterHeading>
              <VStack align="flex-start" gap={3} fontSize="sm">
                <Link _hover={{ color: 'cyan.400' }} transition="0.2s">Sobre Nosotros</Link>
                <Link _hover={{ color: 'cyan.400' }} transition="0.2s">Proyectos</Link>
                <Link _hover={{ color: 'cyan.400' }} transition="0.2s">Trabaja con Nosotros</Link>
                <Link _hover={{ color: 'cyan.400' }} transition="0.2s">Políticas de Datos</Link>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>

        {/* Bottom bar */}
        <Flex 
          borderTop="1px solid" 
          borderColor="whiteAlpha.100" 
          pt={8} 
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="xs" color="whiteAlpha.400">
            © {currentYear} INACRIL S.A.S. Todos los derechos reservados.
          </Text>
          <HStack gap={6} fontSize="xs" color="whiteAlpha.400">
            <Link _hover={{ color: 'white' }}>Términos</Link>
            <Link _hover={{ color: 'white' }}>Privacidad</Link>
            <Link _hover={{ color: 'white' }}>Cookies</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

const FooterHeading = ({ children }) => (
  <Text 
    color="white" 
    fontSize="xs" 
    fontWeight="bold" 
    letterSpacing="0.2em" 
    textTransform="uppercase"
    mb={2}
  >
    {children}
  </Text>
)

const AddressItem = ({ city, address }) => (
  <Box borderLeft="1px solid" borderColor="cyan.900" pl={4} py={1}>
    <Text color="cyan.400" fontSize="xs" fontWeight="bold" mb={0.5}>{city}</Text>
    <Text color="whiteAlpha.700" fontSize="xs" noOfLines={1}>{address}</Text>
  </Box>
)

const SocialIcon = ({ icon }) => (
  <Link
    w="36px"
    h="36px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    rounded="full"
    bg="whiteAlpha.50"
    color="whiteAlpha.700"
    _hover={{ color: 'cyan.400', bg: 'whiteAlpha.100', transform: 'translateY(-2px)' }}
    transition="all 0.3s"
  >
    <Icon as={icon} w={4} h={4} />
  </Link>
)
