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
import {
    Flame,
    Shield,
    Wind,
    CheckCircle,
    Award,
    Zap,
    Lightbulb,
    Smile,
    ArrowRight,
    Briefcase,
    Hammer,
    Settings,
    Thermometer
} from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './shuts.css'

export default function ShutsCF() {
    return (
        <Box bg="white" minH="100vh">
            <Navbar />

            {/* 1. HERO BANNER */}
            <div className="shuts-intro-banner">
                <div className="shuts-intro-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
                    alt="Edificio Corporativo - Shuts Certificados"
                    className="shuts-intro-bg"
                />

                <div className="shuts-intro-content">
                    <h1 className="shuts-intro-title">
                        Seguridad vertical que <span className="highlight">protege tu edificio</span>
                    </h1>
                    <p className="shuts-intro-description">
                        Tapas para ductos de basura y lino (Shuts) con certificación cortafuego. Evita la propagación de incendios y malos olores con tecnología hermética certificada.
                    </p>

                    <div className="shuts-intro-features">
                        <div className="shuts-intro-feature">
                            <div className="shuts-intro-feature-icon">
                                <Flame size={28} />
                            </div>
                            <div className="shuts-intro-feature-title">Certificación Cortafuego</div>
                            <div className="shuts-intro-feature-text">
                                Resistencia de 1.5 y 2 horas bajo norma NSR-10 y NFPA.
                            </div>
                        </div>

                        <div className="shuts-intro-feature">
                            <div className="shuts-intro-feature-icon">
                                <Wind size={28} />
                            </div>
                            <div className="shuts-intro-feature-title">Cierre Hermético</div>
                            <div className="shuts-intro-feature-text">
                                Bloqueo total de humos y gases tóxicos en caso de emergencia.
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
                            <Text color="orange.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                                NUESTRO PROPÓSITO
                            </Text>
                            <Heading color="gray.900" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.2">
                                Evitar el "efecto chimenea" es <Text as="span" color="orange.500">cuestión de vida o muerte</Text>
                            </Heading>
                            <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                                Los ductos de basura son, estadísticamente, una de las vías más rápidas para la propagación del fuego y humo en edificios altos. Una tapa de shut convencional no protege; nuestras tapas certificadas sí.
                                <br /><br />
                                Diseñamos sistemas de admisión que no solo facilitan la operación diaria de aseo, sino que actúan como barreras pasivas que salvan vidas en momentos críticos.
                            </Text>

                            <Box borderLeft="4px solid #dd6b20" pl={6} py={2}>
                                <Text fontStyle="italic" color="gray.700" fontSize="xl" fontWeight="medium">
                                    "Cumplimiento total de la norma NSR-10 para ductos y puertas cortafuego."
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
                                src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?w=800&q=80"
                                alt="Seguridad Industrial"
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
                        <Text color="orange.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                            ¿CÓMO LO HACEMOS?
                        </Text>
                        <Heading color="gray.900" fontSize={{ base: "3xl", md: "4xl" }}>
                            Tecnología aplicada a la seguridad
                        </Heading>
                    </VStack>

                    <div className="shuts-how-grid">
                        <PillarCard
                            icon={Shield}
                            title="Acero Inoxidable y Galvanizado"
                            description="Fabricación en materiales resistentes a la corrosión y altas temperaturas. Acabados estéticos que se integran al diseño."
                        />
                        <PillarCard
                            icon={Settings}
                            title="Mecanismos de Cierre Automático"
                            description="Nuestras tapas cuentan con cierre automático (cierra-puertas hidráulico o resorte) para asegurar que el ducto permanezca sellado."
                        />
                        <PillarCard
                            icon={Thermometer}
                            title="Aislamiento Térmico"
                            description="Relleno de lana mineral de roca o panel de yeso especial para retardar la transferencia de calor."
                        />
                    </div>
                </Container>
            </Box>

            {/* 4. PRODUCTS & SOLUTIONS */}
            <Box bg="white" py={{ base: 20, md: 32 }}>
                <Container maxW="8xl" px={8}>
                    <VStack gap={4} mb={20} textAlign="center">
                        <Text color="orange.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                            NUESTRAS SOLUCIONES
                        </Text>
                        <Heading color="gray.900" fontSize={{ base: "4xl", md: "5xl" }}>
                            Sistemas de admisión certificados
                        </Heading>
                    </VStack>

                    <VStack gap={24}>
                        {/* PRODUCT 1: Tapa Shut Basura */}
                        <ProductSection
                            category="RESIDENCIAL Y COMERCIAL"
                            title="Tapa de Shut de Basuras CF"
                            subtitle="Certificación 60, 90 y 120 minutos"
                            description="La solución estándar para edificios de vivienda y oficinas. Diseñada para soportar uso rudo diario mientras mantiene su integridad cortafuego."
                            image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                            features={[
                                "Apertura inferior tipo tolva (Bottom Hinged)",
                                "Empaques intumescentes (se expanden con calor)",
                                "Acabado en Acero Inoxidable Satinado o Pintura Electrostática",
                                "Cierre automático obligatorio"
                            ]}
                            advantages={[
                                "Evita fugas de olores hacia los pasillos",
                                "Impide el paso de humo al punto fijo",
                                "Fácil limpieza y mantenimiento",
                                "Cumple requisitos de aseguradoras"
                            ]}
                            quickWins={[
                                "Entrega con certificado de laboratorio",
                                "Estética moderna y limpia",
                                "Reducción de riesgos legales para la constructora"
                            ]}
                            color="orange"
                            align="left"
                        />

                        {/* PRODUCT 2: Tapa Lino */}
                        <ProductSection
                            category="HOSPITALARIO Y HOTELERO"
                            title="Tapa de Shut de Lino/Ropa"
                            subtitle="Para Hoteles y Hospitales"
                            description="Sistemas de admisión de mayor tamaño y apertura lateral para el manejo de bolsas de ropa sucia y lencería. Mantiene la asepsia y seguridad."
                            image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
                            features={[
                                "Apertura lateral amplia (Side Hinged)",
                                "Bordes sanitarios redondeados",
                                "Sistema de bloqueo electrónico opcional",
                                "Material antibacterial disponible"
                            ]}
                            advantages={[
                                "Optimiza logística de lavandería",
                                "Separa áreas sucias de limpias (bioseguridad)",
                                "Resistente a alto tráfico de camareras/personal",
                            ]}
                            quickWins={[
                                "Eficiencia operativa en hoteles",
                                "Control de infecciones en clínicas",
                                "Larga durabilidad de mecanismos"
                            ]}
                            color="gray"
                            align="right"
                        />
                        {/* PRODUCT 3: Puertas de Registro */}
                        <ProductSection
                            category="MANTENIMIENTO"
                            title="Puertas de Registro e Inspección"
                            subtitle="Acceso a ductos técnicos"
                            description="Pequeñas puertas técnicas para acceder a válvulas, cableado o inspección de ductos, manteniendo la resistencia al fuego del muro."
                            image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                            features={[
                                "Marco oculto o visible",
                                "Cerradura con llave de servicio",
                                "Misma resistencia CF que el muro",
                                "Medidas estándar y especiales"
                            ]}
                            advantages={[
                                "Mantiene la compartimentación del fuego",
                                "Acceso seguro solo para personal autorizado",
                                "Integración visual con la pared"
                            ]}
                            quickWins={[
                                "Seguridad en cuartos técnicos",
                                "Cumplimiento normativo RETIE/RITEL (si aplica)",
                                "Acabado profesional"
                            ]}
                            color="cyan" // Cyan for technical/maintenance feel
                            align="left"
                        />
                    </VStack>
                </Container>
            </Box>

            {/* 5. VALUES / CULTURE */}
            <Box bg="#1a202c" py={{ base: 20, md: 24 }} color="white">
                <Container maxW="8xl" px={8}>
                    <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={16}>
                        <VStack align="flex-start" gap={6}>
                            <Text color="orange.400" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                                CULTURA DE MARCA
                            </Text>
                            <Heading fontSize="4xl" fontWeight="bold">
                                Valores Fundamentales
                            </Heading>
                            <Text color="gray.400" fontSize="lg">
                                En sistemas de seguridad pasiva no hay margen de error. Nuestra integridad técnica protege tu inversión y tu tranquilidad.
                            </Text>
                        </VStack>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                            <ValueCard title="Rigor Técnico" text="No improvisamos. Cada producto cumple estrictamente la especificación." icon={Briefcase} />
                            <ValueCard title="Responsabilidad Civil" text="Entendemos la importancia legal de un sistema cortafuego certificado." icon={Shield} />
                            <ValueCard title="Innovación en Mecanismos" text="Herrajes durables que soportan miles de ciclos de apertura." icon={Settings} />
                            <ValueCard title="Precisión" text="Fabricación milimétrica para un sellado perfecto de humos." icon={CheckCircle} />
                        </SimpleGrid>
                    </Grid>
                </Container>
            </Box>

            {/* 6. PERSONALITY */}
            <Box bg="white" py={{ base: 20, md: 24 }}>
                <Container maxW="8xl" px={8}>
                    <VStack gap={12} textAlign="center">
                        <VStack gap={4}>
                            <Text color="orange.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                                PERSONALIDAD DE MARCA
                            </Text>
                            <Heading color="gray.900" fontSize="4xl">
                                ¿Quién es INACRIL?
                            </Heading>
                        </VStack>

                        <div className="shuts-personality-grid">
                            <PersonalityCard icon={Smile} title="Sinceridad" text="Honesta, confiable, responsable." />
                            <PersonalityCard icon={Zap} title="Emoción" text="Innovadora, moderna, proactiva." />
                            <PersonalityCard icon={Briefcase} title="Competencia" text="Experta, técnica, eficiente." />
                            <PersonalityCard icon={Award} title="Sofisticación" text="Elegante, premium, detallista." />
                            <PersonalityCard icon={Hammer} title="Robustez" text="Fuerte, resistente, sólida." />
                        </div>
                    </VStack>
                </Container>
            </Box>

            {/* 7. CTA */}
            <div className="shuts-cta">
                <div className="shuts-cta-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b09?w=1600&q=80"
                    alt="CTA Background"
                    className="shuts-cta-bg"
                />

                <div className="shuts-cta-content">
                    <h2 className="shuts-cta-title">
                        Eleva el estándar de seguridad de tu <span className="highlight">proyecto vertical</span>
                    </h2>
                    <p className="shuts-cta-text">
                        Cumple la norma y protege a tus usuarios. Contáctanos para especificar las tapas de shut y registros certificados para tu obra.
                    </p>
                    <HStack justify="center" gap={4}>
                        <button className="shuts-cta-button">
                            <span>Cotizar Shuts CF</span>
                            <ArrowRight size={20} />
                        </button>
                    </HStack>
                </div>
            </div>

            <Footer />
        </Box>
    )
}

// --- SUBCOMPONENTS (Mapped to Shuts CF classes) ---

const PillarCard = ({ icon: Icon, title, description }) => (
    <div className="shuts-how-card">
        <div className="shuts-how-icon-box">
            <Icon size={24} />
        </div>
        <Heading size="md" color="gray.900">{title}</Heading>
        <Text color="gray.600" fontSize="sm" lineHeight="relaxed">{description}</Text>
    </div>
)

const ValueCard = ({ title, text, icon: Icon }) => (
    <div className="shuts-value-card">
        <div className="shuts-value-icon">
            <Icon size={24} />
        </div>
        <Box>
            <Heading size="sm" color="white" mb={2}>{title}</Heading>
            <Text color="gray.400" fontSize="sm">{text}</Text>
        </Box>
    </div>
)

const PersonalityCard = ({ icon: Icon, title, text }) => (
    <div className="shuts-personality-card">
        <div className="shuts-personality-icon">
            <Icon size={24} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <Heading size="sm" color="gray.900">{title}</Heading>
            <Text fontSize="xs" color="gray.500">{text}</Text>
        </div>
    </div>
)

const ProductSection = ({ title, subtitle, description, image, features, advantages, quickWins, color, align, category }) => {
    const isRight = align === 'right';
    const colorMap = {
        orange: { main: 'orange.500', light: 'orange.50', text: 'orange.600' },
        gray: { main: 'gray.500', light: 'gray.50', text: 'gray.600' },
        cyan: { main: 'cyan.500', light: 'cyan.50', text: 'cyan.600' }
    } // Custom map for this page

    // Default to orange if color not found or for safety emphasis
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
                    h="500px"
                    rounded="2xl"
                    overflow="hidden"
                    boxShadow="2xl"
                    position="relative"
                >
                    <Image src={image} alt={title} objectFit="cover" w="100%" h="100%" />
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
                </Box>
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

                    <Box w="100%" p={6} bg={theme.light} rounded="xl">
                        <Heading size="xs" textTransform="uppercase" letterSpacing="widest" mb={4} color={theme.text}>
                            Quick Wins
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
