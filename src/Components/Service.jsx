import React from "react";
import { ServiceCardes } from "../sData/card1";
const Service = () => {
  return (
    <div>
      <div className="Service">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="ServiceBack">
                <div className="Service-Text">
                  <h1>Service</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container Service-Card ">
        <div className="Service-Heading">
          <h1>Dice Recruitment Services</h1>
          <p>
            Dice as a premier analytics consulting company provides recruitment
            Services and Business solutions to organizations. We ensure that by
            providing B2B services, you as a Business maximize the Profit and
            Market share.
          </p>
        </div>
        <div className="row Expertise-Card">
         {
          ServiceCardes.map((expert) =>{
            return(
              <div className="col-md-4 ">
          <div class="card Card-Animate">
            {expert.svg}
            <div class="card-body">
              <h3 class="card-title">{expert.title}</h3>
              <p class="card-text">{expert.para}</p>
            </div>
            <div className="box"></div>
          </div>
        </div>
            )
          })
         }
        
  </div>
           </div>
        
      </div>
    
  );
};

export default Service;
