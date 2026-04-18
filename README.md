# Inacril - Sitio Web Corporativo

Proyecto web de Inacril construido con Next.js (App Router), React y Chakra UI.
Esta guia esta pensada para que cualquier desarrollador pueda:

- Instalar el proyecto desde cero
- Entender como esta organizado
- Editar paginas, componentes y estilos sin romper la estructura
- Generar el build para despliegue estatico

## 1) Stack Tecnico

- Next.js 16 (App Router)
- React 19
- Chakra UI 3
- Framer Motion (animaciones)
- Swiper (carruseles)
- ESLint 9 + eslint-config-next

Dependencias principales definidas en `package.json`.

## 2) Como Funciona el Proyecto

Este sitio usa el modelo de rutas por carpetas de Next.js App Router:

- Cada carpeta dentro de `src/app` representa un segmento de URL.
- Cada `page.js` representa una pagina.
- `layout.js` define la estructura global (provider, navbar, main).
- `globals.css` aplica estilos globales.

Ademas:

- Se usa alias `@/*` -> `src/*` (configurado en `jsconfig.json`).
- La UI base esta montada con Chakra en `src/components/ui/provider.jsx`.
- La navegacion principal vive en `src/components/Navbar.jsx`.
- La home (`src/app/page.js`) compone secciones reusables desde `src/components`.

## 3) Estructura de Carpetas

Estructura relevante del proyecto:

```text
inacril/
	public/                    # Imagenes y assets estaticos
		aliados/
		banos/
		cf/
		escencial/
		fachadas/
		infantiles/
		plaza-central/
		plus/
		pro/

	src/
		app/
			layout.js              # Layout global (Provider + Navbar)
			page.js                # Home principal
			globals.css            # Estilos globales

			banos/
				linea-concept/page.js
				linea-esencial/page.js
				linea-infantil/page.js
				linea-maxi/page.js
				linea-plus/page.js
				linea-pro/page.js

			banos-industriales-hogar/page.js
			fachadas-exteriores/page.js

			puertas-mobiliario/
				page.js
				puertas-cf/page.js
				puertas-panel-fenolico/page.js
				shuts-cf/page.js

		components/
			Navbar.jsx
			Footer.jsx
			ServiceGrid.jsx
			CategoryCarousel.jsx
			ProjectHighlight.jsx
			ProjectForm.jsx
			AlliesCarousel.jsx
			PlazaCentralSection.jsx
			SolutionsSection.jsx

			ui/
				provider.jsx
				color-mode.jsx
				button.jsx
```

## 4) Mapa de Rutas Actual

Rutas disponibles (por archivo):

- `/` -> `src/app/page.js`
- `/banos-industriales-hogar` -> `src/app/banos-industriales-hogar/page.js`
- `/fachadas-exteriores` -> `src/app/fachadas-exteriores/page.js`
- `/puertas-mobiliario` -> `src/app/puertas-mobiliario/page.js`
- `/puertas-mobiliario/puertas-cf` -> `src/app/puertas-mobiliario/puertas-cf/page.js`
- `/puertas-mobiliario/puertas-panel-fenolico` -> `src/app/puertas-mobiliario/puertas-panel-fenolico/page.js`
- `/puertas-mobiliario/shuts-cf` -> `src/app/puertas-mobiliario/shuts-cf/page.js`
- `/banos/linea-concept` -> `src/app/banos/linea-concept/page.js`
- `/banos/linea-esencial` -> `src/app/banos/linea-esencial/page.js`
- `/banos/linea-infantil` -> `src/app/banos/linea-infantil/page.js`
- `/banos/linea-maxi` -> `src/app/banos/linea-maxi/page.js`
- `/banos/linea-plus` -> `src/app/banos/linea-plus/page.js`
- `/banos/linea-pro` -> `src/app/banos/linea-pro/page.js`

Nota: en la barra de navegacion hay enlaces como `/acrilicos`, `/imagen-corporativa` y `/cubiertas` que hoy no tienen pagina en `src/app`. Si se van a usar, hay que crear esas rutas.

## 5) Requisitos Previos

- Node.js 20+ recomendado
- npm 10+ (o pnpm/yarn/bun si lo prefieres)

Verifica versiones:

```bash
node -v
npm -v
```

## 6) Instalacion

Desde la carpeta del proyecto:

```bash
npm install
```

## 7) Scripts Disponibles

```bash
npm run dev    # Levanta entorno local en modo desarrollo
npm run build  # Build de produccion (genera salida estatica)
npm run start  # Ejecuta el build de Next (modo server)
npm run lint   # Ejecuta ESLint
```

## 8) Ejecutar en Desarrollo

```bash
npm run dev
```

Abrir en navegador:

- `http://localhost:3000`

Cada cambio en codigo refresca automaticamente.

## 9) Guia Rapida para Editar (Onboarding Dev)

### 9.1 Editar la Home

- Archivo principal: `src/app/page.js`
- Secciones reutilizables: `src/components/*`

Si quieres modificar una seccion puntual (ej. grilla de servicios), edita su componente directo (`src/components/ServiceGrid.jsx`).

### 9.2 Editar una pagina de linea/producto

Ejemplo: Linea Plus

- Vista: `src/app/banos/linea-plus/page.js`
- Estilos propios: `src/app/banos/linea-plus/plus.css`

Patron repetido en varias paginas: `page.js` + `*.css` dentro de la misma carpeta.

### 9.3 Crear una nueva ruta

Ejemplo para `/acrilicos`:

1. Crear carpeta `src/app/acrilicos`
2. Crear `src/app/acrilicos/page.js`
3. Si necesitas estilos locales, crear `src/app/acrilicos/acrilicos.css`
4. Importar el css en el `page.js` (si aplica)
5. Validar navegacion desde `src/components/Navbar.jsx`

### 9.4 Agregar o reemplazar imagenes

- Coloca los assets dentro de `public/`.
- Referencia con rutas absolutas desde raiz web, por ejemplo:

```jsx
<img src="/plus/mi-imagen.jpg" alt="Descripcion" />
```

## 10) Configuracion Importante de Next

En `next.config.mjs`:

- `output: 'export'` habilita export estatico.
- `images.unoptimized: true` evita optimizacion de imagen de Next para export estatico.
- `reactCompiler: true` activado.

Esto indica que el proyecto esta preparado para despliegues estaticos (por ejemplo en hosting de archivos estaticos, CDN o bucket).

## 11) Build y Publicacion Estatica

Generar build:

```bash
npm run build
```

Con `output: 'export'`, se genera la salida exportada en `out/`.

Para probar esa salida localmente:

```bash
npx serve out
```

## 12) Calidad de Codigo

Antes de subir cambios:

```bash
npm run lint
npm run build
```

Si ambos comandos pasan, normalmente el cambio esta listo para revision.

## 13) Convenciones Recomendadas para el Equipo

- Mantener componentes reutilizables en `src/components`.
- Mantener estilos de pagina en la misma carpeta de la ruta.
- Usar imports con alias `@/` para evitar rutas relativas largas.
- Nombrar carpetas de rutas en minusculas y con guion cuando aplique.
- Mantener consistencia entre enlaces del navbar y rutas reales.

## 14) Troubleshooting Comun

### Error de dependencias o lockfile

```bash
rm -rf node_modules package-lock.json
npm install
```

### El build falla por rutas inexistentes

Revisar `src/components/Navbar.jsx` y confirmar que cada `href` tenga una pagina en `src/app`.

### No cargan imagenes en produccion

- Confirmar que existan dentro de `public/`
- Verificar mayusculas/minusculas exactas en nombres de archivo

---

Si vas a incorporar nuevas secciones o refactorizar componentes, es recomendable hacerlo por bloques pequenos (UI -> datos -> navegacion) para simplificar testing y code review.
