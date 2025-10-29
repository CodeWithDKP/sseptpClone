import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import "./components.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Logo always visible */}
      <div className={`logo-fixed ${scrolled ? "logo-small" : ""}`}>
        <img src={logo} alt="SSE Logo" />
      </div>

      {/* Navbar that fades in on scroll */}
      <nav className={`navbar-container ${scrolled ? "show-navbar" : ""}`}>
        <div className="container d-flex align-items-center justify-content-between">
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
