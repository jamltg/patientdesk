import React, { useEffect, useState } from 'react'

export default function PatientList() {
    const [patientsList, setPatientsList] = useState([]);

    useEffect(()=>{
        const fetchPatients = async() => {
            const res = await fetch('http://localhost:3000/api/patients');
            const data = await res.json();
            setPatientsList(data);
        }

        fetchPatients();
    }, []);

    const handleDelete = async (id) => {
        try {
            await fetch (`http://localhost:3000/api/patients/${id}`, {
                method: "DELETE",
            });

            setPatientsList(prev =>
                prev.filter(patient => patient.id !== id)
            )
        } catch (err) {
            console.error(err);
        }
    }

  return (
    <div className="p-4">
        {/* ================= MOBILE VIEW (CARDS) ================= */}
        <div className="md:hidden space-y-3">
            {patientsList.map((patient) => (
                <div key={patient.id} className="border rounded-lg p-3 shadow-sm">
                    <p className="font-semibold text-lg">
                        {patient.first_name} {patient.middle_name} {patient.last_name}
                    </p>
                    <p><span className="font-medium">DOB:</span> {patient.date_of_birth}</p>
                    <p><span className="font-medium">Sex:</span> {patient.sex}</p>
                    <p><span className="font-medium">Phone:</span> {patient.phone}</p>
                    <p><span className="font-medium">Email:</span> {patient.email}</p>
                    <p className="mt-2">
                        <span className="font-medium">Address:</span><br />
                        {patient.street_address}, {patient.barangay}, {patient.city}, {patient.country}
                    </p>
                    <p className="mt-2">
                        <span className="font-medium">Emergency:</span><br />
                        {patient.emergency_contact_name} - {patient.emergency_contact_phone}
                    </p>
                </div>
            ))}
        </div>
        {/* ================= DESKTOP VIEW (TABLE) ================= */}
        <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 border">Name</th>
                        <th className="p-2 border">DOB</th>
                        <th className="p-2 border">Sex</th>
                        <th className="p-2 border">Phone</th>
                        <th className="p-2 border">Email</th>
                        <th className="p-2 border">Address</th>
                        <th className="p-2 border">Emergency Contact</th>
                        <th className="p-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patientsList.map((patient) => (
                        <tr key={patient.id} className="hover:bg-gray-50">
                            <td className="p-2 border whitespace-nowrap">
                                {patient.first_name} {patient.middle_name} {patient.last_name}
                            </td>
                            <td className="p-2 border">
                                {patient.date_of_birth}
                            </td>
                            <td className="p-2 border">
                                {patient.sex}
                            </td>
                            <td className="p-2 border">
                                {patient.phone}
                            </td>
                            <td className="p-2 border">
                                {patient.email}
                            </td>
                            <td className="p-2 border">
                                {patient.street_address}, {patient.barangay}, {patient.city}, {patient.country}
                            </td>

                            <td className="p-2 border">
                                {patient.emergency_contact_name} -{" "}
                                {patient.emergency_contact_phone}
                            </td>
                            <td className="border">
                                <div className='flex gap-2 justify-center'>
                                    <button
                                    onClick={() => handleEdit(patient)}
                                    className="px-2 py-1 bg-blue-500 text-white rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(patient.id)}
                                        className="px-2 py-1 bg-red-500 text-white rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
