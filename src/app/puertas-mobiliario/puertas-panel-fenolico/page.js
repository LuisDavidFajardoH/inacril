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
    Shield,
    Droplets,
    Hammer,
    Zap,
    Award,
    CheckCircle,
    Lightbulb,
    Smile,
    ArrowRight,
    Briefcase,
    Layers,
    Maximize
} from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './fenolico.css'

export default function PuertasFenolico() {
    return (
        <Box bg="white" minH="100vh">
            <Navbar />

            {/* 1. HERO BANNER */}
            <div className="fen-intro-banner">
                <div className="fen-intro-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
                    alt="Lockers Panel Fenólico HPL"
                    className="fen-intro-bg"
                />

                <div className="fen-intro-content">
                    <h1 className="fen-intro-title">
                        Resistencia extrema en <span className="highlight">cada detalle</span>
                    </h1>
                    <p className="fen-intro-description">
                        Puertas en Panel Fenólico (HPL) diseñadas para soportar humedad, impactos y el paso del tiempo en los entornos más exigentes.
                    </p>

                    <div className="fen-intro-features">
                        <div className="fen-intro-feature">
                            <div className="fen-intro-feature-icon">
                                <Droplets size={28} />
                            </div>
                            <div className="fen-intro-feature-title">100% Resistente al Agua</div>
                            <div className="fen-intro-feature-text">
                                Ideal para zonas húmedas, piscinas y vestuarios.
                            </div>
                        </div>

                        <div className="fen-intro-feature">
                            <div className="fen-intro-feature-icon">
                                <Hammer size={28} />
                            </div>
                            <div className="fen-intro-feature-title">Alto Tráfico</div>
                            <div className="fen-intro-feature-text">
                                Soporta golpes, rayones y uso intensivo diario.
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
                                Donde otros materiales fallan, <Text as="span" color="cyan.500">el HPL perdura</Text>
                            </Heading>
                            <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                                Entendemos que hay espacios donde una puerta convencional no es suficiente. Colegios, gimnasios, industrias y hospitales requieren soluciones que no se oxiden, no se hinchen y no se deterioren con el uso rudo.
                                <br /><br />
                                Nuestras puertas en panel fenólico están ingenierizadas para olvidar el mantenimiento y garantizar una estética impecable durante años.
                            </Text>

                            <Box borderLeft="4px solid #06b6d4" pl={6} py={2}>
                                <Text fontStyle="italic" color="gray.700" fontSize="xl" fontWeight="medium">
                                    "La inversión inteligente para espacios que exigen durabilidad y limpieza absoluta."
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
                                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=800&q=80"
                                alt="Resistencia HPL"
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
                            Ingeniería al servicio del desempeño
                        </Heading>
                    </VStack>

                    <div className="fen-how-grid">
                        <PillarCard
                            icon={Layers}
                            title="Material Compacto"
                            description="Utilizamos HPL (Laminado de Alta Presión) macizo, libre de poros y resistente a la oxidación y humedad extrema."
                        />
                        <PillarCard
                            icon={Maximize}
                            title="Diseño a Medida"
                            description="Nos adaptamos a las dimensiones y requerimientos de tu obra, con variedad de colores y acabados texturizados."
                        />
                        <PillarCard
                            icon={Briefcase}
                            title="Instalación Robusta"
                            description="Sistema de herrajes en acero inoxidable y marcos estructurales diseñados para soportar el ciclo de vida del edificio."
                        />
                    </div>
                </Container>
            </Box>

            {/* 4. PRODUCTS & SOLUTIONS */}
            <Box bg="white" py={{ base: 20, md: 32 }}>
                <Container maxW="8xl" px={8}>
                    <VStack gap={4} mb={20} textAlign="center">
                        <Text color="cyan.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                            TIPOS DE APLICACIÓN
                        </Text>
                        <Heading color="gray.900" fontSize={{ base: "4xl", md: "5xl" }}>
                            Soluciones para cada entorno
                        </Heading>
                    </VStack>

                    <VStack gap={24}>
                        {/* PRODUCT 1: Institucional / Trafico */}
                        <ProductSection
                            category="INSTITUCIONAL"
                            title="Puertas de Tráfico Intenso"
                            subtitle="Para Colegios, Universidades y Oficinas"
                            description="La solución definitiva para pasillos y aulas. Resistentes a golpes de mochilas, camillas o tráfico constante de personas. Olvida las reparaciones constantes de carpintería metálica o madera."
                            image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                            features={[
                                "Resistencia extrema al impacto y rayado",
                                "Estructura indeformable",
                                "Amplia gama de colores corporativos",
                                "Fácil limpieza de grafitis o manchas"
                            ]}
                            advantages={[
                                "Vida útil superior a 20 años",
                                "Mantenimiento cercano a cero",
                                "Aislamiento acústico moderado",
                                "Aspecto siempre nuevo"
                            ]}
                            quickWins={[
                                "Reducción drástica de presupuesto de mantenimiento",
                                "Imagen institucional impecable",
                                "Instalación limpia y rápida",
                            ]}
                            color="blue"
                            align="left"
                        />

                        {/* PRODUCT 2: Zonas Húmedas */}
                        <ProductSection
                            category="ZONAS HÚMEDAS"
                            title="Puertas para Ambientes Húmedos"
                            subtitle="Piscinas, Gimnasios, Spas y Vestuarios"
                            description="El agua y el vapor son los enemigos naturales de la madera y el metal. Nuestras puertas HPL son completamente hidrófugas, no se oxidan ni generan hongos."
                            image="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80"
                            features={[
                                "100% resistente al agua y vapor",
                                "Herrajes en acero inoxidable (AISI 304/316)",
                                "Superficie antibacteriana y fungicida",
                                "Ventilación opcional integrada"
                            ]}
                            advantages={[
                                "No se hinchan ni se delaminan",
                                "Cumplen normativas sanitarias exigentes",
                                "Seguridad total para usuarios descalzos",
                                "Limpieza con hidrolavadora posible"
                            ]}
                            quickWins={[
                                "Eliminación de problemas de óxido",
                                "Saneamiento inmediato de áreas críticas",
                                "Mayor confort para el usuario",
                            ]}
                            color="cyan"
                            align="right"
                        />

                        {/* PRODUCT 3: Clinico / Laboratorio */}
                        <ProductSection
                            category="SALUD E INDUSTRIA"
                            title="Puertas Técnicas Sanitarias"
                            subtitle="Hospitales, Laboratorios e Industria Alimentaria"
                            description="Superficies no porosas que impiden la proliferación de bacterias. Diseñadas para resistir limpiezas frecuentes con agentes químicos agresivos."
                            image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                            features={[
                                "Superficie compacta no porosa",
                                "Resistencia química certificada",
                                "Marcos sanitarios sin juntas visibles",
                                "Compatibles con control de acceso"
                            ]}
                            advantages={[
                                "Máxima asepsia garantizada",
                                "Resiste desinfección UV y químicos fuertes",
                                "Protección contra golpes de camillas",
                            ]}
                            quickWins={[
                                "Certificación sanitaria facilitada",
                                "Entorno seguro para pacientes y procesos",
                                "Durabilidad extrema ante uso 24/7",
                            ]}
                            color="gray"
                            align="left"
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
                                La solidez de nuestras puertas refleja la solidez de nuestros valores. Cumplimiento, calidad y honestidad en cada entrega.
                            </Text>
                        </VStack>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                            <ValueCard title="Durabilidad Garantizada" text="Productos hechos para durar décadas, no años." icon={Award} />
                            <ValueCard title="Respuesta Técnica" text="Asesoría experta para elegir la especificación correcta." icon={Lightbulb} />
                            <ValueCard title="Instalación Impecable" text="Nuestro equipo asegura un montaje perfecto en obra." icon={Hammer} />
                            <ValueCard title="Transparencia Total" text="Claridad en materiales, tiempos y garantías." icon={Shield} />
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

                        <div className="fen-personality-grid">
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
            <div className="fen-cta">
                <div className="fen-cta-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                    alt="CTA Background"
                    className="fen-cta-bg"
                />

                <div className="fen-cta-content">
                    <h2 className="fen-cta-title">
                        ¿Buscas durabilidad <span className="highlight">incomparable</span>?
                    </h2>
                    <p className="fen-cta-text">
                        No arriesgues tu inversión con materiales que no soportan el uso exigente. Cotiza tus puertas en Panel Fenólico HPL hoy mismo.
                    </p>
                    <HStack justify="center" gap={4}>
                        <button className="fen-cta-button">
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

// --- SUBCOMPONENTS (Refactored to cleaner CSS classes) ---

const PillarCard = ({ icon: Icon, title, description }) => (
    <div className="fen-how-card">
        <div className="fen-how-icon-box">
            <Icon size={24} />
        </div>
        <Heading size="md" color="gray.900">{title}</Heading>
        <Text color="gray.600" fontSize="sm" lineHeight="relaxed">{description}</Text>
    </div>
)

const ValueCard = ({ title, text, icon: Icon }) => (
    <div className="fen-value-card">
        <div className="fen-value-icon">
            <Icon size={24} />
        </div>
        <Box>
            <Heading size="sm" color="white" mb={2}>{title}</Heading>
            <Text color="gray.400" fontSize="sm">{text}</Text>
        </Box>
    </div>
)

const PersonalityCard = ({ icon: Icon, title, text }) => (
    <div className="fen-personality-card">
        <div className="fen-personality-icon">
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
        blue: { main: 'blue.500', light: 'blue.50', text: 'blue.600' },
        cyan: { main: 'cyan.500', light: 'cyan.50', text: 'cyan.600' },
        gray: { main: 'gray.500', light: 'gray.50', text: 'gray.600' }
    }
    const theme = colorMap[color] || colorMap.blue;

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
