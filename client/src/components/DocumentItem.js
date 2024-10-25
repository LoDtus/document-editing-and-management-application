function DocumentItem() {
    return (
        <div className="documentItem h-fit py-3 px-5 bg-white border border-[#ccced1] rounded-md
        sm:mb-3 sm:ml-2 lg:ml-0 lg:mb-2
        duration-200 hover:cursor-pointer hover:border-black active:scale-90">
            <div className="describe-itemDocument w-fit">
                <h1 className='title font-semibold text-md w-fit line-clamp-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ratione provident expedita, sequi rerum consectetur sint quibusdam recusandae eaque dolor reiciendis unde distinctio aliquam dicta ex voluptate, consequatur enim velit.</h1>
            </div>
            <div className="date-itemDocument flex items-end text-[#8a8a8a]">
                02.02.2024
            </div>
        </div>
    )
}
export default DocumentItem;