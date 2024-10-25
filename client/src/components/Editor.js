import React, { useEffect, useRef, useState } from "react";
import Ckeditor from "./CkeditorComponent/Ckeditor";

function Editor({value, setValue, currentValue}) {
    if (value !== '') {
        currentValue.current = value;
    }
    useEffect(() => {
        console.log(value);
        
    }, [value]);

    return (
        <div className="editor xl:basis-[66%] xl:h-full sm:mb-3 xl:mb-0 flex justify-center px-10">
            <Ckeditor
                currentValue={currentValue}
                setValue={setValue}
            />
        </div>
    )
}
export default Editor;