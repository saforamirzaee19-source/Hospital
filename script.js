// Login form on the page
const loginForm = document.getElementById("loginForm");

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

    errorMsg.classList.remove("show");
    window.location.href = "dashboard.html";
  });
}
