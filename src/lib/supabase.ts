import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let client: SupabaseClient | null = null;

try {
  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
  if (url && key) {
    client = createClient(url, key);
  }
} catch {
  client = null;
}

export const supabase = client;

export async function safeInsert(table: string, data: Record<string, unknown>): Promise<{ error: string | null }> {
  if (!supabase) {
    return { error: null };
  }
  try {
    const { error } = await supabase.from(table).insert(data);
    return { error: error ? error.message : null };
  } catch {
    return { error: 'Något gick fel.' };
  }
}
