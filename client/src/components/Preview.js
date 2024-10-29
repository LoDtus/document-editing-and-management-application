import './CkeditorComponent/style.css'
import { useSelector } from 'react-redux';
import { getDocValue } from '../redux/selectors';
import Ckeditor from './CkeditorComponent/Ckeditor';

export default function Preview() {
    const docValue = useSelector(getDocValue);
    const subject = docValue.subject;
    const content = docValue.content;

    return (
        <div className="xl:w-[60%] basis-[60%] xl:h-full sm:mb-2 xl:mb-0
            flex justify-center">
            <Ckeditor
                preview={true}
            />
        </div>
    )
};