import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PatientForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        date_of_birth: "",
        sex: "",
        phone: "",
        email: "",
        street_address: "",
        barangay: "",
        city: "",
        country: "",
        emergency_contact_name: "",
        emergency_contact_phone: ""
    })

    const createPatient = async(data) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/api/patients", 
                data
            );
            console.log("Saved: ", response.data);
        } catch (err){
            console.log("Error:",err.response?.data || err.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPatient(formData);
            setFormData({
                first_name: "",
                middle_name: "",
                last_name: "",
                date_of_birth: "",
                sex: "",
                phone: "",
                email: "",
                street_address: "",
                barangay: "",
                city: "",
                country: "",
                emergency_contact_name: "",
                emergency_contact_phone: ""
            })
        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

  return (
    <form className='bg-gray-400 p-8' onSubmit={handleSubmit}>
        <div className='flex gap-2 mb-4'>
            <label>First Name: </label>
            <input
                className='border-2'
                type="text"
                placeholder="Enter First Name"
                name="first_name"
                value = {formData.first_name}
                onChange={handleChange}
            />
        </div>
        <div className='flex gap-2'>
            <label>Middle Name: </label>
            <input
                className='border-2'
                type="text"
                placeholder="Enter Last Name"
                name="middle_name"
                value = {formData.middle_name}
                onChange={handleChange}
            />
        </div>
        <div className='flex gap-2'>
            <label>Last Name: </label>
            <input
                className='border-2'
                type="text"
                placeholder="Enter Last Name"
                name="last_name"
                value = {formData.last_name}
                onChange={handleChange}
            />
        </div>
        <div className='flex gap-2'>
            <label>Date of Birth: </label>
            <input
                className='border-2'
                type="date"
                placeholder="Enter Date of Birth"
                name="date_of_birth"
                value = {formData.date_of_birth}
                onChange={handleChange}
            />
        </div>
        <div className='flex gap-2'>
            <label>Sex: </label>
            <select
                className='border-2'
                placeholder="Enter Sex"
                name="sex"
                value = {formData.sex}
                onChange={handleChange}
            >
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </div>
        <div className='flex gap-2'>
            <label>Phone: </label>
            <input
                className='border-2'
                type="text"
                placeholder="Enter Phone Number"
                name="phone"
                value = {formData.phone}
                onChange={handleChange}
            />
        </div>
        <div className='flex gap-2'>
            <label>Email: </label>
            <input
                className='border-2'
                type="text"
                placeholder="Enter Email Address"
                name="email"
                value = {formData.email}
                onChange={handleChange}
            />
        </div>
        <div className='flex gap-2'>
            <label>Street Address: </label>
            <input
                className='border-2'
                type="text"
                placeholder="Enter Street Address"
                name="street_address"
                value = {formData.street_address}
                onChange={handleChange}
            />
        </div>
        <div className='flex gap-2'>
            <label>Barangay: </label>
            <input
                className='border-2'
                type="text"
                placeholder="Enter Barangay"
                name="barangay"
                value = {formData.barangay}
                onChange={handleChange}
            />
        </div>
        <div className='flex gap-2'>
            <label>City: </label>
            <input
                className='border-2'
                type="text"
                placeholder="Enter City"
                name="city"
                value = {formData.city}
                onChange={handleChange}
            />
        </div>
        <div className='flex gap-2'>
            <label>Country: </label>
            <input
                className='border-2'
                type="text"
                placeholder="Enter Country"
                name="country"
                value = {formData.country}
                onChange={handleChange}
            />
        </div>
        <div className='flex gap-2'>
            <label>Emergency Contact Name: </label>
            <input
                className='border-2'
                type="text"
                placeholder="Enter Emergency Contact Name"
                name="emergency_contact_name"
                value = {formData.emergency_contact_name}
                onChange={handleChange}
            />
        </div>
        <div className='flex gap-2'>
            <label>Emergency Contact Phone: </label>
            <input
                className='border-2'
                type="text"
                placeholder="Enter Emergency Contact Phone"
                name="emergency_contact_phone"
                value = {formData.emergency_contact_phone}
                onChange={handleChange}
            />
        </div>
        <button 
            className='bg-white px-6 py-2 mt-8 rounded-lg hover:bg-gray-200 transition-colors duration-300 ease-in-out'
            type="submit"
        >
            Add Patient
        </button>
    </form>
  )
}




