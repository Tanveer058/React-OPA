import React, { useState, useEffect } from "react";
import "./main.css";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';
import Contact from "../../Pages/Contact/Contact";

const Mainpart = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 520) { // Adjust the value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container-fluid maindiv">
        <div className="row mainBodyFirstRow">
          <div className="col-lg-12 ">
            <div>
              <h1 className="mainh1 ms-lg-5">
                Reimagine. <br /> Deliver. Repeat.
              </h1>
            </div>
            <div className="p1div">
              <p className="maincomppara">
                Global digital partner helping businesses <br />
                transform, create new products and scale teams.
              </p>
            </div>
            <div className="p2div">
              <p className="maincomppara" id="pp">
                AI is embedded in everything we do.
              </p>
            </div>
            <div className="slider-btn-container m5">
              <Link to="/Contact" className="home-slide-btn ms-lg4">Let’s Contact</Link>
            </div>
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="4000"
            >
              <div className="carousel-inner">
                <div className="carousel-item active img3div">
                  <img src={img3} className="d-block w50 img3" alt="..." />
                </div>
                <div className="carousel-item img3div">
                  <img src={img4} className="d-block w50 img3" alt="..." />
                </div>
                <div className="carousel-item img3div">
                  <img src={img5} className="d-block w50 img3" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className={`navbar navbar-expand-lg navbar-light lowerNavbar ${isSticky ? 'sticky' : ''}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler jumpSectionBtn"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={navbarVisible}
            aria-label="Toggle navigation"
          >
            <div className="fs-3 fw-bold">
              Jump to Section
              <i className="bi bi-arrow-down-circle ps-2 icon-black"></i>
            </div>
          </button>
          <div
            className={`collapse navbar-collapse ${navbarVisible ? "show" : ""}`}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item d-flex navItemSmallDevices ">
                <a
                  className="nav-link active text-black pe-2"
                  aria-current="page"
                  href="#"
                >
                  OUR CLIENTS
                </a>
                <i className="bi bi-arrow-down pt-2 icon-black"></i>
              </li>
              <li className="nav-item d-flex navItemSmallDevices ">
                <a className="nav-link text-black pe-2" href="#">
                  OUR TEAMS
                </a>
                <i className="bi bi-arrow-down pt-2 icon-black"></i>
              </li>
              <li className="nav-item d-flex navItemSmallDevices ">
                <a className="nav-link text-black pe-2" href="#">
                  OUR STRENGTHS
                </a>
                <i className="bi bi-arrow-down pt-2 icon-black"></i>
              </li>
              <li className="nav-item d-flex navItemSmallDevices">
                <a className="nav-link text-black pe-2" href="#">
                  INSIGHTS
                </a>
                <i className="bi bi-arrow-down pt-2 icon-black"></i>
              </li>
              <li className="nav-item d-flex navItemSmallDevices">
                <a className="nav-link text-black pe-2" href="#">
                  CASE STUDIES
                </a>
                <i className="bi bi-arrow-down pt-2 icon-black"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Mainpart;

