import React, { useEffect, useState } from "react";
import Ckeditor from "./CkeditorComponent/Ckeditor";
import documentSlice from "../slices/documentSlice";
import { useSelector } from 'react-redux';
import { getAuth, getDocId, getNewDoc, getPreview, getSaveDb, getSaveLocal } from "../redux/selectors";
import { useDispatch } from 'react-redux';
import { getCurrentTime, getSubject } from "../utils/functions";
import { addDoc, updateDoc } from "../utils/documentService";

export default function Editor() {
    const dispatch  = useDispatch();
    const userId    = useSelector(getAuth);
    const docId     = useSelector(getDocId);
    const isNew     = useSelector(getNewDoc);
    const isPreview = useSelector(getPreview);
    const saveLocal   = useSelector(getSaveLocal);
    const saveDb   = useSelector(getSaveDb);
    const [value, setValue] = useState('');

    useEffect(() => {
        
    }, [docId]);

    useEffect(() => {
        if (isPreview) {
            dispatch(documentSlice.actions.setDocValue(value));
            dispatch(documentSlice.actions.setSaveLocal(1));
        }
    }, [isPreview]);

    async function saveDoc(documentId, userId, subject, content, modifyAt) {
        if (documentId === -1)
            return await addDoc(userId, subject, content, modifyAt);
        else
            return await updateDoc(documentId, userId, subject, content, modifyAt);
    }

    useEffect(() => {
        if (!saveDb)
            return;
        if (value === '') {
            console.log('Not yet!');
            return;
        }
        const subject   = getSubject(value);
        const content   = value;
        const modifyAt  = getCurrentTime();

        // const response = saveDoc(docId, userId, subject, content, modifyAt);
        // console.log(response);
    }, [saveDb]);

    return (
        <div className="xl:w-[60%] basis-[60%] xl:h-full sm:mb-2 xl:mb-0
            flex justify-center">
            <Ckeditor
                isNew={isNew}
                isPreview={false}
                docValue={''}
                setValue={setValue} />
        </div>
    )
};