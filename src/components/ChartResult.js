import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Voeux de formation", "Situation", "Tests de positionnement"],
  datasets: [
    {
      data: [300, 81, 100],
      backgroundColor: ["#004080", "#508CC9", "#0C69C7"],
      hoverBackgroundColor: ["#004080", "#508CC9", "#0C69C7"]
    }
  ]
};

export default props => ({
  render() {
    return (
      <>
        <span className="mb-2 font-weight-bold">Chart with random data</span>
        <Doughnut data={data} />
      </>
    );
  }
});
