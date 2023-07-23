import android from "../../../../assets/footer/an.png";
import ios from "../../../../assets/footer/io.png";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#002147] text-white">
      <footer className="footer p-10">
        <div>
          <span className="footer-title">Top Courses</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a className="link link-hover" href="#">
              Accounting
            </a>
            <a className="link link-hover" href="#">
              Civil engineering
            </a>
            <a className="link link-hover" href="#">
              Art/Design
            </a>
            <a className="link link-hover" href="#">
              Marine Engineering
            </a>
            <a className="link link-hover" href="#">
              Political Science
            </a>
            <a className="link link-hover" href="#">
              Journalism/Writing
            </a>
            <a className="link link-hover" href="#">
              Physical Education
            </a>
            <a className="link link-hover" href="#">
              Business Management
            </a>
          </div>
        </div>
        <div>
          <span className="footer-title">NEW COURSES</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a className="link link-hover" href="#">
              Sciences
            </a>
            <a className="link link-hover" href="#">
              Web Design/Development
            </a>
            <a className="link link-hover" href="#">
              Google Business
            </a>
            <a className="link link-hover" href="#">
              Networking Courses
            </a>
            <a className="link link-hover" href="#">
              Statistics
            </a>
            <a className="link link-hover" href="#">
              SEO
            </a>
            <a className="link link-hover" href="#">
              Graphics Design
            </a>
            <a className="link link-hover" href="#">
              Information technology
            </a>
          </div>
        </div>
        <div>
          <span className="footer-title">HELP & SUPPORT</span>
          <a className="link link-hover" href="#">
            24x7 Live help
          </a>
          <a className="link link-hover" href="#">
            Feedback
          </a>
          <a className="link link-hover" href="#">
            Contact us
          </a>
          <a className="link link-hover" href="#">
            FAQs
          </a>
        </div>
      </footer>
      <hr className="hidden sm:block" />
      <footer className="footer p-10">
        <div>
          <span className="footer-title">GET IN TOUCH</span>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <p>ABC Tower, Dhaka, Bangladesh.</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <p>+8801234567890</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <p>info@example.com</p>
          </div>
        </div>
        <div>
          <span className="footer-title">DOWNLOAD OUR FREE MOBILE APPS</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <img className="w-40" src={android} alt="" />
            <img className="w-40" src={ios} alt="" />
          </div>
        </div>
        <div>
          <span className="footer-title">SOCIAL MEDIA</span>
          <div className="flex gap-4">
            <a className="link link-hover">
              <FaFacebookSquare />
            </a>
            <a className="link link-hover">
              <FaInstagram />
            </a>
            <a className="link link-hover">
              <FaTwitter />
            </a>
            <a className="link link-hover">
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
      <hr />
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>© {currentYear} Campus Explorer - All rights reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p>Designed & Developed By: Mahmud</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
