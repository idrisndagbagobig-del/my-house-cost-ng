import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://rhatnzcrjzknmsxapgsc.supabase.co";

const supabaseAnonKey =
  "sb_publishable_7kt2FIoCActZeOJP8coFJw_gmZiRCQe";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);