import React from "react";
import "./AR.css";
import img1 from "../../assets/AR-img1.png";
import img2 from "../../assets/AR-img2.png";
import img3 from "../../assets/AR-img3.png";
import img6 from "../../assets/AR-img6.png";
import img7 from "../../assets/AR-img7.png";

const AandR = () => {
  return (
    <>
      <div className="container-fluid pt-5 bg-black ">
        <div className="row p-lg-3">
          <div className="col-lg-6 col-sm-12 p-lg-3 ps-5 armainh2div">
            <h2 className="armainh2 ps-5 mt-lg-3 ms-lg-5">Awards & recognitions</h2>
          </div>
        </div>
        <div className="row ms-lg-5">
          <div className="d-flex justify-content-centre">
            <div className="row bg-black text-white ps-lg-5 ar-rows ">
              <div className="col-lg-5 col-sm-12 p-lg-5 aAndRboxes">
                <div className="border border-white border border-white p-3 aAndRdives">
                  <div>
                    <img className="arimgs" src={img1}></img>
                  </div>
                  <div className="paradiv">
                    <p className="arpara para1">
                      EY announced Imran Aftab as an Entrepreneur of The Year®
                      2022 Mid-Atlantic Award Winner
                    </p>
                  </div>
                  <div>
                    <a href="#" className="learnmore">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-sm-12 p-lg-5 aAndRboxes">
                <div className=" border border-white p-3 aAndRdives">
                  <div>
                    <img className="arimgs" src={img2} id="arimg2"></img>
                  </div>
                  <div className="paradiv">
                    <p className="arpara para2">
                      Recognized on the Inc. 5000 list of fastest growing private companies in
                      America for 6 years in a row (2024, 2023, 2022, 2021, 2020 & 2019)
                    </p>
                  </div>
                  <div>
                    <a href="#" className="learnmore">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-centre">
            <div className="row bg-black text-white ps-lg-5 ar-rows">
              <div className="col-lg-5 col-sm-12 p-lg-5 aAndRboxes">
                <div className=" border border-white p-3 aAndRdives">
                  <div>
                    <img className="arimgs" src={img3}></img>
                  </div>
                  <div className="paradiv">
                    <p className="arpara">
                    Recognized on the Financial Times list of America’s Fastest Growing Companies 2022
                    </p>
                  </div>
                  <div>
                    <a href="#" className="learnmore">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-sm-12 p-lg-5 aAndRboxes">
                <div className=" border border-white p-3 aAndRdives">
                  <div>
                    <img className="arimgs" id="arimg3" src='https://10pearls.com/wp-content/uploads/2024/06/builtin-logo-bw.svg'></img>
                  </div>
                  <div className="paradiv">
                    <p className="arpara">
                      Recognized on the Built In list of Best Places to Work for 2024 & 2023
                    </p>
                  </div>
                  <div>
                    <a href="#" className="learnmore">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-centre">
            <div className="row bg-black text-white ps-lg-5 ar-rows">
              <div className="col-lg-5 col-sm-12 p-lg-5 aAndRboxes">
                <div className=" border border-white p-3 aAndRdives">
                  <div>
                    <img className="arimgs" src='https://10pearls.com/wp-content/uploads/2024/06/forrester-logo-bw.svg' id="arimg5"></img>
                  </div>
                  <div className="paradiv">
                    <p  className="arpara" id="arpara5">
                      Top Partner for Custom Software Development, AI Consulting, 
                      Enterprise Mobile App Development, and Digital Experiences
                    </p>
                  </div>
                  <div>
                    <a href="#" className="learnmore">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-sm-12 p-lg-5 aAndRboxes">
                <div className=" border border-white p-3 aAndRdives">
                  <div>
                    <img className="arimgs" src={img6} id="arimg6"></img>
                  </div>
                  <div className="paradiv">
                    <p className="arpara" id="arpara6">
                      #1 Most Diverse Midsize Company in Greater DC
                    </p>
                  </div>
                  <div>
                    <a href="#" className="learnmore">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-centre">
            <div className="row bg-black text-white ps-lg-5 ar-rows">
              <div className="col-lg-5 col-sm-12 p-lg-5 aAndRboxes">
                <div className=" border border-white p-3 aAndRdives">
                  <div>
                    <img className="arimgs" src={img7} id="arimg7"></img>
                  </div>
                  <div className="paradiv">
                    <p className="arpara">
                      EY announced Imran Aftab as an Entrepreneur of The Year®
                      2022 Mid-Atlantic Award Winner
                    </p>
                  </div>
                  <div>
                    <a href="#" className="learnmore">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-sm-12 p-lg-5 aAndRboxes">
                <div className=" border border-white p-3 aAndRdives">
                  <div>
                    <img className="arimgs" src='https://10pearls.com/wp-content/uploads/2024/06/gartner-logo-bw.svg' id="arimg8"></img>
                  </div>
                  <div className="paradiv">
                    <p className="arpara">
                      EY announced Imran Aftab as an Entrepreneur of The Year®
                      2022 Mid-Atlantic Award Winner
                    </p>
                  </div>
                  <div>
                    <a href="#" className="learnmore">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AandR;
