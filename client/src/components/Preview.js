import './CkeditorComponent/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { getDocId, getDocValue, getPreview } from '../redux/selectors';
import Ckeditor from './CkeditorComponent/Ckeditor';
import { useEffect, useState } from 'react';
import documentSlice from '../slices/documentSlice';
import { getDocById } from '../utils/documentService';

export default function Preview() {
    const dispatch  = useDispatch();
    const docId     = useSelector(getDocId);
    const docValue  = useSelector(getDocValue);
    const isPreview = useSelector(getPreview);
    const [value, setValue] = useState(docValue);

    useEffect(() => {
        if (docId === null)
            return;
        async function getDocValue(id) {
            const data = await getDocById(id);
            console.log(data);
            dispatch(documentSlice.actions.setDocValue(data.content));
        }
        getDocValue(docId);
    }, [docId]);

    useEffect(() => {
        setValue(docValue);
    }, [docValue]);

    useEffect(() => {
        if (!isPreview)
            dispatch(documentSlice.actions.setSaveLocal(1));
    }, [isPreview]);

    return (
        <div className="xl:w-[60%] basis-[60%] xl:h-full sm:mb-2 xl:mb-0
            flex justify-center">
            <Ckeditor
                isPreview={true}
                docValue={value}
            />
        </div>
    )
};