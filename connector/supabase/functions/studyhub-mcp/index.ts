// Entry point: Supabase Edge Function "studyhub-mcp". The logic lives in server.ts.
import { createClient } from "npm:@supabase/supabase-js@2.118.0";
import { app } from "./server.ts";

const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") ?? "{}").default;
const admin = createClient(Deno.env.get("SUPABASE_URL")!, SERVICE_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
Deno.serve((req) => app(req, admin));
