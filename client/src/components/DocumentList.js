import DocumentItem from './DocumentItem';

function DocumentList({value, }) {
    function addPost() {
        
    }

    return (
        <div className="documents basis-[17%] sm:h-fit xl:h-full bg-[#fafafa]">
            <div className="sort-documents h-[38px] pr-4 flex justify-end items-center">
                <svg className='w-[20px] h-[20px] fill-[#999999] duration-200 hover:cursor-pointer hover:fill-[#292929] active:scale-90' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320z"/></svg>
            </div>

            <div className='container-post sm:flex xl:block xl:pr-2 max-h-[600px] overflow-x-auto overflow-y-auto'>
                <div className="add-documents p-5 bg-white flex justify-center items-center font-semibold 
                    border-[2px] border-dashed border-[#ccced1] rounded-md
                    sm:min-w-[180px] xl:h-[30px] xl:w-full sm:mb-2 xl:mb-2
                    duration-200 hover:cursor-pointer hover:border-black active:scale-90"
                    onClick={addPost}>
                    ADD A NEW POST
                </div>
                
                <DocumentItem/>
                <DocumentItem/>
                {/* <DocumentItem/>
                <DocumentItem/>
                <DocumentItem/>
                <DocumentItem/>
                <DocumentItem/> */}
            </div>
        </div>
    )
}
export default DocumentList;