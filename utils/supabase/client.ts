import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types_db'

// Define a function to create a Supabase client for client-side operations
export const supabase = createClient<Database>(
    // Pass Supabase URL and anonymous key from the environment to the client
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);