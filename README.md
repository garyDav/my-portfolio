# 📌 My Portfolio

Este proyecto es un **portafolio personal** desarrollado con [Astro v6](https://astro.build) y **TailwindCSS**.  
Aquí muestro mis proyectos destacados, experiencia y artículos de blog, integrando buenas prácticas de desarrollo y diseño.

---

## 📂 Arquitectura del proyecto

```
.
├── .gitignore
├── .npmrc
├── .prettierrc
├── README.md
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── favicon.svg
│   └── img
│       ├── allivia
│       │   └── telemedicina-allivia.webp
│       ├── condor
│       │   └── mesas-condor.webp
│       ├── donbosco
│       │   └── web-donbosco.webp
│       └── profile.webp
├── src
│   ├── components
│   │   ├── Blogs.astro
│   │   ├── Experience.astro
│   │   ├── FeaturedProjects.astro
│   │   ├── Presentation.astro
│   │   ├── SectionContainer.astro
│   │   ├── footer.astro
│   │   └── header.astro
│   ├── content
│   ├── content.config.ts
│   ├── icons
│   │   ├── BrandDocker.astro
│   │   ├── BrandGithub.astro
│   │   ├── BrandLinkedin.astro
│   │   ├── BrandLivewire.astro
│   │   ├── Briefcase.astro
│   │   ├── Logo.astro
│   │   ├── MailCode.astro
│   │   └── SubtitlesEdit.astro
│   ├── layouts
│   │   ├── Content.astro
│   │   ├── ContentLarge.astro
│   │   └── layout.astro
│   ├── pages
│   │   ├── blog
│   │   │   └── [id].astro
│   │   └── index.astro
│   └── styles
│       ├── global.css
│       └── typography.css
└── tsconfig.json
```

---

## 🚀 Instalación y uso

Clona el repositorio y usa **pnpm** para instalar dependencias:

```bash
git clone https://github.com/usuario/my-portfolio.git
cd my-portfolio
pnpm install
```

Ejecuta el servidor de desarrollo:

```bash
pnpm dev
```

Construye el proyecto para producción:

```bash
pnpm build
```

Previsualiza la build:

```bash
pnpm preview
```

---

## 🧞 Commands

Todos los comandos se ejecutan desde la raíz del proyecto, en la terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

---

## 🛠️ Tecnologías utilizadas

- **Astro v6** como framework principal.
- **TailwindCSS** para estilos.
- Integración de **componentes personalizados** y **layouts**.

---

## 📸 Capturas

Las imágenes de proyectos se encuentran en `public/img/` y se utilizan en los componentes de presentación y proyectos destacados.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.  
Puedes usarlo, modificarlo y compartirlo libremente.
