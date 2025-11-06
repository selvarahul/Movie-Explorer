import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "#f1f5f9",
        textAlign: "center",
      }}
    >  <Link
        to="/"
        style={{
          backgroundColor: "#2563eb",
          color: "#fff",
          padding: "12px 28px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "600",
          boxShadow: "0 4px 10px rgba(37, 99, 235, 0.4)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#1d4ed8";
          e.target.style.boxShadow = "0 6px 14px rgba(37, 99, 235, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#2563eb";
          e.target.style.boxShadow = "0 4px 10px rgba(37, 99, 235, 0.4)";
        }}
      >
        Go to Home
      </Link>
    </div>
  );
}
