import '../../styles/Global.css';
import '../../styles/Variables.css';
import '../../styles/components/column/Input.css'
import { SetStateAction, useState } from 'react';

interface content{
    content: Function
}

const Input: React.FC <content> = ( {children, content} ) => {
    // const [saveContent, setSaveContent] = useState('')
    function contentValue(t: SetStateAction<string>) {
        // setSaveContent(t)
        content(t)
        
        
    }
    return (
        <div>
            <input onChange={ t => contentValue(t.target.value)} className="input" type="text" name="name" placeholder="Insira um título para este cartão..." />
            {children}
            {/* <p onClick={() => console.log() }>consolelog</p> */}
        </div>
    );
 };

export default Input;