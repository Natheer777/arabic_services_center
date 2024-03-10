import React from "react";
import "./Navbar.css";
import Logo from "../../assets/images/لوغو لغة جديد-01.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid bg-light">
          <Link className="navbar-brand" to="/arabic_services_center/">
            <img src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link " aria-current="page" to="/arabic_services_center/">
                الصفحة الرئيسئة
              </Link>
              <Link className="nav-link" to="/How">
                من نحن؟
              </Link>
              <Link className="nav-link" to="/OurServices">
                خدماتنا
              </Link>
              <Link
                className="nav-link"
                to="/Contact"
                tabindex="-1"
                aria-disabled="true"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
