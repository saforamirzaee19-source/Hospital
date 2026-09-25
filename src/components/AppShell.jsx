// This mirrors the sidebar + topbar markup that was copy-pasted identically
// across dashboard.html, find-doctor.html and find-clinic.html. Pulling it
// into one component avoids re-typing the exact same JSX three times; the
// markup, classes and ids are unchanged from the originals.

const NAV_ITEMS = [
  { href: "/dashboard", icon: "🏠", label: "Dashboard", key: "dashboard" },
  { href: "#", icon: "📅", label: "Appointments", key: "appointments" },
  { href: "/find-doctor", icon: "🩺", label: "Find Doctor", key: "find-doctor" },
  { href: "/find-clinic", icon: "🏥", label: "Find Clinic", key: "find-clinic" },
  { href: "#", icon: "💬", label: "Chat", key: "chat" },
  { href: "#", icon: "🛒", label: "Find MarketPlace", key: "marketplace" },
  { href: "#", icon: "💊", label: "Find Pharmacy", key: "pharmacy" },
  { href: "#", icon: "👪", label: "My Dependents", key: "dependents" },
  { href: "#", icon: "👤", label: "My Account", key: "account" },
  { href: "#", icon: "⚙️", label: "Settings", key: "settings" },
];

function Sidebar({ activeKey }) {
  return (
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-logo">
        <span className="logo-badge">M</span>
        <span className="logo-text">MyPatientHUB</span>
      </div>

      <nav>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className={item.key === activeKey ? "active" : undefined}
            aria-current={item.key === activeKey ? "page" : undefined}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-help">
        Need help? <br /> Ask us anything!
      </div>
      <button className="sidebar-help-mini" type="button" aria-label="Need help? Ask us anything!" title="Need help? Ask us anything!">?</button>
    </aside>
  );
}

function Topbar({ crumb, title }) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <div>
          <div className="crumbs">🏠 / {crumb}</div>
          <h2>{title}</h2>
        </div>
        <button className="sidebar-toggle" id="sidebarToggle" type="button" aria-label="Toggle sidebar" aria-expanded="true" aria-controls="sidebar">
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
      <div className="topbar-right">
        <input type="text" placeholder="Type here..." />
        <button className="theme-toggle" type="button" aria-label="Toggle dark mode">
          <span className="toggle-icon">🌙</span>
          <span className="toggle-text">Dark</span>
        </button>
        <span className="logout" onClick={() => (window.location.href = "/")}>🔒 Log out</span>
        <span>⚙️</span>
        <span>🔔</span>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>© 2026, made with ❤ by <strong>MyPiHUB</strong> for a better web.</div>
      <div className="links">
        <a href="#">MyPatientHUB</a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
      </div>
    </footer>
  );
}

export default function AppShell({ activeKey, crumb, title, children }) {
  return (
    <div className="dashboard-layout">
      <div className="sidebar-backdrop" id="sidebarBackdrop"></div>
      <Sidebar activeKey={activeKey} />
      <div className="main">
        <Topbar crumb={crumb} title={title} />
        {children}
      </div>
    </div>
  );
}
