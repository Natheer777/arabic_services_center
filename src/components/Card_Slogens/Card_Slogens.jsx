import React from 'react'
import "./Card_Slogens.css"

export default function Card_Slogens(props) {
  return (
    <>
    <div className='Slogen_item_img'>
        <img src={props.image} alt="" />
    </div>
    </>
  )
}
