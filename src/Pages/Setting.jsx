// Setting.js
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../features/userSlice';

function Setting({ initialName }) {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: initialName || '',
        email: '',
        number: '',
        oldPassword: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log("Form is being submitted");
        console.log("Form Data:", formData);
        
        // Assuming you have the user's id stored somewhere, or you receive it as a prop
        const userId = '123'; // You should replace this with the actual user id
        
        // Merge the formData with the userId
        const updatedProfile = {
            id: userId,
            ...formData
        };
    
        dispatch(updateProfile(updatedProfile));
    };
    
    

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="bg-white rounded-lg shadow-lg shadow-black/30 sm:h-auto sm:w-96 md:w-3/5 lg:w-2/5 xl:w-1/3 pl-7 w-11/12 flex flex-col justify-center">
                <form className="space-y-4 sm:space-y-6 p-4" onSubmit={handleSave}>
                    <div className='flex items-center justify-center mb-6'>
                        <div className="mr-2">
                            <FaUser className='mt-1' />
                        </div>
                        <p className="font-semibold text-2xl tracking-white">Profile</p>
                    </div>

                    <div className="mr-5">
                        <p className="text-zinc-600 font-semibold">Full Name</p>
                        <input
                            onChange={handleChange}
                            value={formData.name}
                            name="name"
                            className="outline-none h-10 border border-sm w-full px-5"
                            type="text"
                            placeholder="Full name"
                            required
                        />
                    </div>
                    <div className="mr-5">
                        <p className="text-zinc-600 font-semibold">Email :</p>
                        <input
                            onChange={handleChange}
                            value={formData.email}
                            name="email"
                            className="outline-none h-10 border border-sm w-full px-5"
                            type="text"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mr-5">
                        <p className="text-zinc-600 font-semibold">Phone number :</p>
                        <input
                            onChange={handleChange}
                            value={formData.number}
                            name="number"
                            className="outline-none h-10 border border-sm w-full px-5"
                            type="tel"
                            pattern="[0-9]{10}"
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className="mr-5">
                        <p className="text-zinc-600 font-semibold">Old Password :</p>
                        <input
                            onChange={handleChange}
                            value={formData.oldPassword}
                            name="oldPassword"
                            className="outline-none h-10 border border-sm w-full px-5"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="mr-5">
                        <p className="text-zinc-600 font-semibold">New Password :</p>
                        <input
                            onChange={handleChange}
                            value={formData.password}
                            name="password"
                            className="outline-none h-10 border border-sm w-full px-5"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    
                    <div className="mr-5">
                        <button className="bg-blue-400 text-white h-10 hover:bg-blue-600 mt-4 duration-300 rounded-full w-full font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50" type="submit">
                            Save
                        </button>
                        <p className="text-end">Forgot Password?</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Setting;
