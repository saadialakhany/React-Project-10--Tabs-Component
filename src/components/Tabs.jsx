import React from "react";
import "./styles.css";

const data = [
  "This is content for Tab 1",
  "This is content for Tab 2",
  "This is content for Tab 3",
];

const Tabs = () => {
  return (
    <div className="container">
      <div className="tab--container">
        {data.length > 0
          ? data.map((item, index) => (
              <div key={index} className={`tab tab--${index + 1} `}>
                Tab {index + 1}
              </div>
            ))
          : null}
      </div>
      <div className="content--container">
        {data && data.length > 0
          ? data.map((el, index) => {
              return (
                <p key={index} className={`content ${index + 1}`}>
                  {el}
                </p>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Tabs;
