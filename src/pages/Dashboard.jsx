import useLegacyScript from "../hooks/useLegacyScript.js";
import AppShell, { SiteFooter } from "../components/AppShell.jsx";

export default function Dashboard() {
  useLegacyScript();

  return (
    <AppShell activeKey="dashboard" crumb="Dashboard" title="Dashboard">
      {/* Page content */}
      <div className="content">
        <h1>Welcome To MyPatientHUB!</h1>

        <div className="grid">
          {/* Promotion by Clinics */}
          <div className="card">
            <div className="card-header">
              <h3>Promotion by Clinics</h3>
              <span>ⓘ</span>
            </div>
            <div className="donut-row">
              <div
                className="donut"
                style={{
                  background:
                    "conic-gradient(#e6007e 0% 34%, #241a3d 34% 41%, #f5b642 41% 59%, #1fae5c 59% 96%, #3b82f6 96% 100%)",
                }}
              ></div>
              <div className="legend">
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#e6007e" }}></span>Klinik Lee Healthcare</span>
                  <span>19%</span>
                </div>
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#241a3d" }}></span>Klinik Bandar Baru Nilai</span>
                  <span>4%</span>
                </div>
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#f5b642" }}></span>Klinik Mediviron Giant Nilai</span>
                  <span>10%</span>
                </div>
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#1fae5c" }}></span>KLINIK NILAI IMPIAN</span>
                  <span>21%</span>
                </div>
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#3b82f6" }}></span>Klinik Mediviron</span>
                  <span>2%</span>
                </div>
              </div>
            </div>
            <button className="more-btn">MORE DETAILS</button>
          </div>

          {/* Promotion by Pharmacies */}
          <div className="card">
            <div className="card-header">
              <h3>Promotion by Pharmacies</h3>
              <span>ⓘ</span>
            </div>
            <div className="donut-row">
              <div
                className="donut"
                style={{
                  background:
                    "conic-gradient(#241a3d 0% 27%, #3b82f6 27% 49%, #e6007e 49% 58%, #1fae5c 58% 75%, #60a5fa 75% 100%)",
                }}
              ></div>
              <div className="legend">
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#241a3d" }}></span>ALPRO PHARMACY NILAI</span>
                  <span>15%</span>
                </div>
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#3b82f6" }}></span>ALPRO PHARMACY PEKAN NILAI</span>
                  <span>12%</span>
                </div>
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#e6007e" }}></span>OK PHARMACY</span>
                  <span>5%</span>
                </div>
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#1fae5c" }}></span>PHARMART PHARMACY NILAI</span>
                  <span>9%</span>
                </div>
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#60a5fa" }}></span>Health Lane Family Pharmacy</span>
                  <span>14%</span>
                </div>
              </div>
            </div>
            <button className="more-btn">MORE DETAILS</button>
          </div>

          {/* Smart Market Usage by app */}
          <div className="card">
            <div className="card-header">
              <h3>Smart Market Usage by app</h3>
              <span>ⓘ</span>
            </div>
            <div className="donut-row">
              <div
                className="donut"
                style={{ background: "conic-gradient(#e6007e 0% 89%, #a72553 89% 100%)" }}
              ></div>
              <div className="legend">
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#e6007e" }}></span>Food Panda</span>
                  <span>25%</span>
                </div>
                <div className="legend-item">
                  <span className="name"><span className="dot" style={{ background: "#c01562" }}></span>Grab Food</span>
                  <span>3%</span>
                </div>
              </div>
            </div>
            <button className="more-btn">MORE DETAILS</button>
          </div>

          {/* Health Index */}
          <div className="card">
            <div className="card-header">
              <h3>Health Index</h3>
              <span>ⓘ</span>
            </div>
            <div className="health-value">70% <span className="up">+3%</span></div>
            <div className="health-chart">
              <svg viewBox="0 0 300 90" width="100%" height="100%" preserveAspectRatio="none">
                <polyline
                  fill="none"
                  stroke="#7a1fa2"
                  strokeWidth="3"
                  points="0,60 30,45 60,55 90,30 120,50 150,25 180,45 210,20 240,40 270,15 300,35"
                ></polyline>
              </svg>
            </div>
          </div>

          {/* Top Doctors table (spans full width) */}
          <div className="card" style={{ gridColumn: "1 / -1" }}>
            <div className="card-header">
              <h3>Top Doctors</h3>
              <span>ⓘ</span>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Doctor</th>
                    <th>Specialty</th>
                    <th>Fee</th>
                    <th>Booking Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="doc-name"><span className="avatar-flag">🇲🇾</span> Dr Affan</td>
                    <td>Cardiologist</td>
                    <td>RM 400</td>
                    <td>40%</td>
                  </tr>
                  <tr>
                    <td className="doc-name"><span className="avatar-flag">🇲🇾</span> Dr Sarah Lim</td>
                    <td>Pediatrician</td>
                    <td>RM 250</td>
                    <td>32%</td>
                  </tr>
                  <tr>
                    <td className="doc-name"><span className="avatar-flag">🇲🇾</span> Dr Kumar</td>
                    <td>Dermatologist</td>
                    <td>RM 300</td>
                    <td>28%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <main className="dashboard-grid">
        {/* Wellness Chart */}
        <section className="card wellness-card">
          <div className="card-header">
            <h2>Chronic wellness Tracker</h2>
            <span className="menu">☰</span>
          </div>
          <div className="chart-container">
            <canvas id="wellnessChart"></canvas>
          </div>
        </section>

        {/* Appointment Chart */}
        <section className="card appointment-chart-card">
          <div className="card-header">
            <h2>Appointment</h2>
            <span className="menu">☰</span>
          </div>
          <div className="chart-container">
            <canvas id="appointmentChart"></canvas>
          </div>
        </section>

        {/* Map */}
        <section className="map-card">
          <div className="map-buttons">
            <button className="active">Map</button>
            <button>Satellite</button>
          </div>
          <button className="fullscreen">⛶</button>
          <div id="map"></div>
        </section>

        {/* Previous Appointments */}
        <section className="card previous-card">
          <h2>Previous Appointments</h2>

          <div className="appointment">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Doctor" />
            <div className="doctor-info">
              <h3>Dr.Mustafa</h3>
              <p>Emergency</p>
            </div>
            <div className="appointment-date">
              <span>Tuesday, April 5</span>
              <b>⋮</b>
            </div>
          </div>

          <div className="appointment">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Doctor" />
            <div className="doctor-info">
              <h3>DR. KHIRULLAH</h3>
              <p>consultant</p>
            </div>
            <div className="appointment-date">
              <span>Friday, November 2</span>
              <b>⋮</b>
            </div>
          </div>

          <div className="appointment">
            <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Doctor" />
            <div className="doctor-info">
              <h3>Dr. Ahmad</h3>
              <p>Specialist</p>
            </div>
            <div className="appointment-date">
              <span>Monday, January 15</span>
              <b>⋮</b>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </AppShell>
  );
}
