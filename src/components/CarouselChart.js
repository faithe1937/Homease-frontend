import React, { component } from "react";
import ChartResult from "./ChartResult";
import Carousel from "nuka-carousel";

export default props => {
  function handleClick(e) {
    e.preventDefault();
    alert("explorer");
  }
  return (
    <>
      <span className="text-muted mt-4 mb-4">
        Photo Updates <i className="uil uil-angle-down" />
      </span>
      <div className="card p-4 shadow mt-2" style={{ border: 0, height: 560 }}>
        <div className="d-flex bd-highligh ">
          <h3 className="bd-highlight w-100 font-weight-bold">Résultats</h3>
          <button className="btn btn-dark" onClick={handleClick}>
            Explorer
          </button>
        </div>
        <hr />

        <div className="overflow-auto">
          <div className="row container">
            <div className="col-sm w-100 text-center">
              <h4 className="mb-4 display-4" style={{ fontSize: 30 }}>
                photos
              </h4>
              <Carousel
                renderwithoutControls={({ previousSlide }) => (
                  <button onClick={previousSlide} className="btn">
                    <i className="uil uil-arrow-circle-left h1" />
                  </button>
                )}
                renderwithoutControls={({ nextSlide }) => (
                  <button onClick={nextSlide} className="btn">
                    <i className="uil uil-arrow-circle-right h1" />
                  </button>
                )}
                style={{ width: 350, height: 300, padding: 0 }}
                className="text-center"
                autoplay={true}
                easing={"easeQuadInOut"}
              >
                <img src="https://i.pinimg.com/564x/26/71/0e/26710e2e6f620a740be6cf56f3fe20ef.jpg" />
                <img src="https://www.thewoodgraincottage.com/wp-content/uploads/2014/08/DIY-Dining-Room-Open-Shelving-by-The-Wood-Grain-Cottage-17.jpg" />
                {/* <ChartResult />
                <ChartResult />
                <ChartResult /> */}
              </Carousel>
            </div>
          </div>
          <h4 className="text-center mt-3 font-weight-bold">Project Name</h4>
          <span className="text-muted" style={{ fontSize: 12 }}>
            links to all photos
          </span>
        </div>
      </div>
    </>
  );
};
