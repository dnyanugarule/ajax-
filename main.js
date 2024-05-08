// JavaScript for the current page
let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form from submitting the default way

    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phone").value;

    let postObject = {
        email,
        password,
        name,
        phone,
        username,
        address: {
            city,
        },
    };

    let storedUser = JSON.parse(localStorage.getItem("users")) || [];
    storedUser.unshift(postObject); // Add the new user to the beginning of the array
    localStorage.setItem("users", JSON.stringify(storedUser)); // Store the updated array in local storage

    // Redirect to the new page to view registered users
    window.location.href = "registered-users.html"; // Change to your target page
});
