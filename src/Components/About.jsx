import React from "react";
import { AboutCard, Parteners } from "../sData/card1";
import { Member } from "../sData/Member";
import P1 from "../Assets/P1.png";
const About = () => {
  return (
    <div>
      <div className="About">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="AboutBack">
                <div className="About-Text">
                  <h1>About ODDS</h1>
                  <p>Find out more about us!</p>
                </div>
              </div>
              <div className="About-Youtube">
                <h2>Who are we?</h2>
                <iframe
                  src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  width="300px"
                  height="200px"
                ></iframe>
              </div>
              <div className="Vision">
                <div className="col-md-6 Sub-Vision">
                  <h1>Vision</h1>
                  <p>
                    Empower the high-tech ecosystem & Enabling the ecosystem by
                    fulfilling end-to-end tech need of corporate in the form of
                    Consultancy ,Training and Recritment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="Analytics">
            <h1>USP’s of ODDS Analytics</h1>
            <div className="row">
              {AboutCard.map((data, index) => {
                return (
                  <div className="col-md-3 Analytics-Animate ">
                    <div className="card Analytics-Card">
                      {data.svg}
                      <div className="card-body">
                        <p className="card-text">{data.para}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
           <div className="container-fluid">
          <div className="row ODDS-Founder Founders">
            <h1>ODDS Founder</h1>
            <div className="Founder-Team">
              {Member.map((Item) => (
                <div className="col-md-3 ">
                  <img src={Item.image} />
                  <h5>{Item.Name}</h5>
                  <p>{Item.Type}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="Partener">
              <h1>Parteners</h1>
            </div>
            {Parteners.map((Part, index) => {
              return (
                <div className="col-md-2 Sub-Partener">
                  <img src={Part.img} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
     </div>
  );
};

export default About;
