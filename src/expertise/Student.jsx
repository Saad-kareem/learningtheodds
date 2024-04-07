import React from "react";

const Student = () => {
  return (
    <div className="Student">
      <input
        type="email"
        className="input3"
        placeholder="Package you want to avail(Pac 1,2 & 3)"
      />
      <select class=" input3">
        <option>Degree Level</option>
        <option>Bachelors</option>
        <option>Master</option>
        <option>MPhil/MS</option>
        <option>PHD</option>
      </select>
      <input type="email" className="input3" placeholder="Filed of Study" />
    </div>
  );
};

export default Student;
