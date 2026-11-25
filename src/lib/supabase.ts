import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Proyecto {
  id: string;
  titulo: string;
  slug: string;
  categoria_slug: string;
  categoria_nombre: string;
  resumen: string;
  descripcion: string;
  tecnologias: string[];
  repositorio_url: string | null;
  demo_url: string | null;
  destacado: boolean;
  creado_en: string;
}

export async function getProyectos(): Promise<Proyecto[]> {
  const { data, error } = await supabase
    .from('proyectos')
    .select('*')
    .order('destacado', { ascending: false })
    .order('creado_en', { ascending: false });

  if (error) {
    throw new Error(`Error al obtener proyectos: ${error.message}`);
  }

  return data || [];
}

export async function getProyectoPorSlug(slug: string): Promise<Proyecto | null> {
  const { data, error } = await supabase
    .from('proyectos')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null; // No encontrado
    throw new Error(`Error al obtener el proyecto: ${error.message}`);
  }

  return data;
}

export async function getProyectosPorCategoria(categoriaSlug: string): Promise<Proyecto[]> {
  const { data, error } = await supabase
    .from('proyectos')
    .select('*')
    .eq('categoria_slug', categoriaSlug)
    .order('creado_en', { ascending: false });

  if (error) {
    throw new Error(`Error al filtrar por categoría: ${error.message}`);
  }

  return data || [];
}