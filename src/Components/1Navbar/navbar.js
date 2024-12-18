import React, {useState} from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { click } from "@testing-library/user-event/dist/click";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the toggle

  const handleToggle = () => {
    setIsOpen(prevState => !prevState); // Toggle the state
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light mainNavbar">
      <div className="container-fluid navbar1container">
      <Link className="navbar-brand" to="/">
          <img
            src="https://10pearls.com/wp-content/uploads/2020/06/10P-Logo.svg"
            className="logoImg"
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarSupportedContent"
          aria-expanded="isOpen"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Company
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Plateforms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Industries
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Insights
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>

            <li
              id="menu-item-18451"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18451"
            >
              {/* <a href="https://10pearls.com/get-in-touch/">Contact</a> */}
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <div>
            <button className="btn me-4">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};
export default Navbar;
