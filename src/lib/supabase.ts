import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export type CategoryHero = {
  slug: string;
  image_src: string;
  title: string;
  subtitle: string;
  cta_text?: string;
  cta_link?: string;
  created_at?: string;
  updated_at?: string;
};