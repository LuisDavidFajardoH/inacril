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
import {
    Shield,
    Flame,
    CheckCircle,
    Award,
    Users,
    Lightbulb,
    Zap,
    Heart,
    Handshake,
    Smile,
    Hammer,
    ArrowRight,
    Briefcase,
    Volume2,
    Hospital
} from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './cf.css'

const MotionBox = motion.create(Box)
const MotionVStack = motion.create(VStack)

export default function PuertasCF() {
    return (
        <Box bg="white" minH="100vh">
            <Navbar />

            {/* 1. HERO BANNER */}
            <div className="cf-intro-banner">
                <div className="cf-intro-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
                    alt="Puerta Cortafuego Roja Certificada"
                    className="cf-intro-bg"
                />

                <div className="cf-intro-content">
                    <h1 className="cf-intro-title">
                        Más que una puerta, una barrera que <span className="highlight">salva vidas</span>
                    </h1>
                    <p className="cf-intro-description">
                        En INACRIL creemos que una puerta no solo divide espacios, protege vidas y eleva la calidad de los proyectos. Brindamos seguridad real, bienestar y confianza en cada edificación.
                    </p>

                    <div className="cf-intro-features">
                        <div className="cf-intro-feature">
                            <div className="cf-intro-feature-icon">
                                <Shield size={28} />
                            </div>
                            <div className="cf-intro-feature-title">Seguridad Real</div>
                            <div className="cf-intro-feature-text">
                                Soluciones que cumplen y superan la normativa.
                            </div>
                        </div>

                        <div className="cf-intro-feature">
                            <div className="cf-intro-feature-icon">
                                <Award size={28} />
                            </div>
                            <div className="cf-intro-feature-title">Calidad Certificada</div>
                            <div className="cf-intro-feature-text">
                                Certificaciones internacionales UL y UNE.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. PURPOSE / WHY */}
            <Box bg="white" py={{ base: 20, md: 24 }}>
                <Container maxW="8xl" px={8}>
                    <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 12, lg: 20 }} alignItems="center">
                        <VStack align="flex-start" gap={8}>
                            <Text color="cyan.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                                NUESTRO PROPÓSITO
                            </Text>
                            <Heading color="gray.900" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.2">
                                Seguridad real que respalda <Text as="span" color="cyan.500">tu reputación</Text>
                            </Heading>
                            <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                                Existimos para brindar seguridad, bienestar y confianza, ayudando a constructores y arquitectos a tomar decisiones que impactan positivamente la seguridad, la experiencia y el valor del inmueble.
                                <br /><br />
                                Nuestro propósito es ir más allá del cumplimiento normativo: queremos que cada puerta sea una solución inteligente que cuide a las personas que lo habitan.
                            </Text>

                            <Box borderLeft="4px solid #06b6d4" pl={6} py={2}>
                                <Text fontStyle="italic" color="gray.700" fontSize="xl" fontWeight="medium">
                                    "Diseñar y suministrar soluciones que protejan vidas y eleven el valor de los proyectos."
                                </Text>
                            </Box>
                        </VStack>

                        <Box
                            position="relative"
                            h={{ base: "400px", md: "500px" }}
                            rounded="2xl"
                            overflow="hidden"
                            boxShadow="2xl"
                        >
                            <Image
                                src="/cf/_1H verde  manilla negra ANTIBACTERIAL.jpg"
                                alt="Puerta Antibacterial"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                    </Grid>
                </Container>
            </Box>

            {/* 3. METHODOLOGY / HOW */}
            <Box bg="gray.50" py={{ base: 20, md: 24 }}>
                <Container maxW="8xl" px={8}>
                    <VStack gap={4} textAlign="center" mb={12}>
                        <Text color="cyan.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                            ¿CÓMO LO HACEMOS?
                        </Text>
                        <Heading color="gray.900" fontSize={{ base: "3xl", md: "4xl" }}>
                            Tres pilares fundamentales
                        </Heading>
                    </VStack>

                    <div className="cf-how-grid">
                        <PillarCard
                            icon={Briefcase}
                            title="Especialización Técnica"
                            description="No vendemos puertas genéricas. Analizamos el uso del espacio y proponemos soluciones especializadas con respaldo normativo."
                        />
                        <PillarCard
                            icon={Award}
                            title="Calidad Certificada"
                            description="Trabajamos con puertas cortafuego certificadas, materiales técnicos como HPL y accesorios de alta gama TESA."
                        />
                        <PillarCard
                            icon={Users}
                            title="Acompañamiento Experto"
                            description="Te acompañamos desde la especificación hasta la instalación, asegurando que cada puerta cumpla su función y minimice riesgos."
                        />
                    </div>
                </Container>
            </Box>

            {/* 4. PRODUCTS & SOLUTIONS */}
            <Box bg="white" py={{ base: 20, md: 32 }}>
                <Container maxW="8xl" px={8}>
                    <VStack gap={4} mb={20} textAlign="center">
                        <Text color="cyan.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                            NUESTRAS SOLUCIONES
                        </Text>
                        <Heading color="gray.900" fontSize={{ base: "4xl", md: "5xl" }}>
                            Tecnología que protege y perdura
                        </Heading>
                    </VStack>

                    <VStack gap={24}>
                        {/* PRODUCT 1: CORTAFUEGO */}
                        <ProductSection
                            category="SEGURIDAD CONTRA INCENDIOS"
                            title="Puertas Cortafuego Certificadas"
                            subtitle="UL / UNE – 60, 90 y 120 minutos"
                            description="Diseñadas para proteger vidas y cumplir normativas exigentes. Un sistema reversible que simplifica la obra y garantiza seguridad certificada."
                            image="/cf/_2H-mirilla-antipac_verde-ralblanco.jpg"
                            features={[
                                "Certificación americana UL y europea UNE",
                                "Resistencia al fuego de 60, 90 y 120 minutos",
                                "Sistema reversible (una sola hoja sirve para apertura derecha/izq)",
                                "Medio cerrojo integrado",
                                "Compatibles con herrajes de alta gama"
                            ]}
                            advantages={[
                                "Doble certificación = máxima aceptación",
                                "Reversibilidad reduce errores y optimiza inventarios",
                                "120 min de resistencia = diferencial real",
                                "Aprobación rápida por bomberos e interventorías"
                            ]}
                            quickWins={[
                                "Aprobación rápida de especificaciones",
                                "Menos reprocesos en obra",
                                "Argumento de venta: Más protección",
                                "Reducción de riesgos legales"
                            ]}
                            color="orange"
                            align="left"
                        />

                        {/* PRODUCT 2: HOSPITALARIAS */}
                        <ProductSection
                            category="SALUD E HIGIENE"
                            title="Puertas Hospitalarias en HPL"
                            subtitle="Resistencia, higiene y durabilidad"
                            description="Ideales para entornos clínicos y hospitalarios. Su superficie en HPL resiste impactos, humedad y agentes químicos, facilitando la limpieza."
                            image="/cf/_1H-mirilla_antipa inox-azul.jpg"
                            features={[
                                "Fabricadas en HPL (High Pressure Laminate)",
                                "Resistentes a impactos, humedad y químicos",
                                "Diseño apto para entornos clínicos (bacteriostático)",
                                "Fácil limpieza y mantenimiento",
                                "Personalización en color y acabados"
                            ]}
                            advantages={[
                                "Cumplen estándares de control de infecciones",
                                "Mayor durabilidad que puertas convencionales",
                                "Menores costos de mantenimiento",
                                "Mejor percepción de calidad para pacientes"
                            ]}
                            quickWins={[
                                "Instalación inmediata sin ajustes",
                                "Mejora imagen institucional",
                                "Reducción de daños y reparaciones",
                                "Argumento: Más higiene, menos mantenimiento"
                            ]}
                            color="green"
                            align="right"
                        />

                        {/* PRODUCT 3: ACUSTICAS */}
                        <ProductSection
                            category="CONFORT"
                            title="Puertas Acústicas"
                            subtitle="Próximamente"
                            description="Diseño especializado para hoteles, oficinas y residencias premium. Silencio que se siente y eleva la experiencia del usuario."
                            image="/cf/fichas_puerta_registro.jpg"
                            features={[
                                "Diseño especializado para aislamiento acústico",
                                "Aplicación en hoteles y residencias premium",
                                "Integración con diseños modernos",
                                "Materiales técnicos de confort sonoro"
                            ]}
                            advantages={[
                                "Incrementan confort y privacidad",
                                "Elevan la categoría del proyecto (Premium)",
                                "Diferencian frente a la competencia",
                                "Mejoran experiencia del huésped"
                            ]}
                            quickWins={[
                                "Menos quejas por ruido",
                                "Mejores calificaciones en hoteles",
                                "Silencio que se siente (argumento comercial)",
                                "Mayor percepción de valor"
                            ]}
                            color="purple"
                            align="left"
                            comingSoon
                        />
                    </VStack>
                </Container>
            </Box>

            {/* 5. VALUES / CULTURE */}
            <Box bg="#0f172a" py={{ base: 20, md: 24 }} color="white">
                <Container maxW="8xl" px={8}>
                    <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={16}>
                        <VStack align="flex-start" gap={6}>
                            <Text color="cyan.400" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                                CULTURA DE MARCA
                            </Text>
                            <Heading fontSize="4xl" fontWeight="bold">
                                Valores Fundamentales
                            </Heading>
                            <Text color="gray.400" fontSize="lg">
                                Actuamos con integridad, claridad y coherencia. No solo entregamos puertas, construimos relaciones de confianza a largo plazo.
                            </Text>
                        </VStack>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                            <ValueCard title="Calidad y Cumplimiento" text="Hacemos las cosas bien desde la primera vez. Garantizamos ejecuciones confiables." icon={CheckCircle} />
                            <ValueCard title="Compromiso con el Cliente" text="Asumimos cada proyecto como propio. Somos tu aliado técnico responsable." icon={Handshake} />
                            <ValueCard title="Innovación Aplicada" text="Materiales y soluciones que generan eficiencia real y valor en obra." icon={Lightbulb} />
                            <ValueCard title="Ética y Transparencia" text="Claridad en todas nuestras relaciones comerciales y humanas." icon={Shield} />
                        </SimpleGrid>
                    </Grid>
                </Container>
            </Box>

            {/* 6. PERSONALITY */}
            <Box bg="white" py={{ base: 20, md: 24 }}>
                <Container maxW="8xl" px={8}>
                    <VStack gap={12} textAlign="center">
                        <VStack gap={4}>
                            <Text color="cyan.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                                PERSONALIDAD DE MARCA
                            </Text>
                            <Heading color="gray.900" fontSize="4xl">
                                ¿Quién es INACRIL?
                            </Heading>
                        </VStack>

                        <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} gap={8} w="100%">
                            <PersonalityCard icon={Smile} title="Sinceridad" text="Honesta, confiable, responsable." />
                            <PersonalityCard icon={Zap} title="Emoción" text="Innovadora, moderna, proactiva." />
                            <PersonalityCard icon={Briefcase} title="Competencia" text="Experta, técnica, eficiente." />
                            <PersonalityCard icon={Award} title="Sofisticación" text="Elegante, premium, detallista." />
                            <PersonalityCard icon={Hammer} title="Robustez" text="Fuerte, resistente, sólida." />
                        </SimpleGrid>
                    </VStack>
                </Container>
            </Box>

            {/* 7. CTA */}
            <div className="cf-cta">
                <div className="cf-cta-overlay"></div>
                <img
                    src="/cf/PUERTAS CORTA FUEGO.png"
                    alt="CTA Background"
                    className="cf-cta-bg"
                />

                <div className="cf-cta-content">
                    <h2 className="cf-cta-title">
                        ¿Listo para especificar tu proyecto con <span className="highlight">total seguridad</span>?
                    </h2>
                    <p className="cf-cta-text">
                        Solicita una asesoría técnica sin costo y descubre cómo nuestras puertas certificadas pueden proteger vidas, simplificar tu obra y elevar el valor de tu proyecto.
                    </p>
                    <HStack justify="center" gap={4}>
                        <button className="cf-cta-button">
                            <span>Solicitar Asesoría Técnica</span>
                            <ArrowRight size={20} />
                        </button>
                    </HStack>
                </div>
            </div>

            <Footer />
        </Box>
    )
}

// --- SUBCOMPONENTS ---

const PillarCard = ({ icon: Icon, title, description }) => (
    <VStack
        bg="white"
        p={8}
        rounded="xl"
        // Use shadow-lg equivalent or class
        boxShadow="lg"
        align="flex-start"
        gap={4}
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
        borderTop="4px solid #06b6d4"
    >
        <Box p={3} bg="cyan.50" rounded="lg" color="cyan.600">
            <Icon size={24} />
        </Box>
        <Heading size="md" color="gray.900">{title}</Heading>
        <Text color="gray.600" fontSize="sm" lineHeight="relaxed">{description}</Text>
    </VStack>
)

const ValueCard = ({ title, text, icon: Icon }) => (
    <HStack align="flex-start" gap={4}>
        <Box color="cyan.400" mt={1}>
            <Icon size={24} />
        </Box>
        <Box>
            <Heading size="sm" color="white" mb={2}>{title}</Heading>
            <Text color="gray.400" fontSize="sm">{text}</Text>
        </Box>
    </HStack>
)

const PersonalityCard = ({ icon: Icon, title, text }) => (
    <VStack
        bg="gray.50"
        p={6}
        rounded="xl"
        gap={4}
        transition="all 0.2s"
        _hover={{ bg: "white", boxShadow: "md" }}
    >
        <Box p={3} bg="white" rounded="full" color="cyan.500" boxShadow="sm">
            <Icon size={24} />
        </Box>
        <VStack gap={1}>
            <Heading size="sm" color="gray.900">{title}</Heading>
            <Text fontSize="xs" color="gray.500">{text}</Text>
        </VStack>
    </VStack>
)

const ProductSection = ({ title, subtitle, description, image, features, advantages, quickWins, color, align, category, comingSoon }) => {
    const isRight = align === 'right';
    const colorMap = {
        orange: { main: 'orange.500', light: 'orange.50', text: 'orange.600' },
        green: { main: 'green.500', light: 'green.50', text: 'green.600' },
        purple: { main: 'purple.500', light: 'purple.50', text: 'purple.600' }
    }
    const theme = colorMap[color] || colorMap.orange;

    return (
        <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 12, lg: 20 }}
            alignItems="center"
        >
            {/* Image Side */}
            <Box order={{ base: 2, lg: isRight ? 2 : 1 }} position="relative">
                <Box
                    h="600px" // Taller image for better presence
                    rounded="2xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    position="relative"
                >
                    <Image src={image} alt={title} objectFit="cover" w="100%" h="100%" />
                    {/* Badge Overlay */}
                    <Box
                        position="absolute"
                        top={6}
                        left={6}
                        bg="rgba(255,255,255,0.95)"
                        px={4}
                        py={2}
                        rounded="full"
                    >
                        <Text fontSize="xs" fontWeight="bold" letterSpacing="wider" color="gray.900">
                            {category}
                        </Text>
                    </Box>
                    {comingSoon && (
                        <Box
                            position="absolute"
                            top={6}
                            right={6}
                            bg="purple.600"
                            px={4}
                            py={2}
                            rounded="full"
                        >
                            <Text fontSize="xs" fontWeight="bold" letterSpacing="wider" color="white">
                                PRÓXIMAMENTE
                            </Text>
                        </Box>
                    )}
                </Box>
                {/* Decorative BG Element */}
                <Box
                    position="absolute"
                    top="-20px"
                    bottom="-20px"
                    left={isRight ? "20px" : "-20px"}
                    right={isRight ? "-20px" : "20px"}
                    bg={theme.light}
                    zIndex="-1"
                    rounded="3xl"
                />
            </Box>

            {/* Content Side */}
            <VStack
                align="flex-start"
                gap={8}
                order={{ base: 1, lg: isRight ? 1 : 2 }}
            >
                <Box>
                    <Text color={theme.text} fontWeight="bold" mb={2} letterSpacing="wider" fontSize="sm">
                        {subtitle}
                    </Text>
                    <Heading color="gray.900" size="2xl" mb={4} lineHeight="1.1">
                        {title}
                    </Heading>
                    <Text color="gray.600" fontSize="lg">
                        {description}
                    </Text>
                </Box>

                <VStack align="flex-start" gap={8} w="100%">
                    {/* Features */}
                    <Box w="100%">
                        <Heading size="xs" textTransform="uppercase" letterSpacing="widest" mb={4} color="gray.400">
                            Características
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={3}>
                            {features.map((f, i) => (
                                <HStack key={i} align="flex-start">
                                    <CheckCircle size={16} color="var(--chakra-colors-gray-400)" style={{ marginTop: '4px' }} />
                                    <Text fontSize="sm" color="gray.700">{f}</Text>
                                </HStack>
                            ))}
                        </SimpleGrid>
                    </Box>

                    {/* Advantages (New Section requested) */}
                    {advantages && (
                        <Box w="100%">
                            <Heading size="xs" textTransform="uppercase" letterSpacing="widest" mb={4} color={theme.text}>
                                Ventajas
                            </Heading>
                            <VStack align="flex-start" gap={3}>
                                {advantages.map((a, i) => (
                                    <HStack key={i} align="flex-start">
                                        <Award size={16} color={`var(--chakra-colors-${color}-500)`} style={{ marginTop: '4px' }} />
                                        <Text fontSize="sm" color="gray.700">{a}</Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </Box>
                    )}

                    {/* Quick Wins */}
                    <Box w="100%" p={6} bg={theme.light} rounded="xl">
                        <Heading size="xs" textTransform="uppercase" letterSpacing="widest" mb={4} color={theme.text}>
                            Quick Wins (Resultados)
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                            {quickWins.map((w, i) => (
                                <HStack key={i} align="flex-start">
                                    <Zap size={16} color={`var(--chakra-colors-${color}-600)`} style={{ marginTop: '4px' }} />
                                    <Text fontSize="sm" color="gray.800" fontWeight="500">{w}</Text>
                                </HStack>
                            ))}
                        </SimpleGrid>
                    </Box>
                </VStack>
            </VStack>
        </Grid>
    )
}
