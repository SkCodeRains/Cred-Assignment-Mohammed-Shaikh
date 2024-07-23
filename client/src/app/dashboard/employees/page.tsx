// app/dashboard/create-employee/page.tsx

"use client";

import { EmployeeDataTable } from '@/components/EmployeeDataTable';
import EmployeeForm from '@/components/EmployeeForm';
import axiosInstance from '@/utils/auth';
import { useEffect, useState } from 'react';



export default function CreateEmployeePage() {

  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployee] = useState([]);

  function toggleModel(): void {
    setShowModal(!showModal);
  }
  useEffect(() => {
    getEmployee();
  }, [])

  const getEmployee = () => {
    setShowModal(false)
    const response = axiosInstance.get('/employees');
    response.then((response) => {
      setEmployee(response.data)
    })
  }


  return (
    <div className='px-11 pt-11'>
      <button type="button" className="py-2  px-4 mb-3 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500" onClick={toggleModel}><i className="fas fa-plus"></i> Add Employee</button>
      <EmployeeDataTable data={employees} />
      {
        showModal && (
          <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 " id="modal" >
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-900 opacity-75" />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
              <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h1 className="text-3xl mb-6">Add Employee</h1>
                  <EmployeeForm getEmployee={getEmployee} toggleModelFunction={toggleModel} />
                </div>

              </div>
            </div>
          </div>

        )
      }

    </div>
  );
}
