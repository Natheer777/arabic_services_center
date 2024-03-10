import React from "react";

import "./Slogans.css";

import { FaArtstation } from "react-icons/fa";


import { Card_Slogens } from "../../components/index";

import Data from "../../Data/Slogens";

export default function Slogans() {
  const Card = Data.map((card) => {
    return(
        <Card_Slogens 
        key = {card.id}
        image = {card.Image}
        />
    )
  });
  return (
    <>
        <h2 className="Main_title_slgen text-center mb-4 hidden"> شعاراتنا <FaArtstation /></h2>
        <div className="CardSlogen top">
        {Card[0]}
        {Card[1]}
        {Card[2]}
        {Card[3]}
        {Card[4]}
        {Card[5]}
        {Card[6]}
        {Card[7]}
       
      </div>
    </>
  );
}
