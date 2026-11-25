# Portafolio de Arquitectura de Software (Next.js 16 + Supabase)

Aplicación web moderna construida con **Next.js 16+ (App Router)** y **Supabase** como backend serverless, diseñada para demostrar el consumo de datos en React Server Components, enrutamiento dinámico y políticas de seguridad a nivel de fila (RLS).

## Características Principales

- **App Router & Server Components:** Renderizado en el servidor para consultas directas a PostgreSQL con cero sobrecarga de JavaScript innecesario en el cliente.
- **Rutas Dinámicas:**
  - `/proyectos/[slug]`: Vista detallada de cada proyecto y su arquitectura.
  - `/categorias/[slug]`: Filtrado dinámico por dominio tecnológico.
- **Resiliencia UI:** Implementación de `loading.tsx` (skeletons), `error.tsx` (Error Boundaries) y `not-found.tsx`.
- **Seguridad:** Row Level Security (RLS) habilitado en Supabase con políticas de lectura pública controlada.

## Instalación Local

1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/TonyE24/nombre-de-tu-repo.git](https://github.com/TonyE24/nombre-de-tu-repo.git)
   cd nombre-de-tu-repo