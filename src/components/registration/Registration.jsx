import React from 'react'
import Container from '../layout/Container'
import regi_image from "../../assets/registration.png"

const Registration = () => {2
  return (

  <Container>

 <div className='flex justify-between'>
       <div>
        <h2>Get started with easily register</h2>
      </div>
      <div>
        <img src={regi_image} className='h-screen' alt="regi_image" />

      </div>
 </div>
   
  </Container>

  )
}

export default Registration

