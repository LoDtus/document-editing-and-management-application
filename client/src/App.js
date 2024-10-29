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


export default function App() {
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);

    setAuthCredentials('phamthihoaithu', '567');

	return (
		<div className="App bg-[#fafafa] flex flex-col justify-center items-center">
            <Header/>
            <SignIn
                signin={signin}
                setSignin={setSignin}
            />
            <SignUp
                signup={signup}
                setSignup={setSignup}
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
                        // value={value}
                    />
                </div>
            </main>
            <Footer/>
		</div>
	);
}