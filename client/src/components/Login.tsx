"use client";
import { useAuth } from '@/contexts/AuthContext';
import React, { useState } from 'react'

export default function Login() {
    const [employee, setEmployee] = useState({ username: '', password: '' });
    const { login } = useAuth();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // await api.post('/login', employee).then(async (response: any) => {
            //     await login(employee.username, employee.password)
            //     setAuthToken(response.token);
            //     redirect('/dashboard');
            // });
            await login(employee.username, employee.password);
        } catch (error) {
            console.error('Error creating employee', error);
        }
    };
    return (
        <form method="post" onSubmit={handleSubmit}>

            <label className="font-medium text-gray-800" >Username</label>
            <input type="text" name="username" placeholder="Username" required onChange={handleChange} className="w-full outline-none rounded bg-gray-100 text-black text-lg p-2 mt-2 mb-3" />



            <label className="font-medium text-gray-800" >Password</label>
            <input type="password" name="password" placeholder="Username" required onChange={handleChange} className="w-full outline-none rounded bg-gray-100 text-black text-lg p-2 mt-2 mb-3" />


            <div className="bg-gray-200 px-4 py-3 text-right">
                <button type="button" className="py-2 px-4 bg-blue-500 w-full text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500" onClick={handleSubmit}><i className="fas fa-plus"></i> Login</button>
            </div>
        </form>
    )
}
