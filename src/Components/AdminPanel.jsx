import React from 'react'
import Sildebar from './Sildebar'
import DashBoard from './DashBoard'
import { Outlet } from 'react-router-dom'

const AdminPanel = () => {
  return (
    <div className='flex'>

    <div className='basis-[12%] h-100vh border'>
    
        <Sildebar/>
        </div> 
        <div className='basis-[88%] border'>
            <DashBoard/>

           
        </div>

    </div>
  )
}

export default AdminPanel
