import React from 'react'
import logo from '../assets/patientdesk_logo.png'

export default function Navigation() {
  return (
    <div className='px-6 py-4'>
      <div className='flex gap-1 items-center'>
        <img src={logo} className='w-14 h-14'/>
        <h1 className='text-4xl text-gray-600 font-bold'>PatientDesk</h1>
      </div>
      <div>
        <a href="">Home</a>
        <a href="">Patients</a>
      </div>
    </div>
  )
}
