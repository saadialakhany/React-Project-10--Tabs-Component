import React from "react";
import "./styles.css";

const Tabs = () => {
  return (
    <div className="container">
      <div className="tab--container">
        <div className="tab tab--active">Tab 1</div>
        <div className="tab">Tab 2</div>
        <div className="tab">Tab 3</div>
      </div>
      <div className="content--container">
        <p className="content">This is content for Tab 1</p>
        <p className="content hidden">This is content for Tab 2</p>
        <p className="content hidden">This is content for Tab 3</p>
      </div>
    </div>
  );
};

export default Tabs;
