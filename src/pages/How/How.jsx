import React from 'react'
import "./How.css"
import { Definition , Navbar , Footer} from '../../sections/index'

export default function How() {
  return (
    <>
    <Navbar />
    <div className='Main-title'>
        <h1 className='How-title'>من نحن ؟</h1>
    </div>
    <Definition />
    <Footer />
    </>
  )
}
