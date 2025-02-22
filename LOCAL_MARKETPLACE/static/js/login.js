
function goBack() {
    window.location.href = "{% url 'home' %}";
    }
function validateLogin(event) {
    event.preventDefault(); // Prevent default form submission

    // User credentials
    const users = {
        "admin": { password: "admin123", redirect: "{% url 'home' %}" },
        "user1": { password: "password1", redirect: "https://chatgpt.com/" }
    };

    // Get user input
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Validate user credentials
    if (users[username] && users[username].password === password) {
        window.location.href = users[username].redirect; // Redirect to assigned page
    } else {
        errorMessage.style.display = "block"; // Show error message
    }
}
