import React from "react";

const Case = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="AI-Case">
            <h1>{props.heading}</h1>
            <div className="Case-link">
              <ul>
                <li>
                  <span>{props.Arrow}</span> {props.case1}
                </li>
                <li>
                  <span>{props.Arrow}</span> {props.case2}
                </li>
                <li>
                  <span>{props.Arrow}</span> {props.case3}
                </li>
                <li>
                  <span>{props.Arrow1}</span> {props.case7}
                </li>
              </ul>
              <ul>
                <li>
                  <span>{props.Arrow}</span> {props.case4}
                </li>
                <li>
                  <span>{props.Arrow}</span> {props.case5}
                </li>
                <li>
                  <span>{props.Arrow1}</span> {props.case6}
                </li>
                <li>
                <span>{props.Arrow1}</span> {props.case8}
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;
