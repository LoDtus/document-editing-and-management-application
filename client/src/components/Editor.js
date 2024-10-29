import React, { useEffect, useRef, useState } from "react";
import Ckeditor from "./CkeditorComponent/Ckeditor";
import documentSlice from "../slices/documentSlice";
import { useSelector } from 'react-redux';
import { getIsNew } from "../redux/selectors";
import { useDispatch } from 'react-redux';

export default function Editor() {
    const dispatch = useDispatch();
    // const isNew = useState(useSelector(getIsNew));
    const [value, setValue] = useState(''); 
    const [isNew, setNew] = useState(false);

    useEffect(() => {
        // dispatch(documentSlice.actions.setNewDoc(true));
        // console.log(value);
        dispatch(documentSlice.actions.setDocValue({
            userId: '',
            subject: '',
            content: '',
            modifyAt: '',
        }))
    }, [value]);

    return (
        <div className="xl:w-[60%] basis-[60%] xl:h-full sm:mb-2 xl:mb-0
            flex justify-center">
            <Ckeditor
                isNew={isNew}
                setValue={setValue} />
        </div>
    )
};