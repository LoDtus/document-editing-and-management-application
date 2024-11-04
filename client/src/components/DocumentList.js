import { useEffect, useState } from 'react'
import DocumentItem from './DocumentItem';
import { deleteDocById, getAllItems } from '../utils/documentService';
import { useDispatch, useSelector } from 'react-redux';
import documentSlice from '../slices/documentSlice';
import { getAuth, getDocId, getDocValue, getNewDoc, getSaveDb } from '../redux/selectors';
import { getCurrentTime } from '../utils/functions';

export default function DocumentList() {
    const dispatch  = useDispatch();
    const docId     = useSelector(getDocId);
    const docValue  = useSelector(getDocValue);
    const authData  = useSelector(getAuth);
    const isNew     = useSelector(getNewDoc);
    const saveDb    = useSelector(getSaveDb);
    const [items, setItems] = useState([]);
    const [del, setDel] = useState(false);
    const [firstDoc, setFirstDoc] = useState(true);

    useEffect(() => {
        if (authData.username !== '') {
            async function getItemsDoc() {
                const data = await getAllItems(authData.username);
                if (data.length > 0) {
                    dispatch(documentSlice.actions.setNewDoc(false));
                    if (firstDoc) {
                        dispatch(documentSlice.actions.setDocId(data[0].document_id));
                        setFirstDoc(false);
                    }
                } else {
                    dispatch(documentSlice.actions.setNewDoc(true));
                }
                setItems(data);
            };
            getItemsDoc();
        } else {
            setItems([]);
        }
    }, [authData, saveDb, del]);

    function createDoc() {
        if (docValue === '')
            dispatch(documentSlice.actions.setDocValue(' '));
        else
            dispatch(documentSlice.actions.setDocValue(''));
        dispatch(documentSlice.actions.setNewDoc(true));
        dispatch(documentSlice.actions.setDocId(-1));
    }

    async function deleteDoc(id) {
        if (id === -1) {
            if (docValue === '')
                dispatch(documentSlice.actions.setDocValue(' '));
            else
                dispatch(documentSlice.actions.setDocValue(''));
        } else {
            const response = await deleteDocById(id);
            setDel(!del);
            if (docId === id) {
                if (items.length < 2) {
                    dispatch(documentSlice.actions.setDocId(-1));
                } else {
                    dispatch(documentSlice.actions.setDocId(items[items.length - 2].document_id));
                }
            }
        }
    }

    return (
        <div className="!basis-[20%] sm:h-fit xl:h-full sm:mb-2 xl:mb-0 bg-[#fafafa]">
            <div className="sort-documents h-[38px] pr-4 flex justify-end items-center">
                <svg className='w-[20px] h-[20px] fill-[#999999] duration-200 hover:cursor-pointer hover:fill-[#292929] active:scale-90' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320z"/></svg>
            </div>

            <div className='container-post sm:flex xl:block xl:pr-2
                max-h-[600px] sm:overflow-x-auto xl:overflow-x-hidden overflow-y-auto'>
                <div className="add-documents p-5 bg-white flex justify-center items-center font-semibold 
                    border-[2px] border-dashed border-[#ccced1] rounded-md
                    sm:min-w-[180px] xl:h-[30px] xl:w-full sm:mb-2 xl:mb-2
                    duration-200 hover:cursor-pointer hover:border-black active:scale-90"
                    onClick={createDoc}>
                    NEW DOCUMENT
                </div>
                {isNew && <DocumentItem
                        docId={-1}
                        saved={false}
                        subject={"Untitled"}
                        modifyAt={getCurrentTime()}
                        deleteDoc={deleteDoc}
                    />
                }
                {items.length !== 0 && items.map((e, i) => (
                    <DocumentItem
                        key={i}
                        docId={e.document_id}
                        saved={true}
                        subject={e.subject}
                        modifyAt={e.modify_at}
                        deleteDoc={deleteDoc}
                    />
                ))}
            </div>
        </div>
    )
};