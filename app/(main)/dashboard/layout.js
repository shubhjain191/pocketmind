import React from 'react'
import DashboardPage from './page'
import { BarLoader } from 'react-spinners'
import { Suspense } from 'react'

const DashboardLayout = () => {
  return (
    <div className='container mx-auto px-4 md:px-6 lg:px-8 py-6 max-w-7xl'>
        <h1 className='text-3xl md:text-4xl font-bold mb-6 gradient-title'>Dashboard</h1>

        {/* Dashboard Page */}
        <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color='#1E3A8A' />}>
        <DashboardPage />
        </Suspense>
    </div>
  )
}

export default DashboardLayout