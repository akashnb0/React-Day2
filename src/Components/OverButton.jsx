import { Button } from '@mui/material'
import React from 'react'
import './OverButton.css'

export default function OverButton() {
  return (
   <div className='btn'>
   <h5 style={{color:'white',marginTop:'0px'}}>A new era for safety</h5>
   <h1 style={{color:'white',marginTop:'0px'}}>Does how you feel affect how you drive?</h1>
   <Button style={{borderRadius:'36px',padding:'13px 30px',marginTop:'7px',color:"black",backgroundColor:'white',fontSize:'0.7em'}} variant="contained">Learn More</Button>
   </div>
  )
}
