import React from 'react';
import Happy from "../images/happy@2x.png";
import Marketing from "../images/marketing@2x.png";
import Surface from "../images/surface1@2x.png";
import Transportation from "../images/transportation@2x.png";
const OurAchivment = () => {
    return (
      <section className="achievements" id="ourTeam">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center">
              <div>
                <h1>
                  <b>Our Achievements</b>
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letter.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="row  achievements1">
                    <div className="col-5">
                      <img src={Happy} alt="" />
                    </div>
                    <div className="col-7">
                      <h3>
                        <b>700+</b>
                      </h3>
                      <p>Happy clients</p>
                    </div>
                  </div>
                  <div className="row  achievements2">
                    <div className="col-5">
                      <img src={Marketing} alt="" />
                    </div>
                    <div className="col-7">
                      <h3>
                        <b>700+</b>
                      </h3>
                      <p>Happy clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row  achievements2">
                    <div className="col-5">
                      <img src={Surface} alt="" />
                    </div>
                    <div className="col-7">
                      <h3>
                        <b>700+</b>
                      </h3>
                      <p>Happy clients</p>
                    </div>
                  </div>
                  <div className="row  achievements3">
                    <div className="col-5">
                      <img src={Transportation} alt="" />
                    </div>
                    <div className="col-7">
                      <h3>
                        <b>700+</b>
                      </h3>
                      <p>Happy clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default OurAchivment;