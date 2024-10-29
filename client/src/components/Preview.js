import './CkeditorComponent/style.css'
import { useSelector } from 'react-redux';
import { getDocValue } from '../redux/selectors';

export default function Preview() {
    const docValue = useSelector(getDocValue);
    const subject = docValue.subject;
    const content = docValue.content;

    return (
        <div className="xl:w-[60%] basis-[60%] xl:h-full sm:mb-2 xl:mb-0
            flex justify-center">
            <div class="editor-container__editor-wrapper sm:min-w-[100%] lg:max-w-[100%] flex justify-center">
                <div class="editor-container__editor">
                    <div class="editArea">
                        <div
                            class="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline"
                            lang="en" dir="ltr" role="textbox" aria-label="Rich Text Editor. Editing area: main. Press Alt+0 for help."
                            contenteditable="false">
                            <h1 class="ck-placeholder" dangerouslySetInnerHTML={{ __html: subject }}></h1>
                            <p class="ck-placeholder" data-placeholder="Nothing!" dangerouslySetInnerHTML={{ __html: content }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};