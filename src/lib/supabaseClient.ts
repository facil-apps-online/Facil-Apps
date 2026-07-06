import { createClient } from '@supabase/supabase-js';

const CORE_SUPABASE_URL = import.meta.env.VITE_CORE_SUPABASE_URL;
const CORE_SUPABASE_ANON_KEY = import.meta.env.VITE_CORE_SUPABASE_ANON_KEY;

if (!CORE_SUPABASE_URL || !CORE_SUPABASE_ANON_KEY) {
  console.error(
    '[supabaseClient] Missing VITE_CORE_SUPABASE_URL or VITE_CORE_SUPABASE_ANON_KEY. ' +
      'Check your .env.local file.',
  );
}

// Client for the central Core database.
// No session persistence: this portal only consumes public data.
export const coreSupabase = createClient(CORE_SUPABASE_URL ?? '', CORE_SUPABASE_ANON_KEY ?? '', {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
});
