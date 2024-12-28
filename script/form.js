    const form = document.getElementById("contactForm");
    const formResponse = document.getElementById("formResponse");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        try {
            const response = await fetch("contact.php", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();

            formResponse.innerHTML = `<div class="alert alert-${
                result.success ? "success" : "danger"
            }">${result.message}</div>`;

            if (result.success) form.reset();
        } catch (error) {
            formResponse.innerHTML = `<div class="alert alert-danger">Une erreur est survenue. Veuillez réessayer plus tard.</div>`;
        }
    });