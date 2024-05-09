// Event listener to trigger when the DOM content has fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the table body element to populate with user data
    const tbody = document.getElementById("userTableBody");

    // Clear any existing content in the table body
    tbody.innerHTML = "";

    // Retrieve the user data from local storage and parse it into a JavaScript object/array
    // If there's no data, default to an empty array
    const storedUser = JSON.parse(localStorage.getItem("users")) || [];

    // Loop through the array of stored users and create table rows
    storedUser.map((user, index) => {
        // Add a new row to the table with user details
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>  // Serial number based on the index
                <td>${user.name}</td>  // User's name
                <td>${user.username}</td>  // User's username
                <td>${user.email}</td>  // User's email
                <td>${user.phone}</td>  // User's phone number
                <td>${user.address.city}</td>  // User's city from the address object
            </tr>
        `;
    });
});
