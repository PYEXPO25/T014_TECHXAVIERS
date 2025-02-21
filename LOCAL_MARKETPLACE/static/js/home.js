document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    const loginButton = document.querySelector(".btn.login");
    const logoutButton = document.querySelector(".btn.logout");
    const profileIcon = document.querySelector(".profile-icon")?.closest("li");

    if (isLoggedIn) {
        // User is logged in: Remove Login button, keep Profile & Logout

        if (loginButton) loginButton.parentElement.remove();
    } else {
        // User is NOT logged in: Remove Profile & Logout, keep Login button
        
        if (profileIcon) profileIcon.remove();
        if (logoutButton) logoutButton.parentElement.remove();
        
    }

    // Search Function
    function search() {
        let searchQuery = document.getElementById("search-input").value.toLowerCase();
        alert("Searching for: " + searchQuery);
    }
    window.search = search; // Make function available globally

    // Redirect to farmer detail page when clicking a product
    document.querySelectorAll(".product").forEach(product => {
        product.addEventListener("click", function () {
            let farmerDetailUrl = this.getAttribute("data-farmer-url");
            if (farmerDetailUrl) {
                window.location.href = farmerDetailUrl;
            } else {
                alert("Farmer details not available!");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slide-track img");
    const totalSlides = slides.length;
    const track = document.querySelector(".slide-track");

    function moveSlide() {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        track.style.transform = `translateX(${-index * 1500}px)`;
    }

    setInterval(moveSlide, 5000); // Change every **5 seconds**
});

// Function to simulate login (replace with real authentication)
function loginUser() {
    localStorage.setItem("loggedIn", "true");
    window.location.reload(); // Refresh page to update UI
}

function openMenu() {
    document.getElementById("sideMenu").style.left = "0";
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add("dull-bg");
}

function closeMenu() {
    document.getElementById("sideMenu").style.left = "-260px";
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("dull-bg");
}

// Function to simulate logout
function logoutUser() {
    localStorage.removeItem("loggedIn");
    window.location.reload();
}
