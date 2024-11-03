import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import documentSlice from '../slices/documentSlice';
import { getAuth, getSaveDb, getSaveLocal } from '../redux/selectors';
import { Input } from 'antd';
import { useSetAuthCredentials } from '../utils/api';
import { getCurrentTime } from '../utils/functions';

export default function Profile({setSignin, setSignup}) {
    const navigate  = useNavigate();
    const dispatch  = useDispatch();
    const saveLocal = useSelector(getSaveLocal);
    const fileInp   = useRef(null);
    const auth      = useSelector(getAuth);
    const [edit, setEdit] = useState(true);
    const [profile, setProfile] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [diff, setDiff] = useState(false);
    const SetAuthCredentials = useSetAuthCredentials();

    useEffect(() => {
        if (auth.username === '') {
            setProfile(false);
        } else {
            setProfile(true);
            setNewUsername(auth.username);
            setNewPassword(auth.password);
        }
    }, [auth.username]);

    function preview() {
        if (edit) {
            dispatch(documentSlice.actions.setPreviewDoc(true));
        } else {
            dispatch(documentSlice.actions.setPreviewDoc(false));
        }
    }

    useEffect(() => {
        if (saveLocal > 0) {
            navigate(edit ? '/preview' : '/');
            setEdit(!edit);
        }
    }, [saveLocal]);

    function saveDoc() {
        dispatch(documentSlice.actions.setSaveDb(true));
    }

    function importFile() {
        fileInp.current.click();
    }
    function handleFileImport(event) {
        const file = event.target.files[0];
        if (file) {
            console.log("File uploaded:", file.name);
            // Xử lý file tải lên tại đây (ví dụ: gửi lên server)
        }
    }

    useEffect(() => {
        if (auth.username === newUsername
            || auth.password === newPassword
            || newUsername === ''
            || newPassword === ''
        ) {
            setDiff(false);
        } else {
            setDiff(true);
        }
    }, [newUsername, newPassword]);

    function updateInfor() {
        
    }

    function signOut() {
        SetAuthCredentials('', '', false, getCurrentTime());
    }

    return (
        <div className="profile xl:pl-2
            basis-[20%] bg-[#fafafa] font-semibold text-white">
            <input type="file" ref={fileInp} className='hidden' onChange={handleFileImport}/>
            <div className={profile ? "hidden" : "flex"}>
                <div className="title basis-[50%] mr-1 flex justify-center items-center
                p-3 mb-2 bg-[#afb1c9] rounded-md 
                duration-200 hover:cursor-pointer hover:bg-[#bbbdd2] active:scale-90"
                onClick={() => setSignin(true)}>Sign In</div>
                <div className="title basis-[50%] ml-1 flex justify-center items-center
                p-3 mb-2 bg-[#565c91] rounded-md 
                duration-200 hover:cursor-pointer hover:bg-[#696fa7] active:scale-90"
                onClick={() => setSignup(true)}>Sign Up</div>
            </div>
            <div className={profile ? 'p-3 mb-2 rounded-md border border-black' : 'hidden'}>
                <div className='text-black flex items-center mb-1'>
                    <label htmlFor='username-profile' className='font-semibold basis-[30%]'>Username:</label>
                    <Input
                        className='font-normal basis-[70%]'
                        name="username-profile" id="username-profile"
                        placeholder='Your username'
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                </div>
                <div className='text-black flex items-center mb-2'>
                    <label htmlFor='password-profil' className='font-semibold basis-[30%]'>Password:</label>
                    <Input.Password
                        className='font-normal basis-[70%]'
                        name="password-profile" id="password-profile"
                        placeholder='Your password'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className='flex mb-2'>
                    {diff && <button className='basis-[50%] mr-1 p-3 flex justify-center items-center rounded-md bg-[#698aff]
                        duration-200 hover:bg-[#7b97ff] active:scale-90'
                        onClick={() => updateInfor()}>
                        Update
                    </button>}
                    {!diff && <button className='basis-[50%] mr-1 p-3 flex justify-center items-center rounded-md bg-[#98a2ae]'>
                        Update
                    </button>}
                    <button className='basis-[50%] ml-1 p-3 flex justify-center items-center rounded-md bg-[#e7676a]
                        duration-200 hover:bg-[#ee7e80] active:scale-90'
                        onClick={() => updateInfor()}>
                        Delete
                    </button>
                </div>
                <button className='w-full p-3 flex justify-center items-center rounded-md bg-[#98a2ae]
                    duration-200 hover:bg-[#b4bdc9] active:scale-90'
                    onClick={() => signOut()}>
                    Sign Out
                </button>
            </div>
            <div className='btnProfile sm:flex xl:block justify-between'>
                <div className="title basis-[25%] sm:mr-1 xl:mx-0 p-3 flex justify-center items-center bg-[#57baa0] mb-2 rounded-md 
                    duration-200 hover:cursor-pointer hover:bg-[#6ccab1] active:scale-90"
                onClick={() => saveDoc()}>Save</div>
                <div className="title basis-[25%] sm:mx-1 xl:mx-0 p-3 flex justify-center items-center bg-[#937152] mb-2 rounded-md 
                    duration-200 hover:cursor-pointer hover:bg-[#a28161] active:scale-90"
                onClick={() => preview()}>{edit ? 'Preview' : 'Continue Editing'}</div>
                <div className="title basis-[25%] sm:mx-1 xl:mx-0 p-3 flex justify-center items-center bg-[#f2b843] mb-2 rounded-md 
                    duration-200 hover:cursor-pointer hover:bg-[#f7c563] active:scale-90"
                onClick={() => importFile()}>Import</div>
                <div className="title basis-[25%] sm:ml-1 xl:mx-0 p-3 flex justify-center items-center bg-[#e7676a] mb-2 rounded-md 
                    duration-200 hover:cursor-pointer hover:bg-[#ee7e80] active:scale-90"
                >Export</div>
            </div>
        </div>
    )
};