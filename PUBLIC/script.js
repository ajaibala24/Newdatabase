const form = document.getElementById("studentForm");
const message = document.getElementById("message");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    try {

        const response = await fetch("/api/students", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email
            })

        });

        const data = await response.json();

        if (response.ok) {

            message.textContent = data.message;
            message.style.color = "green";

            form.reset();

        } else {

            message.textContent = data.message;
            message.style.color = "red";

        }

    } catch (error) {

        message.textContent = "Unable to connect to server";
        message.style.color = "red";

        console.log(error);
    }

});