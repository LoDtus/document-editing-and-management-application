import '../App.css'
import React, { useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Editor({value, setValue, currentValue}) {
    if (value !== '') {
        currentValue.current = value;
    }

    return (
        <div className="editor basis-[60%] lg:h-full sm:mb-3 lg:mb-0">
            <CKEditor
                editor={ClassicEditor}
                data={currentValue.current}
                onChange={(event, editor) => {
                    setValue(editor.getData());
                }}
            />
        </div>
    )
}
export default Editor;