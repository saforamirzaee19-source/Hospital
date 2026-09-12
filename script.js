// Login Form 
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (passwordInput && togglePassword) {
  togglePassword.addEventListener("click", function () {
    const isPasswordHidden = passwordInput.type === "password";
    passwordInput.type = isPasswordHidden ? "text" : "password";
    togglePassword.textContent = isPasswordHidden ? "🙈" : "👁";
    togglePassword.setAttribute("aria-label", isPasswordHidden ? "Hide password" : "Show password");
    togglePassword.setAttribute("title", isPasswordHidden ? "Hide password" : "Show password");
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    if (username === "" || password === "") {
      errorMsg.textContent = "Please fill in both fields.";
      errorMsg.classList.add("show");
      return;
    }

    if (password.length < 8) {
      errorMsg.textContent = "Password must be at least 8 characters.";
      errorMsg.classList.add("show");
      return;
    }

    errorMsg.classList.remove("show");
    window.location.href = "dashboard.html";
  });
}

// Dark Mode 
const themeButtons = document.querySelectorAll(".theme-toggle");

function applyTheme(theme) {
  const selectedTheme = theme === "dark" ? "dark" : "light";

  document.body.classList.toggle("dark-theme", selectedTheme === "dark");
  document.body.classList.toggle("light-theme", selectedTheme === "light");
  localStorage.setItem("theme", selectedTheme);

  themeButtons.forEach((button) => {
    const icon = button.querySelector(".toggle-icon");
    const text = button.querySelector(".toggle-text");

    if (icon) {
      icon.textContent = selectedTheme === "dark" ? "☀️" : "🌙";
    }

    if (text) {
      text.textContent = selectedTheme === "dark" ? "Light" : "Dark";
    }

    button.setAttribute(
      "aria-label",
      selectedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  });
}

const savedTheme = localStorage.getItem("theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
applyTheme(savedTheme || preferredTheme);

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
    applyTheme(nextTheme);
  });
});


