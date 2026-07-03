const SUPABASE_URL = "ecreiwbowkurvckywpgt";

const SUPABASE_ANON_KEY = "sb_publishable_n_Yn3TAXAUgOxxWlz9EhUg_7-zQPPGg";

const client = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

console.log("Supabase Connected!");
document
.getElementById("studentForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const reg =
    document.getElementById("reg").value;

    const course =
    document.getElementById("course").value;

    const status =
    document.getElementById("status");

    status.innerHTML = "Saving...";
    try {

    const { data, error } = await client
        .from("students")
        .insert([
            {
                name: name,
                reg_number: reg,
                course: course
            }
        ]);

    if (error) {
        status.innerHTML = error.message;
        console.error(error);
        return;
    }

    status.innerHTML = "Student registered successfully!";

    document.getElementById("studentForm").reset();

} catch (err) {

    status.innerHTML = err.message;
    console.error(err);

}
});
