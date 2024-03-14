import React from "react";

import { MdOutlineDesignServices } from "react-icons/md";

import { HiMinus } from "react-icons/hi";

import { Card_Services } from "../../components/index";

import Data from "../../Data/Card_Services";

import "./Services.css";

export default function Services() {
  const card = Data.map((card) => {
    return (
      <Card_Services
        key={card.id}
        image={card.Image}
        title={card.title}
        details={card.details}
      />
    );
  });

  return (
    <>
      <div className="container">
        <div className="row rowServices text-center">
          <div className="MainTitle">
            <h1 className="hidden">
              خدماتنا <MdOutlineDesignServices />
            </h1>
            <p className="hidden fs-5">
              <HiMinus /> يهدف مركز خدمات اللغة العربية إلى تقديم مختلف أنواع
              الخدمات المتعلقة باللغتين العربية واليابانية بشكل أساسي. وتشمل
              خدماتنا الأمور التالية <HiMinus />
            </p>
          </div>
          <div className="Card">
            {card[0]}
            {card[1]}
            {card[2]}
            {card[3]}
            {card[4]}
            {card[5]}
            {card[6]}
            {card[7]}
            {card[8]}
            {card[9]}
          </div>
        </div>
      </div>
    </>
  );
}
