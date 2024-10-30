import { useState } from 'react';
import { addUser, chechExists } from '../utils/userService';
import { Input } from 'antd';
import { setAuthCredentials } from '../utils/api';

export default function SignUp({signup, setSignup, setSignin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [usernameExists, setUsernameExists] = useState(false);
    let temp, response;

    function openSignIn() {
        setSignup(false);
        setSignin(true);
    }

    async function signUp() {
        if (!usernameExists || temp !== username) {
            response = await chechExists(username);
            if (response) {
                console.log("Username Done!");
                setUsernameExists(true);
                temp = username;
            } else {
                alert("Username already exists!");
                setUsernameExists(false);
                return;
            }
        }
        if (repassword !== password) {
            alert("Wrong Repassword!");
            return;
        } else {
            response = await addUser(username, password);
            if (response) {
                setAuthCredentials(username, password);
                alert("New account created successfully!");
                // Cookies
            }
        }
    }

    return (
        <div className={signup ? 'top-0 left-0 flex items-center' : 'hidden'}>
            <div className="w-full h-full fixed top-0 left-0 bg-[#52565c]/60 z-10"
                onClick={() => setSignup(false)}></div>
            <div className="flex flex-col w-[35%] bg-white p-6 z-20 rounded-md fixed translate-x-[-50%] translate-y-[80%]">
                <span className='flex justify-center font-xl font-bold mb-4 text-2xl'>Sign Up</span>
                <div className="flex items-center mb-1">
                    <label className='basis-[30%]' htmlFor="username-signup">Username: </label>
                    <Input
                        className='basis-[70%]'
                        name="username-signup" id="username-signup"
                        onBlur={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex items-center mb-1">
                    <label className='basis-[30%]' htmlFor="password-signup">New password: </label>
                    <Input.Password
                        className='basis-[70%]'
                        placeholder=""
                        name="password-signup" id="password-signup"
                        onBlur={(e) => setPassword(e.target.value)}
                        />
                </div>
                <div className="flex items-center mb-2">
                    <label className='basis-[30%]' htmlFor="repassword-signup">Re-enter password: </label>
                    <Input.Password
                        className='basis-[70%]'
                        placeholder=""
                        name="repassword-signup" id="repassword-signup"
                        onBlur={(e) => setRepassword(e.target.value)}
                        />
                </div>

                <button
                    className='p-3 w-full text-white font-semibold bg-[#0b57d4] rounded-md mb-2
                    duration-200 hover:cursor-pointer hover:bg-[#696fa7] active:scale-90'
                    onClick={signUp}>
                    Sign Up
                </button>
                <div className='flex justify-center'>
                    <span>Already have an account?</span>
                    <span
                        className='text-[#0b57d4] ml-2 duration-200 hover:cursor-pointer hover:text-[#307fff] active:scale-90'
                        onClick={() => openSignIn()}>Sign In</span>
                </div>
            </div>
        </div>
    )
};