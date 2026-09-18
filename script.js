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
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";  //===> CSS Media Featur
applyTheme(savedTheme || preferredTheme);

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme", !isDark);
    applyTheme(isDark ? "dark" : "light");
  });
});

// Find doctor search
const doctorSearchForm = document.getElementById("doctorSearchForm");
const doctorSearch = document.getElementById("doctorSearch");
const locationSearch = document.getElementById("locationSearch");
const useLocationButton = document.getElementById("useLocation");
const doctorSearchStatus = document.getElementById("doctorSearchStatus");
const serviceCards = document.querySelectorAll(".service-card");
const serviceCount = document.getElementById("serviceCount");
const emptyServices = document.getElementById("emptyServices");

if (doctorSearchForm && doctorSearch) {
  const filterServices = () => {
    const query = doctorSearch.value.trim().toLowerCase();
    let visibleServices = 0;

    serviceCards.forEach((card) => {
      const matches = !query || card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visibleServices += 1;
    });

    if (serviceCount) serviceCount.textContent = `${visibleServices} ${visibleServices === 1 ? "service" : "services"}`;
    if (emptyServices) emptyServices.hidden = visibleServices !== 0;
  };

  doctorSearch.addEventListener("input", filterServices);
  doctorSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    filterServices();
    const location = locationSearch ? locationSearch.value.trim() : "";
    const query = doctorSearch.value.trim() || "all services";
    if (doctorSearchStatus) doctorSearchStatus.textContent = `Showing ${query}${location ? ` near ${location}` : ""}.`;
  });
}

if (useLocationButton && locationSearch && doctorSearchStatus) {
  useLocationButton.addEventListener("click", () => {
    if (!navigator.geolocation) {
      doctorSearchStatus.textContent = "Location is not available in this browser.";
      return;
    }

    useLocationButton.disabled = true;
    doctorSearchStatus.textContent = "Finding your location...";
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        locationSearch.value = `${coords.latitude.toFixed(3)}, ${coords.longitude.toFixed(3)}`;
        doctorSearchStatus.textContent = "Location added. Search to find nearby care.";
        useLocationButton.disabled = false;
      },
      () => {
        doctorSearchStatus.textContent = "We could not access your location. Enter a neighborhood or zip code instead.";
        useLocationButton.disabled = false;
      }
    );
  });
}

// Sidebar burger menu
// Desktop: toggles between the full sidebar (with labels) and a mini icon-only sidebar.
// Mobile/tablet: toggles the sidebar as an off-canvas drawer with a backdrop.
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const MOBILE_BREAKPOINT = 1000;

if (sidebar && sidebarToggle) {
  const isMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;

  const openMobileSidebar = () => {
    sidebar.classList.add("open");
    if (sidebarBackdrop) sidebarBackdrop.classList.add("show");
    sidebarToggle.classList.add("is-active");
    sidebarToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMobileSidebar = () => {
    sidebar.classList.remove("open");
    if (sidebarBackdrop) sidebarBackdrop.classList.remove("show");
    sidebarToggle.classList.remove("is-active");
    sidebarToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  const setDesktopCollapsed = (collapsed) => {
    sidebar.classList.toggle("collapsed", collapsed);
    sidebarToggle.classList.toggle("is-active", collapsed);
    sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
    localStorage.setItem("sidebarCollapsed", collapsed ? "1" : "0");
  };

  // Restore the saved preference on desktop; start closed on mobile
  if (!isMobile()) {
    setDesktopCollapsed(localStorage.getItem("sidebarCollapsed") === "1");
  } else {
    sidebarToggle.setAttribute("aria-expanded", "false");
  }

  sidebarToggle.addEventListener("click", () => {
    if (isMobile()) {
      if (sidebar.classList.contains("open")) {
        closeMobileSidebar();
      } else {
        openMobileSidebar();
      }
    } else {
      setDesktopCollapsed(!sidebar.classList.contains("collapsed"));
    }
  });

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", closeMobileSidebar);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar.classList.contains("open")) {
      closeMobileSidebar();
    }
  });

  // Tapping a nav link on mobile should close the drawer
  sidebar.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (isMobile()) closeMobileSidebar();
    });
  });

  // Keep things sane when the viewport crosses the mobile/desktop breakpoint
  let wasMobile = isMobile();
  window.addEventListener("resize", () => {
    const nowMobile = isMobile();
    if (nowMobile === wasMobile) return;

    if (nowMobile) {
      sidebar.classList.remove("collapsed");
      sidebarToggle.setAttribute("aria-expanded", "false");
    } else {
      closeMobileSidebar();
      setDesktopCollapsed(localStorage.getItem("sidebarCollapsed") === "1");
    }
    wasMobile = nowMobile;
  });
}


// Chronic Wellness Radar Chart

const wellnessCanvas = document.getElementById("wellnessChart");

if (wellnessCanvas) {
  const wellnessCtx = wellnessCanvas.getContext("2d");

  new Chart(wellnessCtx, {

      type: "radar",

      data: {

          labels: [
              "2017",
              "2018",
              "2019",
              "2020",
              "2021",
              "2022"
          ],

          datasets: [

              {
                  label: "Malaria",
                  data: [85, 55, 30, 25, 110, 20],

                  backgroundColor: "rgba(0, 139, 255, 0.15)",
                  borderColor: "#008df5",
                  pointBackgroundColor: "#008df5",

                  borderWidth: 2
              },

              {
                  label: "Cold",
                  data: [65, 45, 35, 75, 15, 90],

                  backgroundColor: "rgba(0, 210, 145, 0.15)",
                  borderColor: "#00d291",
                  pointBackgroundColor: "#00d291",

                  borderWidth: 2
              },

              {
                  label: "Typhoid",
                  data: [45, 75, 90, 15, 35, 25],

                  backgroundColor: "rgba(255, 166, 0, 0.12)",
                  borderColor: "#ffa600",
                  pointBackgroundColor: "#ffa600",

                  borderWidth: 2
              },

              {
                  label: "Cough",
                  data: [80, 20, 90, 30, 55, 25],

                  backgroundColor: "rgba(255, 64, 91, 0.10)",
                  borderColor: "#ff405b",
                  pointBackgroundColor: "#ff405b",

                  borderWidth: 2
              }

          ]
      },

      options: {

          responsive: true,
          maintainAspectRatio: false,

          scales: {

              r: {

                  min: 0,
                  max: 120,

                  ticks: {
                      stepSize: 30,
                      color: "#555",
                      backdropColor: "transparent"
                  },

                  grid: {
                      color: "#ddd"
                  },

                  angleLines: {
                      color: "#ddd"
                  },

                  pointLabels: {
                      color: "#999",
                      font: {
                          size: 13
                      }
                  }

              }

          },

          plugins: {

              legend: {
                  position: "bottom",

                  labels: {
                      usePointStyle: true,
                      padding: 15,
                      font: {
                          size: 14
                      }
                  }
              }

          }

      }

  });
}


// Appointment Bar Chart

const appointmentCanvas = document.getElementById("appointmentChart");

if (appointmentCanvas) {
  const appointmentCtx = appointmentCanvas.getContext("2d");

  new Chart(appointmentCtx, {

      type: "bar",

      data: {

          labels: [
              "Jan",
              "Feb.",
              "Mar.",
              "Apr.",
              "May",
              "Jun"
          ],

          datasets: [

              {
                  label: "Emergency",

                  data: [44, 55, 41, 67, 22, 43],

                  backgroundColor: "#078cf0",

                  borderRadius: {
                      topLeft: 0,
                      topRight: 0
                  },

                  stack: "appointments"
              },

              {
                  label: "Examination",

                  data: [13, 23, 20, 8, 13, 27],

                  backgroundColor: "#00d69a",

                  stack: "appointments"
              },

              {
                  label: "Consultation",

                  data: [11, 17, 15, 15, 21, 14],

                  backgroundColor: "#ffa914",

                  stack: "appointments"
              },

              {
                  label: "Routine Checkup",

                  data: [21, 7, 25, 13, 22, 8],

                  backgroundColor: "#ff405d",

                  borderRadius: 10,

                  stack: "appointments"
              }

          ]

      },

      options: {

          responsive: true,
          maintainAspectRatio: false,

          scales: {

              x: {

                  stacked: true,

                  grid: {
                      display: false
                  }

              },

              y: {

                  stacked: true,

                  beginAtZero: true,

                  max: 120,

                  ticks: {
                      stepSize: 30
                  },

                  grid: {
                      color: "#ddd"
                  }

              }

          },

          plugins: {

              legend: {
                  position: "bottom",

                  labels: {
                      usePointStyle: true,
                      padding: 15
                  }
              }

          }

      },

      plugins: [

          {

              id: "barLabels",

              afterDatasetsDraw(chart) {

                  const {
                      ctx
                  } = chart;

                  chart.data.datasets.forEach((dataset, datasetIndex) => {

                      const meta = chart.getDatasetMeta(datasetIndex);

                      meta.data.forEach((bar, index) => {

                          const value = dataset.data[index];

                          if (!value) return;

                          ctx.save();

                          ctx.fillStyle = "white";
                          ctx.font = "bold 14px Arial";
                          ctx.textAlign = "center";
                          ctx.textBaseline = "middle";

                          ctx.fillText(
                              value,
                              bar.x,
                              bar.y + bar.height / 2
                          );

                          ctx.restore();

                      });

                  });

              }

          }

      ]

  });
}


// Leaflet Map

const mapElement = document.getElementById("map");

if (mapElement && window.L) {
  const map = L.map("map").setView(
      [3.4300, 101.5700],
      10
  );

  L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
          attribution: "&copy; OpenStreetMap contributors"
      }
  ).addTo(map);

  const locations = [
      [3.432, 101.570],
      [3.315, 101.680],
      [3.250, 101.690]
  ];

  locations.forEach((location) => {
      L.marker(location).addTo(map);
  });

  const mapButton = document.querySelector(".map-buttons button:first-child");
  const satelliteButton = document.querySelector(".map-buttons button:last-child");

  const streetLayer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
          attribution: "&copy; OpenStreetMap contributors"
      }
  );

  const satelliteLayer = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
          attribution: "Tiles &copy; Esri"
      }
  );

  if (mapButton && satelliteButton) {
    mapButton.addEventListener("click", () => {
      map.removeLayer(satelliteLayer);
      streetLayer.addTo(map);
      mapButton.classList.add("active");
      satelliteButton.classList.remove("active");
    });

    satelliteButton.addEventListener("click", () => {
      map.removeLayer(streetLayer);
      satelliteLayer.addTo(map);
      satelliteButton.classList.add("active");
      mapButton.classList.remove("active");
    });
  }

  const fullscreenButton = document.querySelector(".fullscreen");

  if (fullscreenButton) {
    fullscreenButton.addEventListener("click", () => {
      if (mapElement.requestFullscreen) {
        mapElement.requestFullscreen();
      }
    });
  }
}
