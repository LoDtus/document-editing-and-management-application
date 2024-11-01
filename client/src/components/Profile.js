import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import documentSlice from '../slices/documentSlice';
import { getSaveDb, getSaveLocal } from '../redux/selectors';

export default function Profile({setSignin, setSignup}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const saveLocal = useSelector(getSaveLocal);
    const fileInp = useRef(null);
    const [edit, setEdit] = useState(true);
    const [fisrtRender, setFirstRender] = useState(true);

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

    return (
        <div className="profile xl:pl-2
            basis-[20%] bg-[#fafafa] font-semibold text-white">
            <input type="file" ref={fileInp} className='hidden' onChange={handleFileImport}/>
            <div className="flex">
                <div className="title basis-[50%] mr-1 flex justify-center items-center
                p-3 mb-2 bg-[#afb1c9] rounded-md 
                duration-200 hover:cursor-pointer hover:bg-[#bbbdd2] active:scale-90"
                onClick={() => setSignin(true)}>Sign In</div>
                <div className="title basis-[50%] ml-1 flex justify-center items-center
                p-3 mb-2 bg-[#565c91] rounded-md 
                duration-200 hover:cursor-pointer hover:bg-[#696fa7] active:scale-90"
                onClick={() => setSignup(true)}>Sign Up</div>
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