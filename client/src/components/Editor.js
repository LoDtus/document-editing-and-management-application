import React, { useEffect, useState } from "react";
import Ckeditor from "./CkeditorComponent/Ckeditor";
import documentSlice from "../slices/documentSlice";
import { useSelector } from 'react-redux';
import { getAuth, getDocId, getDocValue, getNewDoc, getPreview, getSaveDb, getSaveLocal } from "../redux/selectors";
import { useDispatch } from 'react-redux';
import { getCurrentTime, getSubject } from "../utils/functions";
import { addDoc, getDocById, updateDoc } from "../utils/documentService";

export default function Editor() {
    const dispatch  = useDispatch();
    const userId    = useSelector(getAuth).username;
    const docId     = useSelector(getDocId);
    const docValue  = useSelector(getDocValue);
    const isNew     = useSelector(getNewDoc);
    const isPreview = useSelector(getPreview);
    const saveDb    = useSelector(getSaveDb);
    const [value, setValue] = useState('');

    useEffect(() => {
        if (docId === -1) {
            if (docValue === '')
                dispatch(documentSlice.actions.setDocValue(' '));
            else
                dispatch(documentSlice.actions.setDocValue(''));
            return;
        }
        async function getDocValue(id) {
            const data = await getDocById(id);
            dispatch(documentSlice.actions.setDocValue(data.content));
        }
        getDocValue(docId);
    }, [docId]);

    useEffect(() => {
        setValue(docValue);
    }, [docValue]);

    useEffect(() => {
        if (isPreview) {
            dispatch(documentSlice.actions.setDocValue(value));
            dispatch(documentSlice.actions.setSaveLocal(1));
        }
    }, [isPreview]);

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

        async function saveDocument() {
            let response;
            if (docId === -1) {
                response = await addDoc(userId, subject, content, modifyAt);
                dispatch(documentSlice.actions.setDocId(response));
            } else {
                response = await updateDoc(docId, userId, subject, content, modifyAt);
            }
            dispatch(documentSlice.actions.setSaveDb(false));
        };
        saveDocument();
    }, [saveDb]);

    return (
        <div className="xl:w-[60%] basis-[60%] xl:h-full sm:mb-2 xl:mb-0
            flex justify-center">
            <Ckeditor
                isNew={isNew}
                isPreview={false}
                docValue={value}
                setValue={setValue} />
        </div>
    )
};