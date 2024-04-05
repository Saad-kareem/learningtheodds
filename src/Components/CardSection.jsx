import React from "react";
import card1 from "../Assets/card1.png";
import { cards } from "../sData/card1";

const CardSection = () => {
  return (
    <div>
      <div className="CardSection">
        <div className="CardHeading">
          <h2>What We Do?</h2>
        </div>
        <div className="container">
          <div className="row Card-Section">
            {cards.map((data, index) => {
              return (
                <div className="col-md-4 ">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={data.img}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.para}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
