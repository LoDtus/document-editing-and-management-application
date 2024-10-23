import React, { useRef, useState } from "react";
import Ckeditor from "./CkeditorComponent/Ckeditor";

function Editor({value, setValue, currentValue}) {
    if (value !== '') {
        currentValue.current = value;
    }

    return (
        <div className="editor basis-[66%] lg:h-full sm:mb-3 lg:mb-0">
            <Ckeditor/>
        </div>
    )
}
export default Editor;