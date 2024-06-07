import '../App.css'

function Post() {
    return (
        <div className="post item-documents h-fit sm:block lg:flex p-4 sm:mb-3 lg:mb-2 bg-white border border-solid
        border-[#ccced1] hover:cursor-pointer rounded-md sm:min-w-[250px] lg:w-auto sm:ml-2 lg:ml-0">
            <div className="describe-itemDocument">
                <h1 className='font-semibold text-lg'>Tiêu đề bài viết</h1>
                <p className='sm:hidden lg:block'>Lorem ipsum dolor sit amet consectetur....</p>
            </div>
            <div className="date-itemDocument flex items-end">
                02.02.2024
            </div>
        </div>
    )
}
export default Post;