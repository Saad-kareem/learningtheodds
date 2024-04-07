import React from "react";
const CommonCard = (props) => {
  return (
    <div className="col-md-4">
      <div class="card Card-Animate">
        {props.img}
        <div class="card-body">
          <h3 class="card-title">{props.title}</h3>
          <p class="card-text">{props.para}</p>
        </div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default CommonCard;
