function DocumentItem({subject, modifyAt}) {
    return (
        <div className="documentItem sm:ml-2 xl:mx-0 sm:min-w-[300px]
        mb-2 py-3 px-5 min-h-[100px] flex flex-col justify-center
        bg-white border border-[#ccced1] rounded-md
        duration-200 hover:cursor-pointer hover:border-black active:scale-90">
            <div className="w-fit">
                <h1 className='title font-semibold text-md w-fit line-clamp-2'>{subject}</h1>
            </div>
            <div className="flex items-end text-[#8a8a8a]">
                {modifyAt}
            </div>
        </div>
    )
}
export default DocumentItem;