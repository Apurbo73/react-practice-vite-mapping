import React from "react";

const Data = ({ data }) => {
  const { title, description, id } = data;
  return (
    <div className="card">
      <h4>
        Unique Id: {id}
      </h4>
      <h3>
        Title: {title}
      </h3>
      <h4>
        Description: {description}
      </h4>
    </div>
  );
};

export default Data;
