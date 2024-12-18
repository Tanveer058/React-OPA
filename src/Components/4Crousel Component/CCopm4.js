import React from "react";
import "./CComp4.css";
import Crimg1 from "../../assets/Crousel-img1.jpg";
import Crimg2 from "../../assets/Crousel-img2.jpg";
import Crimg3 from "../../assets/Crousel-img3.jpg";
import Crimg4 from "../../assets/Crousel-img4.jpg";

const CrouselComp = () => {
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="row bg-black">
          <h2 className="insight py-4 ps-5 fs-1">Insights</h2>
        </div>
        <div className="row bg-black mb-5 pb-5 d-sm-flex flex-sm-col">
          <div className="row card-group d-sm-flex flex-sm-col ps-5 pe-5">
            <div className="col-lg-3 col-sm-12 card bg-black pe-0">
              <div className="me-1">
                <img
                  className="img-sm-fluid"
                  width="290"
                  height="440"
                  data-cf
                  src={Crimg1}
                ></img>
                <div className="card-body bg-dark">
                  <h6 className="card-title">Artificial Intelligence</h6>
                  <p className="fs-5 fw-bold cards-text">
                    Generative AI for Software Development: Boosting Dev
                    Efficiency
                  </p>
                  <p className="smparadiv mt-5">
                    <small className="read-more d-flex justify-content-end text-white fw-bold">
                      Read more
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 bg-black card ps-3 pe-0">
              <div className="carddiv me-1">
                <img
                  className="img-sm-fluid"
                  width="290"
                  height="440"
                  data-cf
                  src={Crimg2}
                ></img>
                <div className="card-body bg-dark">
                  <h6 className="card-title">production innovation</h6>
                  <p className="fs-5 fw-bold cards-text">
                    Launch AI-Powered Producrs with Confidence: Validate Early,
                    Execute Smart
                  </p>
                  <p className="">
                    <small className="read-more d-flex justify-content-end mt-3 text-white fw-bold">
                      Read more
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 card bg-black ps-3 pe-0">
              <div className="me-1">
                <img
                  className="img-sm-fluid"
                  width="290"
                  height="440"
                  data-cf
                  src={Crimg3}
                ></img>
                <div className="card-body bg-dark ">
                  <h6 className="card-title">Artificial Intelligence</h6>
                  <p className="fs-5 fw-bold cards-text">
                    Putting GenAI to Work for Legacy System Modernization{" "}
                  </p>
                  <p className="mt-5">
                    <small className="read-more d-flex justify-content-end text-white fw-bold ">
                      Read more{" "}
                    </small>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-12 card bg-black ps-3">
              <div className="me-1">
                <img
                  className="img-sm-fluid"
                  width="290"
                  height="440"
                  data-cf
                  src={Crimg4}
                ></img>
                <div className="card-body bg-dark">
                  <h6 className="card-title">healthtech</h6>
                  <p className="fs-5 fw-bold cards-text">
                    Next Gen Prior Authorization-Streamlining with Automated
                    Decision Support
                  </p>
                  <p>
                    <small className="read-more d-flex justify-content-end text-white fw-bold">
                      Read more
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrouselComp;
