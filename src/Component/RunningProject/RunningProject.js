import React from 'react';
import Img from "../images/20 [Converted]@2x.png"
const RunningProject = () => {
    return (
      <section id="/service">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={Img} alt="" style={{ width: "100%" }} />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h1>
                  <b>Stay Running & Project</b>
                </h1>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letter.
                </p>
                <button className="custom-btn">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default RunningProject;