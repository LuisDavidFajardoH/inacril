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
    Badge,
    Icon,
    Circle
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
    ShieldCheck,
    Droplets,
    LayoutGrid,
    ArrowRight,
    Building2,
    Home,
    Sparkles,
    Wrench,
    CheckCircle,
    UserCheck,
    Palette,
    Zap
} from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './banos.css'

const MotionBox = motion.create(Box);

export default function BanosIndustrialesHogar() {
    return (
        <Box bg="white" minH="100vh">
            <Navbar />

            {/* 1. HERO BANNER - Updated with new strategy keywords */}
            <div className="banos-intro-banner">
                <div className="banos-intro-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1600&q=80"
                    alt="Baños Industriales y Hogar"
                    className="banos-intro-bg"
                />

                <div className="banos-intro-content">
                    <div className="banos-intro-label">BAÑOS INDUSTRIALES Y HOGAR</div>
                    <h1 className="banos-intro-title">
                        Transformamos ideas en <span className="highlight">espacios funcionales</span> y memorables
                    </h1>
                    <p className="banos-intro-description">
                        Soluciones en HPL y acrílico de alto desempeño que combinan diseño personalizable, materiales premium y resistencia extrema.
                    </p>

                    <div className="banos-intro-features">
                        <div className="banos-intro-feature">
                            <div className="banos-intro-feature-icon">
                                <ShieldCheck size={28} />
                            </div>
                            <div className="banos-intro-feature-title">Calidad y Cumplimiento</div>
                            <div className="banos-intro-feature-text">
                                Ejecuciones confiables y durables desde el primer día
                            </div>
                        </div>

                        <div className="banos-intro-feature">
                            <div className="banos-intro-feature-icon">
                                <Palette size={28} />
                            </div>
                            <div className="banos-intro-feature-title">Diseño Personalizado</div>
                            <div className="banos-intro-feature-text">
                                El material se adapta a tu diseño, no al revés
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. PHILOSOPHY / WHY - "¿POR QUÉ HACEMOS LO QUE HACEMOS?" */}
            <Box bg="white" py={{ base: 20, md: 24 }}>
                <Container maxW="8xl" px={8}>
                    <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 12, lg: 20 }} alignItems="center">
                        <VStack align="flex-start" gap={8}>
                            <Text color="green.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                                NUESTRO PROPÓSITO
                            </Text>
                            <Heading color="gray.900" fontSize={{ base: "3xl", md: "5xl" }} lineHeight="1.2">
                                Los detalles correctos marcan la diferencia entre un espacio común y uno <Text as="span" color="green.500">extraordinario</Text>
                            </Heading>
                            <Text color="gray.600" fontSize="lg" lineHeight="relaxed">
                                Creemos que los espacios bien diseñados transforman la forma en que las personas viven y trabajan. Existimos para hacer realidad tus ideas, creando ambientes funcionales donde la calidad y la innovación se convierten en experiencias que perduran.
                            </Text>

                            <Box borderLeft="4px solid #48BB78" pl={6} py={2}>
                                <Text fontStyle="italic" color="gray.700" fontSize="xl" fontWeight="medium">
                                    "INACRIL sabe exactamente lo que hace y lo ejecuta bien."
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
                                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80"
                                alt="Philosophy"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                            />
                        </Box>
                    </Grid>
                </Container>
            </Box>

            {/* 3. METHODOLOGY / HOW - "¿CÓMO LO HACEMOS?" */}
            <Box bg="gray.50" py={{ base: 20, md: 24 }}>
                <Container maxW="8xl" px={8}>
                    <VStack gap={4} textAlign="center" mb={12}>
                        <Text color="green.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                            NUESTRA METODOLOGÍA
                        </Text>
                        <Heading color="gray.900" fontSize={{ base: "3xl", md: "4xl" }}>
                            ¿Cómo lo logramos?
                        </Heading>
                    </VStack>

                    <div className="banos-how-grid">
                        <MethodologyCard
                            icon={ShieldCheck}
                            title="Materiales Premium"
                            description="Seleccionados por su resistencia, durabilidad y desempeño superior en zonas húmedas y de alto tráfico."
                        />
                        <MethodologyCard
                            icon={Palette}
                            title="Diseño Personalizado"
                            description="Adaptándonos a cada concepto arquitectónico. Versatilidad en colores, acabados y texturas."
                        />
                        <MethodologyCard
                            icon={Wrench}
                            title="Procesos Especializados"
                            description="Técnicas que garantizan precisión, seguridad y acabados impecables en cada pieza."
                        />
                        <MethodologyCard
                            icon={UserCheck}
                            title="Acompañamiento Experto"
                            description="Estamos contigo desde la idea inicial hasta la materialización final del proyecto."
                        />
                    </div>
                </Container>
            </Box>

            {/* 4. PRODUCTS & SOLUTIONS - SPLIT INTO TWO LINES */}
            <Box bg="white" py={{ base: 20, md: 32 }}>
                <Container maxW="8xl" px={8}>
                    <VStack gap={4} mb={20} textAlign="center">
                        <Text color="green.500" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                            NUESTRAS SOLUCIONES
                        </Text>
                        <Heading color="gray.900" fontSize={{ base: "4xl", md: "5xl" }}>
                            Dos grandes líneas, una misma calidad
                        </Heading>
                    </VStack>

                    <VStack gap={24}>
                        {/* LINEA 1: UNIDAD DE BAÑOS HPL */}
                        <ProductSection
                            category="INSTITUCIONAL"
                            title="Unidad de Baños HPL"
                            subtitle="Revestimientos, lobbies, lockers y mobiliario de alto tráfico"
                            description="La solución definitiva para proyectos que no pueden fallar. Espacios de alto tráfico donde la durabilidad, seguridad y estética deben mantenerse intactas."
                            image="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
                            features={[
                                "Paneles HPL de alta resistencia a la humedad e impactos",
                                "Ideal para proyectos institucionales y hoteleros",
                                "Soluciones modulares y personalizables",
                                "Amplia variedad de acabados tipo madera"
                            ]}
                            quickWins={[
                                "Instalación eficiente = entrega rápida",
                                "Apariencia premium inmediata",
                                "Menos reclamos por deterioro",
                                "Cero mantenimiento complejo"
                            ]}
                            color="blue"
                            align="left"
                        />

                        {/* LINEA 2: LÍNEA HOGAR */}
                        <ProductSection
                            category="RESIDENCIAL"
                            title="Línea Hogar en Acrílico"
                            subtitle="Lavamanos, tinas, bañeras y lavaderos High-Gloss"
                            description="Libertad de diseño total. Acrílico de alto brillo con refuerzo en fibra de vidrio que se adapta a tu espacio, ofreciendo limpieza visual y suavidad al tacto."
                            image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
                            features={[
                                "Acrílico alto brillo con refuerzo estructural",
                                "Superficie lisa, no porosa y fácil de limpiar",
                                "Diseños ergonómicos y contemporáneos",
                                "Mayor ligereza sin sacrificar resistencia"
                            ]}
                            quickWins={[
                                "Impacto visual inmediato",
                                "Sensación de amplitud y limpieza",
                                "Confort térmico al tacto",
                                "Conserva el brillo por años"
                            ]}
                            color="orange" // Changed to distinguish residential warmth
                            align="right"
                        />
                    </VStack>
                </Container>
            </Box>

            {/* 5. SELECTOR - DEFINE TU PROYECTO (CUSTOM CSS / NO CARDS) */}
            <div className="selector-section">
                <div className="selector-container">
                    <div className="selector-header">
                        <div className="banos-intro-label">GUÍA DE ESPECIFICACIÓN</div>
                        <h2 className="selector-title">Define tu Proyecto en 3 Pasos</h2>
                        <p className="selector-subtitle">Encuentra la línea ideal de divisiones sanitarias en HPL</p>
                    </div>

                    <div className="selector-grid">
                        {/* STEP 1: TRAFICO */}
                        <div className="selector-step">
                            <div className="step-header">
                                <div className="step-number">1</div>
                                <h3 className="step-question">¿Cuál es el nivel de tráfico del proyecto?</h3>
                            </div>
                            <div className="step-options">
                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Muy Alto Tráfico</span>
                                    </div>
                                    <div className="option-desc">(Aeropuertos, terminales, estadios, grandes superficies)</div>
                                    <div className="option-info"><span className="arrow-icon">→</span> Requiere máxima estabilidad estructural.</div>
                                    <div className="option-rec">
                                        <CheckCircle size={16} /> Recomendación: Línea Plus
                                    </div>
                                </div>

                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Alto Tráfico</span>
                                    </div>
                                    <div className="option-desc">(Universidades, centros comerciales, clínicas, edificios corporativos)</div>
                                    <div className="option-info"><span className="arrow-icon">→</span> Necesita equilibrio entre resistencia y diseño.</div>
                                    <div className="option-rec">
                                        <CheckCircle size={16} /> Recomendación: Línea Concept o Línea Esencial
                                    </div>
                                </div>

                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Medio – Alto</span>
                                    </div>
                                    <div className="option-desc">(Oficinas privadas, hoteles, clínicas especializadas)</div>
                                    <div className="option-info"><span className="arrow-icon">→</span> Enfoque más estético con alto desempeño.</div>
                                    <div className="option-rec">
                                        <CheckCircle size={16} /> Recomendación: Línea Max o Línea Pro
                                    </div>
                                </div>

                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Espacios Infantiles</span>
                                    </div>
                                    <div className="option-desc">(Jardines, colegios, clínicas pediátricas)</div>
                                    <div className="option-info"><span className="arrow-icon">→</span> Seguridad + diseño lúdico.</div>
                                    <div className="option-rec">
                                        <CheckCircle size={16} /> Recomendación: Línea Infantil
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STEP 2: DISENO */}
                        <div className="selector-step">
                            <div className="step-header">
                                <div className="step-number">2</div>
                                <h3 className="step-question">¿Qué nivel de diseño requiere el espacio?</h3>
                            </div>
                            <div className="step-options">
                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Diseño funcional y eficiente</span>
                                    </div>
                                    <div className="option-rec">
                                        <CheckCircle size={16} /> Recomendación: Línea Esencial
                                    </div>
                                </div>

                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Imagen moderna con estructura visible</span>
                                    </div>
                                    <div className="option-rec">
                                        <CheckCircle size={16} /> Recomendación: Línea Concept
                                    </div>
                                </div>

                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Estética limpia y minimalista</span>
                                    </div>
                                    <div className="option-desc">(sin tubular superior)</div>
                                    <div className="option-rec">
                                        <CheckCircle size={16} /> Recomendación: Línea Max o Pro
                                    </div>
                                </div>

                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Diseño robusto y dominante</span>
                                    </div>
                                    <div className="option-rec">
                                        <CheckCircle size={16} /> Recomendación: Línea Plus
                                    </div>
                                </div>

                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Diseño creativo y personalizado</span>
                                    </div>
                                    <div className="option-rec">
                                        <CheckCircle size={16} /> Recomendación: Línea Infantil
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* STEP 3: PRIORIDAD */}
                        <div className="selector-step">
                            <div className="step-header">
                                <div className="step-number">3</div>
                                <h3 className="step-question">¿Qué prioridad tiene el proyecto?</h3>
                            </div>
                            <div className="step-options">
                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Optimización de presupuesto</span>
                                    </div>
                                    <div className="option-info"><span className="arrow-icon">→</span> Esencial</div>
                                </div>

                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Balance costo – desempeño – estabilidad</span>
                                    </div>
                                    <div className="option-info"><span className="arrow-icon">→</span> Concept</div>
                                </div>

                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Imagen arquitectónica diferenciadora</span>
                                    </div>
                                    <div className="option-info"><span className="arrow-icon">→</span> Max o Pro</div>
                                </div>

                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Máxima durabilidad a largo plazo</span>
                                    </div>
                                    <div className="option-info"><span className="arrow-icon">→</span> Plus</div>
                                </div>

                                <div className="step-option">
                                    <div className="option-header">
                                        <span className="option-bullet">🔘</span>
                                        <span className="option-label">Experiencia del usuario infantil</span>
                                    </div>
                                    <div className="option-info"><span className="arrow-icon">→</span> Infantil</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 6. VALUES / CULTURE */}
            <Box bg="#0a1021" py={{ base: 20, md: 24 }} color="white">
                <Container maxW="8xl" px={8}>
                    <Grid templateColumns={{ base: "1fr", lg: "1fr 2fr" }} gap={16}>
                        <VStack align="flex-start" gap={6}>
                            <Text color="green.400" fontSize="xs" fontWeight="bold" letterSpacing="0.3em" textTransform="uppercase">
                                CULTURA DE MARCA
                            </Text>
                            <Heading fontSize="4xl" fontWeight="bold">
                                Nuestros Valores Fundamentales
                            </Heading>
                            <Text color="gray.400" fontSize="lg">
                                No solo entregamos productos, construimos confianza. Nuestra cultura se basa en la sinceridad, la competencia técnica y la búsqueda constante de la excelencia.
                            </Text>
                        </VStack>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                            <ValueCard title="Calidad y Cumplimiento" text="Hacemos las cosas bien desde la primera vez. Garantizamos ejecuciones confiables." icon={CheckCircle} />
                            <ValueCard title="Compromiso Total" text="Asumimos cada proyecto como propio. Somos tu aliado técnico responsable." icon={UserCheck} />
                            <ValueCard title="Innovación Aplicada" text="Incorporamos materiales y procesos que generan eficiencia real y valor en obra." icon={Zap} />
                            <ValueCard title="Ética y Transparencia" text="Actuamos con claridad y coherencia, construyendo confianza a largo plazo." icon={ShieldCheck} />
                        </SimpleGrid>
                    </Grid>
                </Container>
            </Box>

            {/* 6. CTA SECTION */}
            <div className="banos-cta">
                <div className="banos-cta-overlay"></div>
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                    alt="Luxury Bathroom"
                    className="banos-cta-bg"
                />

                <div className="banos-cta-content">
                    <h2 className="banos-cta-title">
                        ¿Listo para transformar tu proyecto?
                    </h2>
                    <p className="banos-cta-text">
                        Ya sea un baño institucional de alto tráfico o un diseño residencial único, tenemos la solución perfecta. Agenda una asesoría personalizada hoy mismo.
                    </p>
                    <HStack justify="center" gap={4} flexWrap="wrap">
                        <button className="banos-cta-button">
                            <span>Cotizar mi Proyecto</span>
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

const MethodologyCard = ({ icon: Icon, title, description }) => (
    <VStack
        bg="white"
        p={8}
        rounded="xl"
        shadow="lg"
        align="flex-start"
        gap={4}
        transition="all 0.3s"
        _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
        borderTop="4px solid #48BB78"
    >
        <Box p={3} bg="green.50" rounded="lg" color="green.600">
            <Icon size={24} />
        </Box>
        <Heading size="md" color="gray.900">{title}</Heading>
        <Text color="gray.600" fontSize="sm" lineHeight="relaxed">{description}</Text>
    </VStack>
)

const ValueCard = ({ title, text, icon: Icon }) => (
    <HStack align="flex-start" gap={4}>
        <Box color="green.400" mt={1}>
            <Icon size={24} />
        </Box>
        <Box>
            <Heading size="sm" color="white" mb={2}>{title}</Heading>
            <Text color="gray.400" fontSize="sm">{text}</Text>
        </Box>
    </HStack>
)

const ProductSection = ({ title, subtitle, description, image, features, quickWins, color, align, category }) => {
    const isRight = align === 'right';
    const colorScheme = {
        blue: { icon: 'blue.600', bg: 'blue.50' },
        orange: { icon: 'orange.600', bg: 'orange.50' }
    }[color]

    return (
        <Grid
            templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            gap={{ base: 12, lg: 20 }}
            alignItems="center"
        >
            <Box order={{ base: 2, lg: isRight ? 2 : 1 }} position="relative">
                <Box
                    h="500px"
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
                </Box>
                {/* Decorative BG Element */}
                <Box
                    position="absolute"
                    top="-20px"
                    bottom="-20px"
                    left={isRight ? "20px" : "-20px"}
                    right={isRight ? "-20px" : "20px"}
                    bg={color === 'blue' ? 'blue.100' : 'orange.100'}
                    zIndex="-1"
                    rounded="3xl"
                />
            </Box>

            <VStack
                align="flex-start"
                gap={8}
                order={{ base: 1, lg: isRight ? 1 : 2 }}
            >
                <Box>
                    <Text color={color === 'blue' ? 'blue.600' : 'orange.600'} fontWeight="bold" mb={2} letterSpacing="wider" fontSize="sm">
                        {subtitle}
                    </Text>
                    <Heading color="gray.900" size="2xl" mb={4} lineHeight="1.1">
                        {title}
                    </Heading>
                    <Text color="gray.600" fontSize="lg">
                        {description}
                    </Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} w="100%">
                    <Box>
                        <Heading size="xs" textTransform="uppercase" letterSpacing="widest" mb={4} color="gray.400">
                            Características
                        </Heading>
                        <VStack align="flex-start" gap={3}>
                            {features.map((f, i) => (
                                <HStack key={i} align="flex-start">
                                    <CheckCircle size={16} color="var(--chakra-colors-green-500)" style={{ marginTop: '4px' }} />
                                    <Text fontSize="sm" color="gray.700">{f}</Text>
                                </HStack>
                            ))}
                        </VStack>
                    </Box>

                    <Box>
                        <Heading size="xs" textTransform="uppercase" letterSpacing="widest" mb={4} color={color === 'blue' ? 'blue.500' : 'orange.500'}>
                            Quick Wins
                        </Heading>
                        <VStack align="flex-start" gap={3}>
                            {quickWins.map((w, i) => (
                                <HStack key={i} align="flex-start">
                                    <Zap size={16} color={color === 'blue' ? '#3182ce' : '#dd6b20'} style={{ marginTop: '4px' }} />
                                    <Text fontSize="sm" color="gray.700" fontWeight="500">{w}</Text>
                                </HStack>
                            ))}
                        </VStack>
                    </Box>
                </SimpleGrid>
            </VStack>
        </Grid>
    )
}
