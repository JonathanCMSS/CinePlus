# 🎬 CinePlus - Aplicación Web de Películas

**Materia:** Aplicaciones Web  
**Universidad:** Universidad Politécnica Salesiana  
**Unidad:** 1 - Diseño y creación de páginas web  
**Tarea:** #1  
**Alumno:** Jonathan Cristhian Macias Soledispa  
**Repositorio:** https://github.com/JonathanCMSS/CinePlus

---

## Descripción

CinePlus es una aplicación web dinámica de películas desarrollada con HTML, CSS, Bootstrap 5, jQuery y AJAX. Permite consultar películas en cartelera, ver detalles, leer reseñas, ver tráilers y rentar películas.

---

## ⚙️ Funcionalidades Implementadas

| # | Funcionalidad | Estado |
|---|--------------|--------|
| 1 | Repositorio en GitHub con 3+ commits y README | Hecho |
| 2 | `peliculas.json` con nueva estructura (géneros, precios, estreno) | Hecho |
| 3 | 8 películas con sinopsis de 60+ palabras | Hecho |
| 4 | Badge dinámico de Estreno / En Cartelera + precio | Hecho |
| 5 | Spinner de carga con retraso de 5 segundos | Hecho |
| 6 | Página `renta.html` con formulario + Modal resumen | Hecho |
| 7 | Reseñas desde `resenas.json` con estrellas | Hecho |
| 8 | Botón "Ver Tráiler" que abre Modal con video | Hecho |
| 9 | Alerta de bienvenida una sola vez (localStorage) | Hecho |
| 10 | Animación fadeIn al mostrar películas | Hecho |
| 11 | Validación de contacto (mensaje 20–50 caracteres) | Hecho |
| 12 | Tema visual, Google Fonts, footer fijo, navbar activo | Hecho |

---

## Estructura del Proyecto

```
CinePlus/
├── css/
│   └── style.css          → Estilos con Google Fonts
├── data/
│   ├── peliculas.json      → Datos de las 8 películas
│   └── resenas.json        → Reseñas por película
├── img/                    → Imágenes de las películas
├── js/
│   └── app.js             → Lógica principal (jQuery + AJAX)
├── pages/
│   ├── detalle.html       → Detalle de película + reseñas
│   ├── renta.html         → Formulario de renta
│   └── contacto.html      → Formulario de contacto
├── index.html             → Página principal
└── README.md
```

---

## Instrucciones de Uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/JonathanCMSS/CinePlus.git
   ```
2. Abrir la carpeta en VS Code.
3. Instalar la extensión **Live Server** si no la tienes.
4. Clic derecho sobre `index.html` → **Open with Live Server**.

> **Importante:** El proyecto usa AJAX para cargar los archivos JSON, por lo que necesita ejecutarse desde un servidor local. No abrir directamente como archivo en el navegador.

---

## Tecnologías Utilizadas

- HTML5 semántico
- CSS3 personalizado + Google Fonts (Montserrat, Open Sans)
- Bootstrap 5.3
- jQuery 3.6.4
- AJAX ($.ajax)
- JSON
- localStorage (para la alerta de bienvenida)

---

## Páginas

- **Inicio** (`index.html`): galería de películas con spinner y fadeIn
- **Detalle** (`pages/detalle.html`): sinopsis, badge, precio, tráiler y reseñas
- **Renta** (`pages/renta.html`): formulario de renta con modal resumen
- **Contacto** (`pages/contacto.html`): formulario con validación completa