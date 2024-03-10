import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/images/لوغو لغة جديد-01.png"

export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid bg-light">
    <a className="navbar-brand" href="#">
      <img  src={Logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link " aria-current="page" href="#">الصفحة الرئيسئة</a>
        <a className="nav-link" href="#">من نحن؟</a>
        <a className="nav-link" href="#">خدماتنا</a>
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">تواصل معنا</a>
      </div>
    </div>
  </div>
</nav>
    
    </>
  )
}
