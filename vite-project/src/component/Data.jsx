import React from "react";

const Data = ({ data }) => {
  const { title, description } = data;
  return (
    <div  className="card">
      <h2>
        Title: {title}
      </h2>
      <h4>
        Description: {description}
      </h4>
    </div>
  );
};

export default Data;
