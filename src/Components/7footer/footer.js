import React from "react";
import "./footer.css";
import img from "../../assets/10p-logo-1.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div className="container-fluid pt-lg-5 pt-sm-3 ps-lg-5 text-white bg-dark footerContainer">
      <div className="row p-4 pe-0 pb-0 ps-lg-5">
        <div className="col-lg-5 col-sm-12 d-flex mb-4">
          <div>
            <img className="w-25 mb-3" src={img}></img>
            <p className="fs-lg-5 footerpara">
              10Pearls is an award-winning digital development company, helping
              businesses with product design, development, and technology
              acceleration
            </p>
          </div>
          <div className="verticle-line p-2 ms-2"></div>
        </div>
        <hr className="d-block d-lg-none footer-sm-row"></hr>
        <div className="col-lg-3 col-sm-12 d-flex mb-4 pt-3">
          <div>
            <div className="d-flex">
              <p className="me-4 fs-6 fw-bold">Company</p>
              <p className="ms-5 fs-6 fw-bold">Insights</p>
            </div>
            <div className="d-flex">
              <p className="me-5 fs-6 fw-bold">Services</p>
              <p className="ms-4 fs-6 fw-bold">Careers</p>
            </div>
            <div className="d-flex">
              <p className="me-5 fs-6 fw-bold">Industries</p>
              <p className="ms-3 fs-6 fw-bold">Contact</p>
            </div>
          </div>
          <div className="verticle-line p-2 ms-5 footer-vr2"></div>
        </div>
        <hr className="d-block d-lg-none footer-sm-row"></hr>

        <div className="col-lg-4 col-sm-12 pt-3">
          <div>
            <div className="d-flex">
              <p className="me-4 fs-6 fw-bold">USA (HQ in Wash DC)</p>
              <p className="me-4 fs-6 fw-bold">Colombia</p>
            </div>
            <div className="d-flex">
              <p className="me-5 fs-6 fw-bold">Costa Rica &nbsp; &nbsp; </p>
              <p className="ms-5 fs-6 fw-bold" id="peru">
                Peru
              </p>
            </div>
            <div className="d-flex">
              <p className="me-5 fs-6 fw-bold">Pakistan &nbsp; &nbsp; &nbsp;</p>
              <p className="ms-5 fs-6 fw-bold" id="uk">
                UK
              </p>
            </div>
          </div>
        </div>
        <hr className="col-lg-11 footer-sm-row "></hr>
        <div className="row mt-4">
          <div className="col-lg-2 ps-0 col-sm-12 fw-bold d-flex justify-content-center">
            +1-703-935-1919
          </div>
          <div className="col-sm-2 ps-0 mb-4 fw-bold d-flex justify-content-center ">
            {" "}
            info@10pearls.com
          </div>
          <div className="col-lg-3 col-sm-12 pe-5 footer-logos">
            <ul className="list-unstyled footerlogos">
              <li>
                <i className="bi bi-facebook fs-2"></i>
              </li>
              <li>
                <i className="bi bi-twitter-x fs-2"></i>
              </li>
              <li>
                <i className="bi bi-linkedin fs-2"></i>
              </li>
            </ul>
          </div>
          <div className="col-lg-3"></div>
          <div className="col-lg-2 col-sm-12 fw-bold d-flex justify-content-center">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
