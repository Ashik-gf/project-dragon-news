import React from 'react'
import Header from '../Shared/Header'
import Navbar from '../Shared/Navbar'
import LeftSideNAv from '../LeftSideNAv/LeftSideNAv'
import RightsideNav from './RightSideNav.jsx/RightsideNav'
import BrakingNews from './BrakingNews'

const Home = () => {
  return (
    
    <div className=' '> 
        <Header></Header>
        <BrakingNews></BrakingNews>
        <Navbar></Navbar>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            <div className=' col-span-1 border-2 border-black'>
                <LeftSideNAv>
                </LeftSideNAv>
            </div>
            <div className=' col-span-2 border-2 border-black'>
                <h2 className='text-3xl'> News comming Soon...</h2>
            </div>
            <div className=' col-span-1 border-2 border-black'>
                <RightsideNav>
                </RightsideNav>
            </div>
        </div>
    
        </div>
  )
}

export default Home