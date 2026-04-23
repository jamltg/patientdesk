import React from 'react'
import PatientForm from './pages/PatientForm'
import Navigation from './components/Navigation'
import PatientList from './components/PatientList'

export default function App() {
  return (
    <div>
      <Navigation/>
      <PatientForm/>
      <PatientList/>
    </div>
  )
}
