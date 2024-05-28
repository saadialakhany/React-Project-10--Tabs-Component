import React, { useState } from "react";
import "./styles.css";
import { tabsData } from "./tabsData";

const Tabs = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleChange(currentTabIndex) {
    setCurrentTabIndex(currentTabIndex);
  }

  return (
    <div className="container">
      <div className="tab--container">
        {tabsData.length > 0
          ? tabsData.map((el, index) => (
              <div
                onClick={() => handleChange(index)}
                key={index}
                className={`tab ${el.label} ${
                  currentTabIndex === index ? "active" : ""
                }`}
              >
                {el.label}
              </div>
            ))
          : null}
      </div>
      <div className="content--container">
        {tabsData[currentTabIndex] && tabsData[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
