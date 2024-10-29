import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer"
import DocumentList from "./components/DocumentList";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { setAuthCredentials } from './utils/api';
import { convertTime, getCurrentTime } from "./utils/functions";

export default function App() {
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);
    setAuthCredentials('phamthihoaithu', '567');

    console.log(getCurrentTime());
    console.log(convertTime('2024-12-12T03:10:10.000+00:00'));

	return (
		<div className="App bg-[#fafafa] flex flex-col justify-center items-center">
            <Header/>
            <SignIn
                signin={signin}
                setSignin={setSignin}
                setSignup={setSignup}
            />
            <SignUp
                signup={signup}
                setSignup={setSignup}
                setSignin={setSignin}
            />
            <main className="flex justify-center min-h-[85vh] mb-5">
                <div className="container-main px-3 xl:flex">
                    <DocumentList/>
                    <Routes>
                        <Route
                            path="/"
                            element={<Editor/>}/>
                        <Route
                            path="/preview"
                            element={<Preview/>}/>
                    </Routes>
                    
                    <Profile
                        setSignin={setSignin}
                        setSignup={setSignup}
                    />
                </div>
            </main>
            <Footer/>
		</div>
	);
}