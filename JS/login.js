// login.js

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector("#submitButton");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        const userName = document.querySelector('input[name="UserName"]').value;
        const password = document.querySelector('input[name="Password"]').value;

        fetch(" https://657c84fc853beeefdb99939a.mockapi.io/api/v1/user")
            .then(response => response.json())
            .then(users => {
                const matchingUser = users.find(user => user.username === userName && user.password === password);

                if (matchingUser) {

                    localStorage.setItem('userId', matchingUser.id);

                    window.location.href = "index.html";
                } else {
                    alert("Invalid login or password.");
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    });
});
