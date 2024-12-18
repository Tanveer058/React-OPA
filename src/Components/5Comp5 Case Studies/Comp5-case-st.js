import React from "react";
import "./Comp5-case-st.css";
import img1 from "../../assets/case-studie-img1.webp";
import img2 from "../../assets/case-studie-img2.webp";
import img3 from "../../assets/case-studie-3.webp";
import img4 from "../../assets/case-studie-4.webp";

const Comp5CS = () => {
  return (
    <>
      <div className="container mt-5 case-studies-container">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <h1 className="comp5h1 fs-1">Case Studies</h1>
          </div>
        </div>
        <div className="row mt-4 ps5">
          <div className="col-lg-10 col-sm-12">
            {/* <p className="comp5para"> */}
            <h3 className=" comp5h3">
              We are problem solvers. We help businesses think through
              challenges and reach their desired outcomes with efficiency and
              creativity.
              </h3>
            {/* </p> */}
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4 pe-lg-5">
          <div className="col-sm-6">
            <div className="card bg-light">
              <img id="img1" src={img1} className="card-img-top" alt="..." />
              <div className="custom-overlay">
                <div className="card-img-overlay ps-5 pt-4 ">
                  <h4 className="">Healthcare</h4>
                  <hr></hr>
                  <h1 className="h1 m-0 pt-1">Amwell</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card bg-light ">
              <img id="img1" src={img2} className="card-img-top" alt="..." />
              <div className="custom-overlay">
                <div className="card-img-overlay ps-5">
                  <h4 className="p-1">bbox</h4>
                  <hr></hr>
                  <h1 className="h1 m-0">Energy</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4 pe-lg-5 mt-1 mb-5">
          <div className="col-sm-6">
            <div className="card bg-light comp5cards">
              <img id="img1" src={img3} className="card-img-top" alt="..." />
              <div className="custom-overlay">
                <div className="card-img-overlay ps-5">
                  <h4 className="px-1">AI</h4>
                  <hr></hr>
                  <h1 className="h1 mt-3">Related Faces</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card bg-light comp5cards">
              <img id="img1" src={img4} className="card-img-top" alt="..." />
              <div className="custom-overlay">
                <div className="card-img-overlay ps-5">
                  <h4 className="px-1">Fintech</h4>
                  <hr></hr>
                  <h1 className="h1 mx-0 pt-1">PayPal</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comp5CS;
