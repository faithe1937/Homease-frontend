import React from "react";
import Todo from "./Todo.js";
import CarouselChart from "./CarouselChart";
import LayoutMessage from "./LayoutMessage";

export default props => {
  return (
    <div className="row">
      <div className="col-sm">
        <Todo />
      </div>
      <div className="col-sm">
        <CarouselChart />
      </div>
      <div className="col-sm">
        <LayoutMessage />
      </div>
    </div>
  );
};
