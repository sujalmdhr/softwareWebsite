import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';


function Setting({ initialName }) {
   
    const [name, setName] = useState(initialName || '');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [numberError, setNumberError] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        // dispatch(updateProfile({
        //     name,
        //     email,
        //     number,
        //     oldPassword,
        //     password
        // }));
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
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="outline-none h-10 border border-sm w-full px-5"
                            type="text"
                            placeholder="Full name"
                            required
                        />
                    </div>
                    <div className="mr-5">
                        <p className="text-zinc-600 font-semibold">Email :</p>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="outline-none h-10 border border-sm w-full px-5"
                            type="text"
                            placeholder="Email"
                            required
                        />
                        {emailError && <p className="text-red-500">{emailError}</p>}
                    </div>
                    <div className="mr-5">
                        <p className="text-zinc-600 font-semibold">Phone number :</p>
                        <input
                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                            className="outline-none h-10 border border-sm w-full px-5"
                            type="tel"
                            pattern="[0-9]{10}"
                            placeholder="Phone Number"
                            required
                        />
                        {numberError && <p className="text-red-500">{numberError}</p>}
                    </div>
                    <div className="mr-5">
                        <p className="text-zinc-600 font-semibold">Old Password :</p>
                        <input
                            onChange={(e) => setOldPassword(e.target.value)}
                            value={oldPassword}
                            className="outline-none h-10 border border-sm w-full px-5"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="mr-5">
                        <p className="text-zinc-600 font-semibold">New Password :</p>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="outline-none h-10 border border-sm w-full px-5"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>
                    
                    <div className="mr-5">
                        <button className="bg-blue-400 text-white h-10 hover:bg-blue-600 mt-4 duration-300 rounded-full w-full font-semibold">
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
