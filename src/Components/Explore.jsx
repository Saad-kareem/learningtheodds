import React from "react";
import card1 from "../Assets/card1.png";
import { ExploreCards } from "../sData/card1";

const Explore = () => {
  return (
    <div>
      <div className="Explore">
        <h1 className="Explore-Heading">Explore our Top Rated Programs</h1>
        <div className="container">
          <div className="row  Explore-cards">
            {ExploreCards.map((data, index) => {
              return (
                <div className="col-md-3 Col-Card" key={index}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={data.img}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        {data.para}
                      </p>
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

export default Explore;
