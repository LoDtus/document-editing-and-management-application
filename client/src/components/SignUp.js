import { useState } from 'react';

export default function SignUp({signup, setSignup, setSignin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [usernameExists, setUsernameExists] = useState(false);

    function openSignIn() {
        setSignup(false);
        setSignin(true);
    }

    function signUp() {
        // if (!usernameExists) {
        //     // Check
        //     if () {
        //         console.log("Username Availble!");
        //         setUsernameExists(true);
        //     } else {
        //         console.log("Wrong Username!");
        //         return;
        //     }
        // }
        // if (repassword !== password) {
        //     console.log("Wrong Repassword!");
        //     return;
        // } else {
        //     console.log("Done!");
        //     // add
        // }
    }

    return (
        <div className={signup ? 'top-0 left-0 flex items-center' : 'hidden'}>
            <div className="w-full h-full fixed top-0 left-0 bg-[#52565c]/60 z-10"
                onClick={() => setSignup(false)}></div>
            <div className="flex flex-col bg-white p-6 z-20 rounded-md fixed translate-x-[-50%] translate-y-[80%]">
                <span className='flex justify-center font-xl font-bold mb-4 text-2xl'>Sign Up</span>
                <div className="flex items-center mb-1">
                    <label className='w-[100px]' htmlFor="username-signup">Username: </label>
                    <input type="text" name="username-signup" id="username-signup"
                        className='bg-[#e9ebee] grow rounded-sm py-1 px-2'
                        onBlur={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex items-center mb-1">
                    <label className='w-[140px]' htmlFor="password-signin">New password: </label>
                    <input type="password" name="password-signin" id="password-signin"
                        className='bg-[#e9ebee] grow rounded-sm py-1 px-2'
                        onBlur={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center mb-2">
                    <label className='w-[140px]' htmlFor="repassword-signin">Re-enter password: </label>
                    <input type="password" name="repassword-signin" id="repassword-signin"
                        className='bg-[#e9ebee] grow rounded-sm py-1 px-2'
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