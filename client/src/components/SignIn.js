import { useEffect, useState } from "react"
import { useSetAuthCredentials } from "../utils/api";
import { Input } from 'antd';
import { checkSignIn } from "../utils/userService";
import { getCurrentTime } from "../utils/functions";

export default function SignIn({signin, setSignin, setSignup}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const setAuthCredentials  = useSetAuthCredentials();
    let response;

    function openSignUp() {
        setSignin(false);
        setSignup(true);
    }

    async function signIn() {
        response = await checkSignIn(username.trim(), password);
        if (response) {
            console.log("Done!");
            setAuthCredentials(username, password, rememberMe, getCurrentTime());
            // Cookies
            setSignin(false);
            return;
        } else {
            alert("Wrong Information!");
            return;
        }
    }

    return (
        <div className={signin ? 'top-0 left-0 flex items-center' : 'hidden'}>
            <div className="w-full h-full fixed top-0 left-0 bg-[#52565c]/60 z-10"
                onClick={() => setSignin(false)}></div>
            <div className="flex flex-col bg-white p-6 z-20 rounded-md fixed translate-x-[-50%] translate-y-[80%]">
                <span className='flex justify-center font-xl font-bold mb-4 text-2xl'>Sign In</span>
                <div className="flex items-center mb-1">
                    <label className='w-[100px]' htmlFor="username-signin">Username: </label>
                    <Input
                        className='basis-[70%]'
                        name="username-signin" id="username-signin"
                        placeholder="Your username"
                        onBlur={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex items-center mb-2">
                    <label className='w-[100px]' htmlFor="password-signin">Password: </label>
                    <Input.Password
                        className='basis-[70%]'
                        name="password-signin" id="password-signin"
                        placeholder="Your password"
                        onBlur={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center mb-2 h-8">
                    <div className="grow flex items-center">
                        <input type="checkbox" name="rememberMe" id="rememberMe" className='h-4 w-4 mr-1 hover:cursor-pointer'
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label htmlFor="rememberMe" className="hover:cursor-pointer">Remember me</label>
                    </div>
                    <span className='text-[#0b57d4] duration-200 hover:cursor-pointer hover:text-[#307fff] active:scale-90'>Forgot password?</span>
                </div>

                <button 
                    className='p-3 w-full text-white font-semibold bg-[#0b57d4] rounded-md mb-2
                    duration-200 hover:cursor-pointer hover:bg-[#696fa7] active:scale-90'
                    onClick={signIn}>
                    Sign Up
                </button>
                <div>
                    <span>Don't have an account?</span>
                    <span className='text-[#0b57d4] ml-2 duration-200 hover:cursor-pointer hover:text-[#307fff] active:scale-90'
                        onClick={() => openSignUp()}>Create an account</span>
                </div>
            </div>
        </div>
    )
};