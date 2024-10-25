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
        <div className="profile sm:px-10 xl:pl-2 min-w-[17%] basis-[17%] bg-[#fafafa] font-semibold text-white">
            <div className="user-profile flex">
                <div className="title signup-userProfile grow mr-1 flex justify-center items-center
                p-3 mb-2 bg-[#afb1c9] rounded-md hover:cursor-pointer hover:bg-[#bbbdd2] duration-150"
                onClick={signIn}>Sign In</div>
                <div className="title signin-userProfile grow ml-1 flex justify-center items-center
                p-3 mb-2 bg-[#565c91] rounded-md hover:cursor-pointer hover:bg-[#696fa7] duration-150"
                onClick={signUp}>Sign Up</div>
            </div>
            <div className="title importPost-profile p-3 flex justify-center items-center bg-[#937152] mb-2 rounded-md 
            hover:cursor-pointer hover:bg-[#a28161] duration-150"
            onClick={preview}>{state ? nameButton[1] : nameButton[0]}</div>
            <div className="title importPost-profile p-3 flex justify-center items-center bg-[#f2b843] mb-2 rounded-md 
            hover:cursor-pointer hover:bg-[#f7c563] duration-150"
            >Import</div>
            <div className="title exportPost-profile p-3 flex justify-center items-center bg-[#e7676a] mb-2 rounded-md 
            hover:cursor-pointer hover:bg-[#ee7e80] duration-150"
            >Export</div>
            <div className="title savePost-profile p-3 flex justify-center items-center bg-[#57baa0] mb-2 rounded-md 
            hover:cursor-pointer hover:bg-[#6ccab1] duration-150"
            onClick={save}>Save</div>
        </div>
    )
}
export default Profile;