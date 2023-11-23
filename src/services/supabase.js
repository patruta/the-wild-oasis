import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://czfimmlsploahylyjywi.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZmltbWxzcGxvYWh5bHlqeXdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNjI1NzksImV4cCI6MjAxMzczODU3OX0.Z86wBNBSCfD7tT5lOCTn8eQVMFbSZdUrzKDevRDacYw";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
