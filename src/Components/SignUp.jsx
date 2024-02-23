import React, { useState } from "react";
import { AiFillFacebook, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError("");
    setPasswordError("");
    setNumberError("");
    setError("");

    // Simple email validation
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Simple password validation
    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    const newUser = {
      username:userName,
      email: email,
      password: password,
      phonenumber:number
    };

    try {
      const response = await axios.post("http://localhost:3000/users", newUser);
      console.log("New user created:", response.data);
      if (response.status === 201) {
        alert("User Signed Up");
        // Clear form fields after successful sign-up
        setUserName("");
        setEmail("");
        setPassword("");
        setNumber("");
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred during sign up");
      }
    }
  };

  return (
    <>
      <div className="gradientBg2 h-screen flex justify-center items-center ">
        {/* form */}
        <div className="bg-white rounded-lg shadow-lg shadow-black/30 h-[500px] pl-7 w-[400px] flex flex-col justify-center">
          <form className="space-y-1 " onSubmit={handleSignUp}>
            <div>
              <p className="font-semibold text-2xl tracking-white">SIGN UP</p>
            </div>
            <div className="mr-5">
              <p className="text-zinc-600 font-semibold">UserName :</p>
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                className="outline-none h-10 border border-sm w-full px-5"
                type="text"
                placeholder="User Name"
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
              <p className="text-zinc-600 font-semibold">Password :</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="outline-none h-10 border border-sm w-full px-5 "
                type="password"
                placeholder="Password"
                required
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
            {error && <p className="text-red-500">{error}</p>}
          <  div className="mr-5">
                        <p className="text-zinc-600 font-semibold">Phone Number :</p>
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
              <button className="bg-blue-400 text-white h-8 hover:bg-blue-600 mt-4 duration-300 rounded-full w-full font-semibold">
                SignUP
              </button>
              <p className="text-end ">Forgot Password?</p>
            </div>
            <p className="flex justify-center font-semibold">OR</p>
            <div className="flex flex-row justify-center gap-10 text-3xl">
              <AiFillFacebook className="rounded-full text-blue-600" />
              <AiFillGoogleCircle className="rounded-full text-red-600" />
              <AiFillLinkedin className="rounded-full text-blue-800" />
            </div>
            <div>
              <p className="text-zinc-500 mt-2">
                Already have an account?{" "}
                <span className="text-black font-bold underline underline-offset-4 pl-2 ">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
