// JavaScript for the new page
document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.getElementById("userTableBody");
    tbody.innerHTML = "";

    const storedUser = JSON.parse(localStorage.getItem("users")) || [];

    storedUser.map((user, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.address.city}</td>
            </tr>
        `;
    });
});
