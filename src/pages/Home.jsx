import { Container } from '@mui/material'
import React from 'react'
import home_image from '../assets/home_image.png'

const Home = () => {
  
  return (
    <div className='p-[30px]'>
        <Container className='p-[30px]'>

          <div className='flex justify-center w-[186px] h-[954px] bg-bggcolor rounded-[20px]'>
            <div className='size-[100px] bg-gray-500 rounded-full mt-[38px]'>
                <img src={home_image} alt="#home_image" />
            </div>
            <div>
              home page design
              
            </div>

          </div>
        
        </Container>





    </div>
  )
}

export default Home