import '../../styles/Global.css';
import '../../styles/Variables.css';
import '../../styles/components/column/Input.css'
import { SetStateAction } from 'react';

interface Content {
    title?: any
}

const InputColumn: React.FC<Content> = ({ children, title }) => {

    function contentValue(t: SetStateAction<string>, content: Function) {
        content(t)
    }

    return (

        <div>
            <input onChange={t => contentValue(t.target.value, title)} className="input" type="text" name="name" placeholder="Insira um título para este cartão..." />
            {children}
        </div>
    );

};

export default InputColumn;