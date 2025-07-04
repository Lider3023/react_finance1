import React, { type FC } from 'react'
import DashboardLayout from '../layout/DashboardLayout'
import Working from '../components/Animation/Working'

const DashboardTransaction:FC = () => {
  return (
    <>
    <DashboardLayout>
        <div className='dashboard_transaction'>
            <Working/>
        </div>
    </DashboardLayout>
    </>
  )
}

export default DashboardTransaction