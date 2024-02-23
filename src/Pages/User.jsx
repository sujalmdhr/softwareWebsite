// User.js
import React from 'react';
import { useSelector } from 'react-redux';

function User() {
    const { name, email, number, oldPassword, password } = useSelector((state) => state.user);

    console.log('User Data:', { name, email, number, oldPassword, password });

    return (
        <div>
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
