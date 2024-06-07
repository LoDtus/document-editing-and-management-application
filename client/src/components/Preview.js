import '../App.css'
import { Link } from 'react-router-dom';

function Preview({value}) {
    return (
        <div className="preview editor basis-[60%] h-full">
            <div class="preview ck ck-editor__main" role="presentation">
                <div contentEditable="false" class="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline" lang="en" dir="ltr" role="textbox" aria-label="Editor editing area: main. Press Alt+0 for help." contenteditable="true">
                    <div dangerouslySetInnerHTML={{ __html: value }}></div>
                </div>
            </div>
        </div>
    )
}

export default Preview;