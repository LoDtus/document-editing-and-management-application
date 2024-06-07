import '../App.css'

function SignIn({signin, setSignin}) {
    function signIn() {

    }

    return (
        <div className={signin ? 'signin top-0 left-0 flex items-center' : 'hidden'}>
            <div className="background-signin w-full h-full fixed top-0 left-0 bg-[#52565c]/60 z-10"
                onClick={() => setSignin(false)}></div>
            <div className="signin-form flex flex-col bg-white p-6 z-20 rounded-md fixed translate-x-[-50%] translate-y-[80%]">
                <span className='flex justify-center font-xl font-bold mb-4 text-2xl'>Sign In</span>
                <div className="flex mb-2">
                    <label className='w-[100px]' htmlFor="username-signin">Username: </label>
                    <input type="text" name="username-signin" id="username-signin"
                        className='bg-[#e9ebee] grow'
                    />
                </div>
                <div className="flex mb-2">
                    <label className='w-[100px]' htmlFor="email-signin">Email: </label>
                    <input type="text" name="email-signin" id="email-signin"
                        className='bg-[#e9ebee] grow'
                    />
                </div>
                <div className="flex mb-2">
                    <label className='w-[140px]' htmlFor="password-signin">New password: </label>
                    <input type="password" name="password-signin" id="password-signin"
                        className='bg-[#e9ebee] grow'
                    />
                </div>
                <div className="flex mb-2">
                    <label className='w-[140px]' htmlFor="repassword-signin">Re-enter password: </label>
                    <input type="password" name="repassword-signin" id="repassword-signin"
                        className='bg-[#e9ebee] grow'
                    />
                </div>

                <button 
                    className='p-3 w-full text-white bg-[#0b57d4] hover:cursor-pointer hover:bg-[#696fa7]
                    rounded-md mb-2'
                    onClick={signIn}>
                    Sign Up
                </button>
                <div className='flex justify-center'>
                    <span>Already have an account?</span>
                    <span className='text-[#0b57d4] ml-2'>Sign Up</span>
                </div>
            </div>
        </div>
    )
}
export default SignIn