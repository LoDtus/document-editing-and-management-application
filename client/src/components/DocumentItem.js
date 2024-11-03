import { useDispatch } from "react-redux";
import { convertTime } from "../utils/functions";
import documentSlice from "../slices/documentSlice";
import { getDocById } from "../utils/documentService";

export default function DocumentItem({docId, saved, subject, modifyAt}) {
    const dispatch = useDispatch();

    async function openDoc(id) {
        dispatch(documentSlice.actions.setDocId(id));
    }

    async function deleteDoc(id) {
        console.log("Delete");
        
    }

    return (
        <div className={saved
        ? `documentItem sm:ml-2 xl:mx-0 sm:min-w-[300px]
        mb-2 py-3 px-5 min-h-[100px] flex items-center
        bg-white border border-[#ccced1] rounded-md
        duration-200 hover:cursor-pointer hover:border-black`
        : `documentItem sm:ml-2 xl:mx-0 sm:min-w-[300px]
        mb-2 py-3 px-5 min-h-[100px] flex items-center
        bg-white border border-[#77c2fc] rounded-md
        duration-200 hover:cursor-pointer hover:border-[#4096ff]`}
        onClick={() => openDoc(docId)}>
            <div className="grow">
                <div className="w-fit">
                    <h1 className={saved ? 'title font-semibold text-md w-fit line-clamp-2' : 'title font-semibold text-md w-fit line-clamp-2 text-[#4096ff]'}>
                        {subject}
                    </h1>
                </div>
                <div className="flex items-end text-[#8a8a8a]">
                    {convertTime(modifyAt)}
                </div>
            </div>
            <div className="rounded-full w-[40px] h-[40px] flex items-center justify-center
                duration-200 hover:fill-red-600"
                onClick={(e) => {
                        e.stopPropagation();
                        deleteDoc(docId);
                }}>
                <svg className="w-[20px] aspect-square"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                </svg>
            </div>
        </div>
    )
};