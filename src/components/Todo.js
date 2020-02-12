import React from "react";

const Todo = props => {
  return (
    <>
      <span className="text-muted mt-4 mb-4">
        la lista de tareas <i className="uil uil-angle-down" />
      </span>
      <div className="card p-4 shadow mt-2" style={{ border: 0, height: 560 }}>
        <div className="d-flex bd-highligh ">
          <h3 className="bd-highlight w-100 font-weight-bold">To do List</h3>
          <button className="btn btn-dark">Edit</button>
        </div>
        <hr />

        {/* === Première card === */}
        <div className="overflow-auto">
          <div
            className="card p-4 d-flex bd-highlight"
            style={{
              border: 0,
              backgroundColor: "#004080",
              color: "white",
              borderRadius: 10
            }}
          >
            <div className="d-flex bd-highligh">
              <h4 className="bd-highlight w-100 font-weight-bold">
                Demolition
              </h4>
              <button
                className="btn"
                style={{
                  backgroundColor: "#00334d",
                  color: "white",
                  borderColor: "#1875F0"
                }}
              >
                Expand
              </button>
            </div>
            <p className="d-flex">list</p>
            <span className="text-right">
              <i className="uil uil-clock-two" /> On Time
            </span>
          </div>

          {/* === Deuxième card === */}

          <div
            className="card p-4 mt-2 d-flex bd-highlight"
            style={{
              border: 0,
              backgroundColor: "#336699",
              color: "white",
              borderRadius: 10
            }}
          >
            <div className="d-flex bd-highligh">
              <h4 className="bd-highlight w-100 font-weight-bold">
                Installation
              </h4>
              <button
                className="btn"
                style={{
                  backgroundColor: "#006699",
                  color: "white",
                  borderColor: "#1875F0"
                }}
              >
                Expand
              </button>
            </div>
            <p className="d-flex">Some texte here .........</p>
            <span className="text-right">
              <i className="uil uil-clock-two" /> On Time
            </span>
          </div>

          {/* === Troisième card === */}

          <div
            className="card p-4 mt-2 d-flex bd-highlight"
            style={{
              border: 0,
              backgroundColor: "#0C69C7",
              color: "white",
              borderRadius: 10
            }}
          >
            <div className="d-flex bd-highligh">
              <h4 className="bd-highlight w-100 font-weight-bold">Clean Up</h4>
              <button
                className="btn"
                style={{
                  backgroundColor: "#07336E",
                  color: "white",
                  borderColor: "#1875F0"
                }}
              >
                Expand
              </button>
            </div>
            <p className="d-flex">List</p>
            <span className="text-right">
              <i className="uil uil-clock-two" /> On Time
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
