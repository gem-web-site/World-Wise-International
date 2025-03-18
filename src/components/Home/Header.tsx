"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/Home/Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToHomePage = () => {
    router.push("/");
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* Left Navigation */}
        <nav className={styles.leftNav}>
          <ul>
            <li>
              <a href="/newpage/blog">Blog & News</a>
            </li>
            <li>
              <a href="/newpage/gems">Gemstone</a>
            </li>
          </ul>
        </nav>

        {/* Logo (Centered) */}
        <div className={styles.logo} onClick={goToHomePage}>
          <img src="/logo.png" alt="Logo" className={styles.logoImage} />
        </div>

        {/* Right Navigation */}
        <nav className={styles.rightNav}>
          <ul>
            <li>
              <a href="/newpage/services">Services</a>
            </li>
            <li>
              <a href="/newpage/about">About Us</a>
            </li>
            <li>
              <a href="/newpage/contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
          <div className={styles.mobileNavHeader}>
            <div className={styles.logo} onClick={goToHomePage}>
              <img src="/logo.png" alt="Logo" className={styles.logoImage} />
            </div>
            <div className={styles.closeIcon} onClick={toggleMenu}>
              <FaTimes />
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <ul className={styles.mobileNavLinks}>
            <li>
              <a href="/newpage/services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="/newpage/gems">Gemstone</a>
            </li>
            <li>
              <a href="/newpage/about" onClick={toggleMenu}>
                About Us
              </a>
            </li>
            <li>
              <a href="/newpage/contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
            <li>
              <a href="/newpage/blog" onClick={toggleMenu}>
                Blog & News
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
