import { convertTime } from "../utils/functions";

function DocumentItem({docId, subject, modifyAt}) {
    function openDoc(id) {
        
    }

    return (
        <div className="documentItem sm:ml-2 xl:mx-0 sm:min-w-[300px]
        mb-2 py-3 px-5 min-h-[100px] flex items-center
        bg-white border border-[#ccced1] rounded-md
        duration-200 hover:cursor-pointer hover:border-black active:scale-90"
        onClick={() => openDoc(docId)}>
            <div className="grow">
                <div className="w-fit">
                    <h1 className='title font-semibold text-md w-fit line-clamp-2'>{subject}</h1>
                </div>
                <div className="flex items-end text-[#8a8a8a]">
                    {convertTime(modifyAt)}
                </div>
            </div>
            <svg className="w-[20px] aspect-square my-2 ml-2 duration-200 hover:fill-red-600"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
            </svg>
        </div>
    )
}
export default DocumentItem;