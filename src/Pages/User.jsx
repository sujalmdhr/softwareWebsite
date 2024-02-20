// Profile.js
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Setting from './Setting'; // Import the Setting component

function User() {
    // Define state variables to hold the profile data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');

    // Define functions to update profile data
    const handleProfileNameChange = (newName) => {
        setName(newName);
    };

    const handleProfileImageChange = (newImage) => {
        // Logic to handle profile image change
    };

    return (
        <div>
            {/* Render the Setting component */}
            <Setting
                initialName={name}
                initialImage={null} // Pass initialImage as needed
                onProfileNameChange={handleProfileNameChange}
                onProfileImageChange={handleProfileImageChange}
            />

            {/* Display the profile data */}
            <div>
                <h2>Profile Data:</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone Number: {number}</p>
                <p>Old Password: {oldPassword}</p>
                <p>New Password: {password}</p>
            </div>
        </div>
    );
}

export default User;
