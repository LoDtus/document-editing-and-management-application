import "./App.css";
import React, { useRef, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Documents from "./components/Documents";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import Profile from "./components/Profile";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
    const [value, setValue] = useState('');
    const currentValue = useRef("<h1 class='title'><strong>Untitled</strong></h1>")
    const [signin, setSignin] = useState(false);
    const [signup, setSignup] = useState(false);
    console.log(value);

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
                <div className="container-main lg:flex 2xl:px-3">
                    <Documents
                        value={value}
                    />
                    <Routes>
                        <Route path="/" 
                            element={
                            <Editor
                                value={value}
                                setValue={setValue}
                                currentValue={currentValue}
                            />}    
                        />
                        <Route path="/preview" 
                            element={
                            <Preview
                                value={value}
                            />}    
                        />
                    </Routes>
                    
                    <Profile
                        setSignin={setSignin}
                        setSignup={setSignup}
                        value={value}
                    />
                </div>
            </main>
            <Footer/>
		</div>
	);
}

export default App;
