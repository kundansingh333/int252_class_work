import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "24px" }}>Logo</div>
      <div>
        <a
          href="#home"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          Home
        </a>
        <a
          href="#about"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          About
        </a>
        <a
          href="#contact"
          style={{ color: "#fff", margin: "0 10px", textDecoration: "none" }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
