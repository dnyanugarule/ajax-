// JavaScript event listener for the button with ID "btn"
let btn = document.getElementById("btn");

// Add an event listener to the button for the "click" event
btn.addEventListener("click", (e) => {
    // Prevent the default form submission behavior (like refreshing the page)
    e.preventDefault();

    // Get input values from form fields by their element IDs
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phone").value;

    // Create an object to represent the new user, including address details
    let postObject = {
        email,   // User's email address
        password,   // User's password
        name,   // User's name
        phone,   // User's phone number
        username,   // User's username
        address: {
            city,   // User's city
        },
    };

    // Retrieve stored users from local storage and parse them into a JavaScript array
    // If no users are stored, create an empty array
    let storedUser = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the start of the stored users array
    storedUser.unshift(postObject);

    // Store the updated users array back into local storage as a JSON string
    localStorage.setItem("users", JSON.stringify(storedUser));

    // Redirect to the registered users page to show the updated list of users
    window.location.href = "registered-users.html"; // Redirect to the desired page
});
