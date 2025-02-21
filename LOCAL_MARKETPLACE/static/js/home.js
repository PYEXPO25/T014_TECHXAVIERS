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

// Ensure DOM is loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = sessionStorage.getItem("loggedIn") === "true"; // Use sessionStorage

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
});

// Function to handle login
function loginUser() {
    sessionStorage.setItem("loggedIn", "true"); // Use sessionStorage
    window.location.reload(); // Refresh page to update UI
}

// Function to handle logout
function logoutUser() {
    sessionStorage.removeItem("loggedIn"); // Clear sessionStorage
    window.location.reload();
}

// Search Function
function search() {
    let searchQuery = document.getElementById("search-input").value.toLowerCase();
    alert("Searching for: " + searchQuery);
}
window.search = search; // Make function globally available

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

// Image Slider Functionality
document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = document.querySelectorAll('.slide').length;
    let slideInterval;

    function updateSlidePosition() {
        slides.style.transform = `translateX(${-currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlidePosition();
        resetAutoSlide();
    }

    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    document.querySelector('.slideshow-container').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.slideshow-container').addEventListener('mouseleave', startAutoSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => goToSlide(index));
    });

    updateSlidePosition();
    startAutoSlide();
});

// Redirect to home page on clicking the back button
function goHome() {
    window.location.href = "/home/"; // Ensure the correct Django URL mapping
}
