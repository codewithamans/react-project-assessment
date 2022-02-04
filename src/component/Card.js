import React from "react";
import '../index.css';
;

const Card = (props) => {
  return (
    <>
      <div className="card box-style" >
        <div className="card-body">
          <div className="container d-flex justify-content-between overflow-hidden'">
            <img src={props.img} className="card-img" alt="..." style={{width:"120px",height:"120px"}} />

            <div className="conatiner">
              <div className="container ">
                <h5 className="card-title fs-6 fw-bold ">{props.prdname}</h5>
                <h5 className=" fs-6">{props.brdname}</h5>
               
                <h5>{`$ ${props.price}`}</h5>
              </div>
            </div>
          </div>
          <div className="container d-flex justify-content-between">
          <h5 className=" fs-6">{`State : ${props.loc}`}</h5>
          <h5 className=" fs-6">{`City : ${props.city}`}</h5>
          </div>
          <p className="card-text">
           {props.desc}
         
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
