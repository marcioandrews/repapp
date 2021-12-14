import '../../styles/Global.css';
import '../../styles/Variables.css';
import '../../styles/components/column/Input.css'
import { useState, } from 'react';

import { editColumn } from '../../context/AuthProvider/util'

interface Content {
    titleColumn: string
    columnId: string
    closeEditColumn: Function
    saveEditColumn: Function
    deleteColumnData: Function
    columnIndex: number
}

const InputEditColumn: React.FC<Content> = ({ titleColumn, columnId, closeEditColumn, saveEditColumn, deleteColumnData, columnIndex }) => {

    const [titleEdit, setTitleEdit] = useState(titleColumn)


    async function saveButtonColumn() {
        await editColumn(titleEdit, columnId)
        saveEditColumn(titleEdit)
        closeEditColumn()
    }


    return (

        <div>
            <input onChange={t => setTitleEdit(t.target.value)} className="input" type="text" name="name" value={titleEdit} />
            <input type="submit" value="salvar" onClick={() => saveButtonColumn()} />
            <input type="submit" value="delete" onClick={() => deleteColumnData(columnIndex, columnId)} />
            <input type="submit" value="X" onClick={() => closeEditColumn()} />
        </div>
    );
};

export default InputEditColumn;