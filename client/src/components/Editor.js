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
        <div className="xl:w-[60%] basis-[60%] border xl:h-full sm:mb-2 xl:mb-0
            flex justify-center">
            <Ckeditor
                currentValue={currentValue}
                setValue={setValue}
            />
        </div>
    )
}
export default Editor;