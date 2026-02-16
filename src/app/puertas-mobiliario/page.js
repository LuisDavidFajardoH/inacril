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
    GridItem
} from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Shield, Heart, Award, Clock, CheckCircle, ArrowRight, Flame, Hospital, Volume2, Lock, Zap } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './puertas.css'

const MotionBox = motion.create(Box)
const MotionVStack = motion.create(VStack)

export default function PuertasMobiliario() {
    return (
        <Box bg="white" minH="100vh">
            <Navbar />

            {/* Intro Banner Section */}
            <div className="puertas-intro-banner">
                <div className="puertas-intro-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                    alt="Puertas y Mobiliario Interior"
                    className="puertas-intro-bg"
                />

                <div className="puertas-intro-content">
                    <div className="puertas-intro-label">PUERTAS Y MOBILIARIO INTERIOR</div>
                    <h1 className="puertas-intro-title">
                        Soluciones técnicas que <span className="highlight">protegen vidas</span> y elevan proyectos
                    </h1>
                    <p className="puertas-intro-description">
                        En INACRIL no vendemos puertas genéricas. Entregamos soluciones certificadas con respaldo normativo,
                        materiales de alto nivel y acompañamiento experto de principio a fin.
                    </p>

                    <div className="puertas-intro-features">
                        <div className="puertas-intro-feature">
                            <div className="puertas-intro-feature-icon">
                                <Shield size={28} />
                            </div>
                            <div className="puertas-intro-feature-title">Certificación Internacional</div>
                            <div className="puertas-intro-feature-text">
                                Puertas cortafuego con certificación UL y UNE de 60, 90 y 120 minutos
                            </div>
                        </div>

                        <div className="puertas-intro-feature">
                            <div className="puertas-intro-feature-icon">
                                <Hospital size={28} />
                            </div>
                            <div className="puertas-intro-feature-title">Materiales Técnicos</div>
                            <div className="puertas-intro-feature-text">
                                HPL de alta presión y accesorios TESA para máxima durabilidad
                            </div>
                        </div>

                        <div className="puertas-intro-feature">
                            <div className="puertas-intro-feature-icon">
                                <Award size={28} />
                            </div>
                            <div className="puertas-intro-feature-title">Acompañamiento Total</div>
                            <div className="puertas-intro-feature-text">
                                Desde especificación técnica hasta instalación sin reprocesos
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Purpose Section - White background with image */}
            <Box bg="white" py={{ base: 20, md: 32 }}>
                <Container maxW="8xl" px={8}>
                    <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 12, lg: 20 }} alignItems="center">
                        <VStack align="flex-start" gap={8}>
                            <Text color="cyan.600" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                                NUESTRO PROPÓSITO
                            </Text>
                            <Heading color="gray.900" fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.2">
                                Una puerta no solo divide espacios, <Text as="span" color="cyan.600">protege vidas</Text>
                            </Heading>
                            <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                                En INACRIL creemos que cada puerta debe ser una solución inteligente que respalde la reputación del proyecto y cuide a las personas que lo habitan. Vamos más allá del cumplimiento normativo para entregar seguridad real, bienestar y confianza.
                            </Text>

                            <VStack align="flex-start" gap={4} w="100%" mt={4}>
                                <ValueItem
                                    icon={Shield}
                                    title="Especialización Técnica"
                                    description="Analizamos el uso del espacio y proponemos soluciones con respaldo normativo."
                                />
                                <ValueItem
                                    icon={Award}
                                    title="Calidad Certificada"
                                    description="Puertas certificadas, materiales técnicos HPL y accesorios TESA."
                                />
                                <ValueItem
                                    icon={Heart}
                                    title="Acompañamiento Experto"
                                    description="Te acompañamos desde la especificación hasta la instalación."
                                />
                            </VStack>
                        </VStack>

                        <Box
                            h={{ base: "400px", md: "600px" }}
                            rounded="2xl"
                            overflow="hidden"
                            boxShadow="2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                                alt="Professional workspace"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                    </Grid>
                </Container>
            </Box>

            {/* Products Section - Light gray background */}
            <Box bg="gray.50" py={{ base: 20, md: 32 }}>
                <Container maxW="8xl" px={8}>
                    <VStack gap={4} mb={20} textAlign="center">
                        <Text color="cyan.600" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                            SOLUCIONES ESPECIALIZADAS
                        </Text>
                        <Heading color="gray.900" fontSize={{ base: "4xl", md: "5xl" }}>
                            Nuestros Productos
                        </Heading>
                        <Text color="gray.600" fontSize="lg" maxW="3xl">
                            Soluciones integrales diseñadas para proteger, durar y elevar el estándar de tu proyecto
                        </Text>
                    </VStack>

                    <VStack gap={12}>
                        {/* Puertas Cortafuego */}
                        <ProductCard
                            icon={Flame}
                            title="Puertas Cortafuego Certificadas"
                            subtitle="UL / UNE – 60, 90 y 120 minutos"
                            image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                            features={[
                                "Certificación americana UL y europea UNE",
                                "Resistencias al fuego de 60, 90 y 120 minutos",
                                "Sistema reversible para ambas aperturas",
                                "Medio cerrojo integrado",
                                "Compatibles con herrajes de alta gama"
                            ]}
                            quickWins={[
                                "Aprobación más rápida de especificaciones",
                                "Menos reprocesos por errores de apertura",
                                "120 minutos certificados = más protección",
                                "Reducción de riesgos legales inmediata"
                            ]}
                            color="orange"
                        />

                        {/* Puertas Hospitalarias */}
                        <ProductCard
                            icon={Hospital}
                            title="Puertas Hospitalarias en HPL"
                            subtitle="Resistencia, higiene y durabilidad"
                            image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                            features={[
                                "Fabricadas en HPL (High Pressure Laminate)",
                                "Resistentes a impactos, humedad y químicos",
                                "Diseño apto para entornos clínicos",
                                "Fácil limpieza y mantenimiento",
                                "Personalización en color y acabados"
                            ]}
                            quickWins={[
                                "Instalación inmediata sin ajustes",
                                "Mejora visible en imagen institucional",
                                "Reducción de daños y reparaciones",
                                "Más higiene, menos mantenimiento"
                            ]}
                            color="green"
                        />

                        {/* Puertas Acústicas */}
                        <ProductCard
                            icon={Volume2}
                            title="Puertas Acústicas"
                            subtitle="Próximamente"
                            image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                            features={[
                                "Diseño especializado para aislamiento acústico",
                                "Aplicación en hoteles y residencias premium",
                                "Integración con diseños modernos",
                                "Materiales técnicos de confort sonoro"
                            ]}
                            quickWins={[
                                "Menos quejas por ruido",
                                "Mejores calificaciones en hoteles",
                                "Silencio que se siente",
                                "Mayor percepción de valor"
                            ]}
                            color="purple"
                            comingSoon
                        />
                    </VStack>
                </Container>
            </Box>

            {/* CTA Section - Dark with image background */}
            <div className="puertas-cta">
                <div className="puertas-cta-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
                    alt="Modern building"
                    className="puertas-cta-bg"
                />

                <div className="puertas-cta-content">
                    <h2 className="puertas-cta-title">
                        ¿Listo para especificar tu proyecto con <span className="highlight">total seguridad</span>?
                    </h2>
                    <p className="puertas-cta-text">
                        Solicita una asesoría técnica sin costo y descubre cómo nuestras puertas certificadas pueden proteger vidas, simplificar tu obra y elevar el valor de tu proyecto.
                    </p>
                    <button className="puertas-cta-button">
                        <span>Solicitar Asesoría Técnica Gratuita</span>
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            <Footer />
        </Box>
    )
}

const ValueItem = ({ icon: Icon, title, description }) => (
    <HStack gap={4} align="flex-start" w="100%">
        <Flex
            w="40px"
            h="40px"
            bg="cyan.50"
            rounded="lg"
            align="center"
            justify="center"
            flexShrink={0}
        >
            <Icon size={20} color="#0891b2" />
        </Flex>
        <VStack align="flex-start" gap={1}>
            <Text color="gray.900" fontSize="md" fontWeight="bold">{title}</Text>
            <Text color="gray.600" fontSize="sm">{description}</Text>
        </VStack>
    </HStack>
)

const ProductCard = ({ icon: Icon, title, subtitle, image, features, quickWins, color, comingSoon }) => {
    const colorScheme = {
        orange: { bg: 'orange.50', icon: 'orange.600', accent: 'orange.500', badge: 'orange.500' },
        green: { bg: 'green.50', icon: 'green.600', accent: 'green.500', badge: 'green.500' },
        purple: { bg: 'purple.50', icon: 'purple.600', accent: 'purple.500', badge: 'purple.500' }
    }[color]

    return (
        <Grid
            templateColumns={{ base: "1fr", lg: "5fr 7fr" }}
            gap={0}
            w="100%"
            bg="white"
            rounded="2xl"
            overflow="hidden"
            boxShadow="xl"
            position="relative"
        >
            {comingSoon && (
                <Box
                    position="absolute"
                    top={6}
                    right={6}
                    bg={colorScheme.badge}
                    color="white"
                    px={4}
                    py={2}
                    rounded="full"
                    fontSize="xs"
                    fontWeight="bold"
                    zIndex="10"
                >
                    PRÓXIMAMENTE
                </Box>
            )}

            {/* Image Side */}
            <Box
                h={{ base: "300px", lg: "100%" }}
                minH={{ lg: "500px" }}
                position="relative"
                overflow="hidden"
            >
                <Image
                    src={image}
                    alt={title}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    p={8}
                    bgGradient={`linear(to-t, ${colorScheme.accent}, transparent)`}
                >
                    <Flex
                        w="60px"
                        h="60px"
                        bg="white"
                        rounded="full"
                        align="center"
                        justify="center"
                        boxShadow="lg"
                    >
                        <Icon size={32} color={colorScheme.icon} />
                    </Flex>
                </Box>
            </Box>

            {/* Content Side */}
            <VStack align="flex-start" gap={8} p={{ base: 8, md: 12 }}>
                <VStack align="flex-start" gap={2}>
                    <Heading color="gray.900" fontSize={{ base: "2xl", md: "3xl" }}>{title}</Heading>
                    <Text color={colorScheme.accent} fontSize="md" fontWeight="bold">{subtitle}</Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="100%">
                    <VStack align="flex-start" gap={3}>
                        <Text color="gray.500" fontSize="xs" fontWeight="bold" letterSpacing="wider" textTransform="uppercase">
                            Características
                        </Text>
                        {features.map((feature, i) => (
                            <HStack key={i} gap={2} align="flex-start">
                                <CheckCircle size={16} color={colorScheme.icon} style={{ marginTop: '2px', flexShrink: 0 }} />
                                <Text color="gray.700" fontSize="sm">{feature}</Text>
                            </HStack>
                        ))}
                    </VStack>

                    <VStack align="flex-start" gap={3}>
                        <Text color={colorScheme.accent} fontSize="xs" fontWeight="bold" letterSpacing="wider" textTransform="uppercase">
                            Resultados Rápidos
                        </Text>
                        {quickWins.map((win, i) => (
                            <HStack key={i} gap={2} align="flex-start">
                                <Zap size={16} color={colorScheme.icon} style={{ marginTop: '2px', flexShrink: 0 }} />
                                <Text color="gray.900" fontSize="sm" fontWeight="500">{win}</Text>
                            </HStack>
                        ))}
                    </VStack>
                </SimpleGrid>
            </VStack>
        </Grid>
    )
}
