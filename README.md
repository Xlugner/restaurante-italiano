# Restaurante Italiano 🍝

Un elegante sitio web para un restaurante italiano, construido con tecnologías web modernas para ofrecer una experiencia de usuario excepcional. Basado en el tema AstroPie y personalizado para satisfacer las necesidades específicas de nuestro restaurante.

## 🌟 Características Principales

- 📱 Diseño totalmente responsivo
- 🖼️ Galería de imágenes optimizada con efecto lightbox
- 🍽️ Menú interactivo y fácil de actualizar
- 🚀 Optimización de rendimiento y carga rápida
- 🔍 SEO mejorado para mejor visibilidad
- 🌐 Soporte multiidioma (Español/Inglés)

## 🛠️ Tecnologías Utilizadas

- **Astro**: Framework web moderno para sitios estáticos rápidos
- **TailwindCSS**: Framework CSS utilitario para diseño flexible
- **Alpine.js**: Framework JavaScript ligero para interactividad
- **GLightbox**: Lightbox moderno para la galería de imágenes
- **Vercel**: Plataforma de despliegue con alto rendimiento

## 🚀 Instalación y Despliegue

Para comenzar con el proyecto, sigue estos pasos:

1. **Clonar el Repositorio**:

   ```sh
   git clone https://github.com/Xlugner/restaurante-italiano.git
   cd restaurante-italiano
   ```

2. **Instalar Dependencias**:

   ```sh
   npm install
   ```

3. **Iniciar Servidor de Desarrollo**:

   ```sh
   npm run dev
   ```

4. **Construir para Producción**:

   ```sh
   npm run build
   ```

5. **Desplegar en Vercel**:

   ```sh
   vercel --prod
   ```

## 📂 Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```text
/
├── public/               # Archivos estáticos
│   └── assets/
│       └── images/      # Imágenes optimizadas
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layouts de página
│   ├── pages/          # Páginas del sitio
│   ├── styles/         # Estilos CSS
│   └── data/           # Datos JSON (menú, galería)
├── astro.config.mjs    # Configuración de Astro
├── tailwind.config.js  # Configuración de TailwindCSS
└── vercel.json         # Configuración de Vercel
```

## 🎨 Personalización

### Contenido del Menú

Los platos y categorías del menú se pueden modificar en `src/data/menu.json`. Cada plato puede incluir:

- Nombre
- Descripción
- Precio
- Categoría
- Imagen (opcional)
- Etiquetas (vegetariano, picante, etc.)

### Galería de Imágenes

Las imágenes de la galería se gestionan en:

- Archivos: `public/assets/images/gallery/`
- Configuración: `src/data/gallery.json`
- Formato recomendado: WebP para mejor rendimiento

### Estilos y Temas

- Los estilos base se pueden modificar en `src/styles/`
- La configuración de TailwindCSS está en `tailwind.config.js`
- Los colores del tema se pueden ajustar en la configuración de Tailwind

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1. Haz fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 💫 Agradecimientos

- Basado en el tema [AstroPie](https://github.com/wpinfusion/AstroPie)
- Imágenes de [Pexels](https://www.pexels.com/)
  ├── public/
  │ └── favicon.svg
  ├── src/
  │ ├── assets/
  │ ├── components/
  │ ├── layouts/
  │ │ └── Layout.astro
  │ ├── pages/
  │ │ ├── index.astro
  │ │ ├── about-us.astro
  │ │ ├── menu.astro
  │ │ ├── gallery.astro
  │ │ ├── contact.astro
  │ │ └── book.astro
  │ └── styles/
  └── package.json

````

## 📄 Premade Pages

-   Home: index.astro
-   About Us: about-us.astro
-   Menu: menu.astro
-   Gallery: gallery.astro
-   Contact: contact.astro
-   Book a Table: book.astro

## 🧩 Available Components

-   Article: Article.astro
-   Badge: Badge.astro
-   Button: Button.astro
-   ButtonCallUs: ButtonCallUs.astro
-   Card: Card.astro
-   Footer: Footer.astro
-   FormBook: FormBook.astro
-   FormContact: FormContact.astro
-   Grid: Grid.astro
-   Header: Header.astro
-   Heading: Heading.astro
-   Hero: Hero.astro
-   Menu: Menu.astro
-   ReviewSlider: ReviewSlider.astro
-   Section: Section.astro
-   WideImage: WideImage.astro

## 📚 Component Documentation

### Article

A component for displaying articles.

```astro
<Article contain={true}>
  <h1>Title</h1>
  <p>Content goes here...</p>
</Article>
````

### Badge

A component for displaying badges.

```astro
<Badge color="green" title="New" />
```

### Button

A component for displaying buttons.

```astro
<Button color="green" url="/contact">Contact Us</Button>
```

### ButtonCallUs

A component for displaying a call-to-action button.

```astro
<ButtonCallUs />
```

### Card

A component for displaying cards.

```astro
<Card>
  <h2>Card Title</h2>
  <p>Card content goes here...</p>
</Card>
```

### Footer

A component for displaying the footer.

```astro
<Footer />
```

### FormBook

A component for displaying a booking form.

```astro
<FormBook />
```

### FormContact

A component for displaying a contact form.

```astro
<FormContact />
```

### Grid

A component for displaying a grid layout.

```astro
<Grid>
  <div slot="grid-content-1">Content 1</div>
  <div slot="grid-content-2">Content 2</div>
  <div slot="grid-content-3">Content 3</div>
</Grid>
```

### Header

A component for displaying the header.

```astro
<Header />
```

### Heading

A component for displaying headings.

```astro
<Heading>
  <h1 slot="heading-title">Title</h1>
  <p slot="heading-content">Content goes here...</p>
</Heading>
```

### Hero

A component for displaying the hero section.

```astro
<Hero>
  <div slot="hero-content-left">Left Content</div>
  <div slot="hero-content-right">Right Content</div>
</Hero>
```

### Menu

A component for displaying a menu.

```astro
<Menu />
```

### ReviewSlider

A component for displaying a review slider.

```astro
<ReviewSlider />
```

### Section

A component for displaying a section.

```astro
<Section>
  <p>Section content goes here...</p>
</Section>
```

### WideImage

A component for displaying a wide image.

```astro
<WideImage src={importedImage} alt="alt description" />
```

## 👀 Stuck?

If you have any questions or need help with AstroPie, feel free to reach out to me at info@wpinfusion.com, or open an issue on the [AstroPie GitHub repository](https://github.com/wpinfusion/AstroPie)
