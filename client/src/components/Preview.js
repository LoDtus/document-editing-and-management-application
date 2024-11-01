import './CkeditorComponent/style.css'
import { useDispatch, useSelector } from 'react-redux';
import { getDocId, getDocValue, getPreview } from '../redux/selectors';
import Ckeditor from './CkeditorComponent/Ckeditor';
import { useEffect } from 'react';
import documentSlice from '../slices/documentSlice';

export default function Preview() {
    const dispatch  = useDispatch();
    const docId     = useSelector(getDocId);
    const docValue  = useSelector(getDocValue);
    const isPreview = useSelector(getPreview);

    useEffect(() => {
        if (!isPreview)
            dispatch(documentSlice.actions.setSaveLocal(1));
    }, [isPreview]);

    return (
        <div className="xl:w-[60%] basis-[60%] xl:h-full sm:mb-2 xl:mb-0
            flex justify-center">
            <Ckeditor
                isPreview={true}
                docValue={docValue}
            />
        </div>
    )
};