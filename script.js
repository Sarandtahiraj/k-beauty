/* ================= MOBILE MENU (SIMPLIFIED) ================= */
const menuBtn = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function() {
    navMenu.classList.toggle("show");
    
    // Ndrysho ikonën
    if (navMenu.classList.contains("show")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});

/* ================= LOAD MORE (SIMPLIFIED) ================= */
const loadBtn = document.getElementById("loadMoreBtn");
const allProducts = document.querySelectorAll(".product-item");
let shownProducts = 3;

// Fshih produktet që nuk duhen shfaqur fillimisht
for (let i = shownProducts; i < allProducts.length; i++) {
    allProducts[i].style.display = "none";
}

loadBtn.addEventListener("click", function() {
    // Shfaq 2 produkte të reja
    shownProducts += 2;
    
    for (let i = 0; i < shownProducts; i++) {
        if (allProducts[i]) {
            allProducts[i].style.display = "block";
        }
    }
    
    // Fshi butonin kur të jenë shfaqur të gjitha
    if (shownProducts >= allProducts.length) {
        loadBtn.style.display = "none";
    }
});

/* ================= FORM SUBMIT (SIMPLIFIED) ================= */
const form = document.querySelector(".contact-f");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    if (name === "" || email === "") {
        alert("Ju lutem plotësoni të gjitha fushat!");
        return;
    }
    
    alert("Faleminderit! Forma juaj u dërgua.");
    form.reset();
});