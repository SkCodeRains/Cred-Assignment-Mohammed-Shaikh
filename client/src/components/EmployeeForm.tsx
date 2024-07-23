import axiosInstance from '@/utils/auth';
import { useState } from 'react';

const EmployeeForm = ({ getEmployee, toggleModelFunction }: { getEmployee: () => void, toggleModelFunction: () => void }) => {
  const [employee, setEmployee] = useState({ name: '', designation: '', ctc: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/employees', employee);
      if (response.status === 200) {
        getEmployee();
        alert('Employee created successfully');
      }
    } catch (error: any) {
      alert(error.response.data)
      console.error('Error creating employee', error);
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="designation" placeholder="Designation" onChange={handleChange} required />
        <input type="number" name="ctc" placeholder="CTC" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <div className="bg-gray-200 px-4 py-3 text-right flex">
          <button type="button" className="py-2 px-4 w-1/2 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={() => { toggleModelFunction(); }}><i className="fas fa-times"></i> Cancel</button>
          <button type="submit" className="py-2 px-4 w-1/2 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500" ><i className="fas fa-plus"></i> Add</button>
        </div>
      </form>
    </>
  );
};

export default EmployeeForm;