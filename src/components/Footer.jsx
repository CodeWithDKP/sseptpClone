import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './components.css';
export default function Footer() {
  return (
    <footer className="sse-footer">
      <div className="container">
        <div className="row">

          {/* --- Column 1 --- */}
          <div className="col-md-4 footer-about">
            <h5>Sanskriti School of Engineering</h5>
            <div className="footer-line"></div>
            <p>Empowering future engineers with knowledge, skills, and values since 2010.</p>
            <ul className="footer-contact">
              <li><FaMapMarkerAlt /> Beedupalli Knowledgepark, Behind SSSIHMS, Puttaparthi, Sri Sathya Sai District, AP - 515134</li>
              <li><FaPhoneAlt /> +91 9100064545 / 74545</li>
              <li><FaEnvelope /> enquiry@sseptp.org / hr@sseptp.org</li>
            </ul>
            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* --- Column 2 --- */}
          <div className="col-md-2 footer-links">
            <h6>Quick Links</h6>
            <div className="footer-line"></div>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Programmes</a></li>
              <li><a href="#">Admissions</a></li>
              <li><a href="#">Placements</a></li>
              <li><a href="#">Infrastructure</a></li>
              <li><a href="#">Bonafide</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* --- Column 3 --- */}
          <div className="col-md-3 footer-links">
            <h6>Departments</h6>
            <div className="footer-line"></div>
            <ul>
              <li><a href="#">CSE</a></li>
              <li><a href="#">ECE</a></li>
              <li><a href="#">EEE</a></li>
              <li><a href="#">Mechanical</a></li>
              <li><a href="#">Civil</a></li>
              <li><a href="#">Humanities & Sciences</a></li>
            </ul>
          </div>

          {/* --- Column 4 --- */}
          <div className="col-md-3 footer-links">
            <h6>Resources</h6>
            <div className="footer-line"></div>
            <ul>
              <li><a href="#">Academic Programs</a></li>
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">Laboratories</a></li>
              <li><a href="#">NAAC</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Committees</a></li>
              <li><a href="#">RIT Program</a></li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="footer-bottom text-center">
          <p>© {new Date().getFullYear()} Sanskriti School of Engineering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
