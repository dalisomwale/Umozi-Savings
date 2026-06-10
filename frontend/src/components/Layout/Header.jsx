import React from "react";

const BankLogo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <path
      d="M4 10L12 3L20 10V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V10Z"
      stroke="#ff7300"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 21V15H16V21"
      stroke="#ff7300"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7V9"
      stroke="#ff7300"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="13" r="1" fill="#ff7300" />
    <circle cx="16" cy="13" r="1" fill="#ff7300" />
    <circle cx="8" cy="13" r="1" fill="#ff7300" />
  </svg>
);

const Header = ({ admin, onLogout }) => {
  return (
    <header
      style={{
        background: "rgba(0, 94, 8, 0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        position: "sticky",
        top: 0,
        zIndex: 10,
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
        borderBottom: "1px solid rgba(167,243,208,0.2)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            background: "rgba(234,88,12,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <BankLogo />
        </div>
        <div>
          <p
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            Umozi Savings
          </p>
          <p
            style={{
              fontSize: 10,
              color: "#A7F3D0",
              margin: 0,
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            A Village Banking System
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
