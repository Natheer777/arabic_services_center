import React from "react";
import "./Card_Services.css";

export default function Card_Services(props) {
  return (
    <>
      <div className="Best_Services_item shadow  top">
        <div className="card_wrapperr">
          <img className="Services_item_img " src={props.image} alt="" />
          <div className="Services_item_conent">
            <p className="Services_item_title">{props.title}</p>

            <p className="Services_item_details">{props.details}</p>
          </div>
        </div>
      </div>
    </>
  );
}
