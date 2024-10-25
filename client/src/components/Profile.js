import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Profile({setSignin, setSignup, value}) {
    const navigate = useNavigate();
    const [state, setState] = useState(false)
    const nameButton = ['Preview', 'Continue Editing']

    function preview() {
        setState(!state)
        if (state) {
            navigate('/')
        }
        else {
            navigate('/preview')
        }
    }
    function signIn() {
        setSignin(true)
    }
    function signUp() {
        setSignup(true)
    }
    function save() {
        if (value === '') {
            alert('Chưa có dữ liệu')
        } else {
            let temp = document.createElement('div');
            temp.innerHTML = value;
            let elements = temp.children;

            // Lấy ra tiêu đề bài viết, dòng Heading khác rỗng đầu tiên trong bài viết sẽ được xác định là tiêu đề
            // Nếu không, hệ thống sẽ gán mặc định tiêu đề bài viết đó là "Untitled"
            let tempTitle = null;
            for (let i=0; i<elements.length; i++) {
                const tagName = elements[i].tagName.toLowerCase();
                if (tagName !== 'h1' && tagName !== 'h2' && tagName !== 'h3' && tagName !== 'h4')
                    break
                if (elements[i].innerText.trim() !== '') {
                    tempTitle = elements[i];
                    break;
                }
            }
            const title = tempTitle ? tempTitle.outerHTML : '<h2><strong>Untitled</strong></h2>';

            // Lấy ra 3 phần tử còn lại trong bài viết trừ tiêu đề và các phần tử rỗng
            const contentElements = [];
            elements = Array.from(temp.childNodes);
            for (let i=0; i<elements.length; i++) {
                if (elements[i] !== tempTitle && elements[i].innerText.trim() !== '')
                    contentElements.push(elements[i]);
                if (contentElements.length > 2)
                    break;
            }
            const contentHtml = contentElements.map(node => node.outerHTML).join('');

            console.log(contentElements);
            console.log("title", title);
            console.log("content", contentHtml);

            // localStorage.setItem('post', value);
            // alert('Lưu thành công!');
            temp = null;
        }
    }

    return (
        <div className="profile xl:pl-2
            border basis-[20%] bg-[#fafafa] font-semibold text-white">
            <div className="flex">
                <div className="title basis-[50%] mr-1 flex justify-center items-center
                p-3 mb-2 bg-[#afb1c9] rounded-md 
                duration-200 hover:cursor-pointer hover:bg-[#bbbdd2] active:scale-90"
                onClick={signIn}>Sign In</div>
                <div className="title basis-[50%] ml-1 flex justify-center items-center
                p-3 mb-2 bg-[#565c91] rounded-md 
                duration-200 hover:cursor-pointer hover:bg-[#696fa7] active:scale-90"
                onClick={signUp}>Sign Up</div>
            </div>
            <div className='btnProfile sm:flex xl:block justify-between'>
                <div className="title basis-[25%] sm:mr-1 xl:mx-0 p-3 flex justify-center items-center bg-[#57baa0] mb-2 rounded-md 
                    duration-200 hover:cursor-pointer hover:bg-[#6ccab1] active:scale-90"
                onClick={save}>Save</div>
                <div className="title basis-[25%] sm:mx-1 xl:mx-0 p-3 flex justify-center items-center bg-[#937152] mb-2 rounded-md 
                    duration-200 hover:cursor-pointer hover:bg-[#a28161] active:scale-90"
                onClick={preview}>{state ? nameButton[1] : nameButton[0]}</div>
                <div className="title basis-[25%] sm:mx-1 xl:mx-0 p-3 flex justify-center items-center bg-[#f2b843] mb-2 rounded-md 
                    duration-200 hover:cursor-pointer hover:bg-[#f7c563] active:scale-90"
                >Import</div>
                <div className="title basis-[25%] sm:ml-1 xl:mx-0 p-3 flex justify-center items-center bg-[#e7676a] mb-2 rounded-md 
                    duration-200 hover:cursor-pointer hover:bg-[#ee7e80] active:scale-90"
                >Export</div>
            </div>
        </div>
    )
}
export default Profile;