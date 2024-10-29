export default function SignIn({signin, setSignin}) {
    function signIn() {

    }

    return (
        <div className={signin ? 'top-0 left-0 flex items-center' : 'hidden'}>
            <div className="w-full h-full fixed top-0 left-0 bg-[#52565c]/60 z-10"
                onClick={() => setSignin(false)}></div>
            <div className="flex flex-col bg-white p-6 z-20 rounded-md fixed translate-x-[-50%] translate-y-[80%]">
                <span className='flex justify-center font-xl font-bold mb-4 text-2xl'>Sign In</span>
                <div className="flex mb-2">
                    <label className='w-[100px]' htmlFor="username-signin">Username: </label>
                    <input type="text" name="username-signin" id="username-signin"
                        className='bg-[#e9ebee] grow'
                    />
                </div>
                <div className="flex mb-2">
                    <label className='w-[100px]' htmlFor="password-signup">Password: </label>
                    <input type="password" name="password-signup" id="password-signup"
                        className='bg-[#e9ebee] grow'
                    />
                </div>
                <div className="flex items-center mb-2 h-8 ">
                    <div className="grow flex items-center">
                        <input type="checkbox" name="rememberMe" id="rememberMe" className='h-4 w-4 mr-1'/>
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <span className='text-[#0b57d4]'>Forgot password?</span>
                </div>

                <button 
                    className='p-3 w-full text-white bg-[#0b57d4] hover:cursor-pointer hover:bg-[#696fa7]
                    rounded-md mb-2'
                    onClick={signIn}>
                    Sign Up
                </button>
                <div>
                    <span>Don't have an account?</span>
                    <span className='text-[#0b57d4] ml-2'>Create an account</span>
                </div>
            </div>
        </div>
    )
};