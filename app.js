const SUPABASE_URL = "ecreiwbowkurvckywpgt";

const SUPABASE_ANON_KEY = "sb_publishable_n_Yn3TAXAUgOxxWlz9EhUg_7-zQPPGg";

const client = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase Connected!");
