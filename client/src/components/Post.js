import '../App.css'

function Post() {
    return (
        <div className="post item-documents h-fit xl:flex p-4 sm:mb-3 lg:mb-2 bg-white border border-solid
        border-[#ccced1] hover:cursor-pointer rounded-md sm:ml-2 lg:ml-0">
            <div className="describe-itemDocument w-fit">
                <h1 className='title font-semibold text-lg w-fit'>Tiêu đề bài viết</h1>
                <p className='content-itemDocument text-[#414141] pr-1 sm:hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolor eum explicabo quisquam velit obcaecati atque ipsam dignissimos voluptates molestiae mollitia aspernatur doloremque, sapiente labore reiciendis aliquam veniam eveniet quos.</p>
            </div>
            <div className="date-itemDocument flex items-end text-[#8a8a8a] w-fit">
                02.02.2024
            </div>
        </div>
    )
}
export default Post;