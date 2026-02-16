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
    Grid
} from '@chakra-ui/react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Building2, Layers, Sparkles, CheckCircle, ArrowRight, Zap, Shield, Award, Sun, Lightbulb, Armchair } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './fachadas.css'

const MotionBox = motion.create(Box)

export default function FachadasExteriores() {
    return (
        <Box bg="white" minH="100vh">
            <Navbar />

            {/* Intro Banner Section */}
            <div className="fachadas-intro-banner">
                <div className="fachadas-intro-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
                    alt="Fachadas y Exteriores"
                    className="fachadas-intro-bg"
                />

                <div className="fachadas-intro-content">
                    <div className="fachadas-intro-label">FACHADAS Y EXTERIORES</div>
                    <h1 className="fachadas-intro-title">
                        Convertimos diseños en <span className="highlight">fachadas reales</span> que perduran
                    </h1>
                    <p className="fachadas-intro-description">
                        Ejecutamos y suministramos soluciones en fachadas y mobiliario urbano con materiales de alto desempeño,
                        asegurando una correcta materialización de tus diseños mediante procesos técnicos confiables y resultados durables.
                    </p>

                    <div className="fachadas-intro-features">
                        <div className="fachadas-intro-feature">
                            <div className="fachadas-intro-feature-icon">
                                <Shield size={28} />
                            </div>
                            <div className="fachadas-intro-feature-title">Calidad y Cumplimiento</div>
                            <div className="fachadas-intro-feature-text">
                                Hacemos las cosas bien desde la primera vez, cumpliendo tiempos y especificaciones técnicas
                            </div>
                        </div>

                        <div className="fachadas-intro-feature">
                            <div className="fachadas-intro-feature-icon">
                                <Award size={28} />
                            </div>
                            <div className="fachadas-intro-feature-title">Materiales Premium</div>
                            <div className="fachadas-intro-feature-text">
                                HPL, aluminio compuesto y policarbonato de primer nivel con garantía extendida
                            </div>
                        </div>

                        <div className="fachadas-intro-feature">
                            <div className="fachadas-intro-feature-icon">
                                <Sparkles size={28} />
                            </div>
                            <div className="fachadas-intro-feature-title">Ejecución Técnica</div>
                            <div className="fachadas-intro-feature-text">
                                Procesos claros y control de calidad riguroso que minimizan reprocesos
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Purpose Section */}
            <Box bg="white" py={{ base: 20, md: 32 }}>
                <Container maxW="8xl" px={8}>
                    <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 12, lg: 20 }} alignItems="center">
                        <VStack align="flex-start" gap={8}>
                            <Text color="blue.600" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                                NUESTRO PROPÓSITO
                            </Text>
                            <Heading color="gray.900" fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1.2">
                                Una buena idea merece ser <Text as="span" color="blue.600">construida con calidad</Text>
                            </Heading>
                            <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                                Existimos para convertir los diseños de nuestros clientes en soluciones reales, confiables y de alto impacto.
                                Trabajamos con excelencia técnica, materiales de primer nivel y procesos claros que garantizan que cada proyecto
                                se materialice tal como fue concebido y perdure en el tiempo.
                            </Text>

                            <VStack align="flex-start" gap={4} w="100%" mt={4}>
                                <ValueItem
                                    icon={Building2}
                                    title="Ejecución con Excelencia"
                                    description="Respetamos el diseño, optimizamos materiales y garantizamos resistencia y funcionalidad."
                                />
                                <ValueItem
                                    icon={Layers}
                                    title="Acompañamiento Total"
                                    description="Te acompañamos desde la especificación hasta la instalación, sin improvisaciones."
                                />
                                <ValueItem
                                    icon={CheckCircle}
                                    title="Resultados Durables"
                                    description="Soluciones listas para ejecutar en obra, respaldadas por materiales confiables."
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
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                                alt="Modern facade"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                    </Grid>
                </Container>
            </Box>

            {/* Products Section */}
            <Box bg="gray.50" py={{ base: 20, md: 32 }}>
                <Container maxW="8xl" px={8}>
                    <VStack gap={4} mb={20} textAlign="center">
                        <Text color="blue.600" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                            SOLUCIONES ESPECIALIZADAS
                        </Text>
                        <Heading color="gray.900" fontSize={{ base: "4xl", md: "5xl" }}>
                            Nuestros Productos y Servicios
                        </Heading>
                        <Text color="gray.600" fontSize="lg" maxW="3xl">
                            Suministro e instalación de fachadas arquitectónicas y mobiliario urbano que elevan el estándar del sector
                        </Text>
                    </VStack>

                    <VStack gap={12}>
                        {/* Fachadas HPL */}
                        <ProductCard
                            icon={Layers}
                            title="Fachadas en HPL – Sistema de Fachada Ventilada"
                            subtitle="Alta eficiencia térmica y estética superior"
                            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                            features={[
                                "Sistema de fachada ventilada con paneles fenólicos HPL",
                                "Cámara de aire que permite circulación natural",
                                "Alta resistencia a UV, humedad e impactos",
                                "Amplia variedad de colores y acabados",
                                "Fijación mecánica sobre subestructura"
                            ]}
                            advantages={[
                                "Mejor desempeño térmico del edificio",
                                "Protección del cerramiento principal",
                                "Mayor durabilidad de la estructura",
                                "Sistema sostenible y eficiente",
                                "Fácil mantenimiento por módulos"
                            ]}
                            quickWins={[
                                "Reducción inmediata de temperatura interior",
                                "Ahorro energético en climatización desde el día 1",
                                "Confort térmico y acústico instantáneo",
                                "Incremento del valor del inmueble"
                            ]}
                            color="blue"
                        />

                        {/* Fachadas ACM */}
                        <ProductCard
                            icon={Building2}
                            title="Fachadas en Aluminio Compuesto (ACM)"
                            subtitle="Rapidez y precisión estética"
                            image="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&q=80"
                            features={[
                                "Paneles de aluminio compuesto arquitectónicos",
                                "Superficie lisa con acabados metálicos o sólidos",
                                "Sistemas de anclaje adaptables",
                                "Material liviano de rápida instalación"
                            ]}
                            advantages={[
                                "Rapidez de montaje vs sistemas tradicionales",
                                "Alta precisión estética corporativa",
                                "Facilidad de reemplazo por módulos",
                                "Optimización de tiempos en obra"
                            ]}
                            quickWins={[
                                "Instalación rápida con impacto en cronograma",
                                "Fachada moderna desde la entrega",
                                "Menor carga estructural en obra"
                            ]}
                            color="gray"
                        />

                        {/* Fachadas Policarbonato */}
                        <ProductCard
                            icon={Sun}
                            title="Fachadas en Policarbonato"
                            subtitle="Iluminación natural y resistencia"
                            image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
                            features={[
                                "Paneles de policarbonato alveolar o macizo",
                                "Alta transmisión de luz con protección UV",
                                "Ligereza y flexibilidad estructural",
                                "Apto para cerramientos y cubiertas verticales"
                            ]}
                            advantages={[
                                "Ahorro energético por luz natural",
                                "Mayor resistencia al impacto que vidrio",
                                "Instalación segura y versátil",
                                "Solución funcional industrial y comercial"
                            ]}
                            quickWins={[
                                "Iluminación natural inmediata",
                                "Sensación de amplitud desde el día 1",
                                "Menor riesgo de rotura"
                            ]}
                            color="yellow"
                        />

                        {/* Fachadas LED */}
                        <ProductCard
                            icon={Lightbulb}
                            title="Fachadas con Iluminación Arquitectónica"
                            subtitle="Impacto visual nocturno"
                            image="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80"
                            features={[
                                "Integración de sistemas LED en fachadas",
                                "Iluminación funcional, decorativa o corporativa",
                                "Tecnología LED de bajo consumo",
                                "Instalación coordinada con sistema de fachada"
                            ]}
                            advantages={[
                                "Mayor visibilidad y diferenciación nocturna",
                                "Eficiencia energética comprobada",
                                "Integración técnica sin afectar fachada",
                                "Aumento del valor percibido"
                            ]}
                            quickWins={[
                                "Impacto visual inmediato en horario nocturno",
                                "Mayor presencia de marca",
                                "Mejora instantánea en seguridad"
                            ]}
                            color="purple"
                        />

                        {/* Mobiliario Urbano */}
                        <ProductCard
                            icon={Armchair}
                            title="Mobiliario Urbano en HPL"
                            subtitle="Espacios exteriores que invitan a disfrutar"
                            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                            features={[
                                "Bancas, mesas y elementos de descanso en HPL",
                                "Alta resistencia a intemperie y vandalismo",
                                "Fácil limpieza y mantenimiento",
                                "Diseño funcional para espacios públicos"
                            ]}
                            advantages={[
                                "Mayor vida útil vs madera tradicional",
                                "Bajo mantenimiento y alta resistencia",
                                "Integración armónica con exteriores",
                                "Ideal para proyectos urbanos y comerciales"
                            ]}
                            quickWins={[
                                "Espacios funcionales desde la entrega",
                                "Reducción inmediata de costos de mantenimiento",
                                "Mejor experiencia del usuario final"
                            ]}
                            color="green"
                        />
                    </VStack>
                </Container>
            </Box>

            {/* CTA Section */}
            <div className="fachadas-cta">
                <div className="fachadas-cta-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80"
                    alt="Modern facade"
                    className="fachadas-cta-bg"
                />

                <div className="fachadas-cta-content">
                    <h2 className="fachadas-cta-title">
                        ¿Listo para materializar tu proyecto con <span className="highlight">calidad y precisión</span>?
                    </h2>
                    <p className="fachadas-cta-text">
                        Solicita una asesoría técnica sin costo y descubre cómo convertimos tu diseño en una fachada real,
                        confiable y duradera que reduce riesgos y eleva el estándar de tu proyecto.
                    </p>
                    <button className="fachadas-cta-button">
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
            bg="blue.50"
            rounded="lg"
            align="center"
            justify="center"
            flexShrink={0}
        >
            <Icon size={20} color="#4299e1" />
        </Flex>
        <VStack align="flex-start" gap={1}>
            <Text color="gray.900" fontSize="md" fontWeight="bold">{title}</Text>
            <Text color="gray.600" fontSize="sm">{description}</Text>
        </VStack>
    </HStack>
)

const ProductCard = ({ icon: Icon, title, subtitle, image, features, advantages, quickWins, color }) => {
    const colorScheme = {
        blue: { bg: 'blue.50', icon: 'blue.600', accent: 'blue.500', badge: 'blue.500' },
        gray: { bg: 'gray.50', icon: 'gray.600', accent: 'gray.500', badge: 'gray.500' },
        yellow: { bg: 'yellow.50', icon: 'yellow.600', accent: 'yellow.500', badge: 'yellow.500' },
        purple: { bg: 'purple.50', icon: 'purple.600', accent: 'purple.500', badge: 'purple.500' },
        green: { bg: 'green.50', icon: 'green.600', accent: 'green.500', badge: 'green.500' }
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

                <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="100%">
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
                        <Text color="gray.500" fontSize="xs" fontWeight="bold" letterSpacing="wider" textTransform="uppercase">
                            Ventajas
                        </Text>
                        {advantages.map((adv, i) => (
                            <HStack key={i} gap={2} align="flex-start">
                                <Award size={16} color={colorScheme.icon} style={{ marginTop: '2px', flexShrink: 0 }} />
                                <Text color="gray.700" fontSize="sm">{adv}</Text>
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
