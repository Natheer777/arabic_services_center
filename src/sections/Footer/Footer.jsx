import React from 'react';
// import { FontAwesomeIcon } from 'font-awesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from 'react-icons/fa';
import { BsFacebook , BsTwitter , BsInstagram , BsYoutube} from 'react-icons/bs'
import './Footer.css'
import logo from '../../assets/images/لوغو لغة جديد-01.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerr">
        <div className="rowr">
          <div className='logo_white navbar-brand-footer'><img src={logo} alt="" /></div>
          <div className="footer-col">
            <h4>العربية مركز خدمات اللغة</h4>
            <ul>
              <li><a href="#">الصفحة الرئيسئة</a></li>
              <li><a href="#">من نحن؟</a></li>
              <li><a href="#">خدماتنا</a></li>
              <li><a href="#">تواصل معنا</a></li>
            </ul>
          </div>
     
          <div className="footer-col">
            <h4>أرقام الهواتف:</h4>
            <ul>
              <li><a href="#">المكتب: 050-6866-1791</a></li>
              <li><a href="#">المحمول: 819018409625+</a></li>
              <li><a href="#">واتساب: 819018409625+</a></li>
              <li><a href="#">mailto:contact@arabicsc.com+</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>تابعنا </h4>
            <div className="social-links">
              <a href="#"><BsFacebook /></a>
              <a href="#"><BsTwitter /></a>
              <a href="#"><BsYoutube/></a>
              <a href="#"><BsInstagram/></a>
            </div>
          </div>
     
        </div>
      </div>
    </footer>
  )
}

export default Footer;