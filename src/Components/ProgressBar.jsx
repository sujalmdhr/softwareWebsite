import React from 'react'
import { Progress } from 'antd';
import { FaEllipsisV } from 'react-icons/fa';

const ProgressBar = () => {
  return (
    <>
    <div className='bg-[#F8F9FC] flex items-center  justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
      <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold'>Project OverView</h2>
    <FaEllipsisV color="gray" className='cursor-pointer'/>
    </div>
    <div className='px-[25px] space-y-[15px] py-[15px]'>
<div>
<h2>Server Migration</h2>
      <Progress percent={30} strokeColor="#E74A3B"/>
</div>
<div>
<h2>Sales Tracking</h2>
      <Progress percent={50}  status='active' strokeColor="#F6C23E"/>
</div>
<div>
<h2>Customer Database</h2>
      <Progress percent={70} status='active' strokeColor="#4E73DF"/>
</div>
<div>
<h2>Payout Details</h2>
      <Progress percent={100} status='active' strokeColor="#36B9CC"/>
</div>
<div>
<h2>Account Setup</h2>
      <Progress percent={50} status='exception' strokeColor="#1CC88A"/>
</div>
      
    </div>
    </>
  )
}

export default ProgressBar
