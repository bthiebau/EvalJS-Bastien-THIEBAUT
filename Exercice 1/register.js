const registerForm = document.querySelector("#register-form");
const errorDiv = document.querySelector("#error");
const successDiv = document.querySelector("#success")
const spinner = document.querySelector("#loading-spinner");

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    errorDiv.classList.add("hidden");
    spinner.classList.remove("d-none");

    const formData = new FormData(registerForm);

    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm_password")

    try {
        console.log(password);
        console.log(confirmPassword);
        console.log(password.length);
        if(password.length >= 8 && password === confirmPassword){
            const res = await fetch('http://localhost:8000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            if(!res.ok){
                errorDiv.innerText = "Erreur survenue lors de l'inscription";
                errorDiv.classList.remove("d-none");
                spinner.classList.add("d-none");
                console.error("Erreur survenue lors de l'inscription", res.status);
                console.log("res pas ok");
                registerForm.reset();
                return;
            }
            console.log("res est OK");
            const data = await res.json();
            spinner.classList.add("d-none");
            successDiv.innerText = "Felicitation vous êtes inscrit !";
            successDiv.classList.remove("d-none");
            registerForm.reset();

        } else {
            console.log("else")
            errorDiv.innerText = "Mot(s) de passe(s) incorrect(s)";
            errorDiv.classList.remove("d-none");
            spinner.classList.add("d-none");
            registerForm.reset();
            return; 
        }

    } catch (err) {
        console.log("catch");
        errorDiv.innerText = "Erreur survenue lors de l'inscription, reéssayer plus tard";
        errorDiv.classList.remove("d-none");
    }

})