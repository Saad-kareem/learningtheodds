import React from "react";

const Work = () => {
  return (
    <div className="Work">
      <input type="text" className="input1" placeholder="Organization" />
      <input type="text" className="input1" placeholder="Department" />
      <select class=" input1 input2">
        <option>Career Level</option>
        <option>Top Tier</option>
        <option>Middle Tier</option>
        <option>Front-line Tier</option>
      </select>
      <input
        type="text"
        className="input1 input2"
        placeholder="Package you want to avail(Pac 1,2 & 3)"
      />
    </div>
  );
};

export default Work;
