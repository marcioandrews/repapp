import '../../styles/Global.css';
import '../../styles/Variables.css';
import '../../styles/components/column/Input.css'
import { useState, } from 'react';

import { editCard } from '../../context/AuthProvider/util'

interface Content {
    titleCard: string
    description: string
    tags: string
    priority: string
    cardId: string
    closeEditCard: Function
    saveEditCard: Function
    deleteCardData: Function
    cardIndex: number
}

const InputEditCard: React.FC<Content> = ({ titleCard, description, tags, priority, cardId, closeEditCard, saveEditCard, deleteCardData, cardIndex }) => {

    const [titleCardEdit, setTitleCardEdit] = useState(titleCard)
    const [descriptionEdit, setDescriptionEdit] = useState(description)
    const [tagsEdit, setTagsEdit] = useState(tags)
    const [priorityEdit, setPriorityEdit] = useState(priority)


    async function saveButtonCard() {
        await editCard(titleCardEdit, descriptionEdit, tagsEdit, priorityEdit, cardId)
        saveEditCard(titleCardEdit, descriptionEdit, tagsEdit, priorityEdit,)
        closeEditCard(titleCardEdit)
    }


    return (

        <div>
            <input onChange={t => setTitleCardEdit(t.target.value)} className="input" type="text" name="name" value={titleCardEdit} />
            <input onChange={t => setDescriptionEdit(t.target.value)} className="input" type="text" name="name" value={descriptionEdit} />
            <input onChange={t => setTagsEdit(t.target.value)} className="input" type="text" name="name" value={tagsEdit} />
            <input onChange={t => setPriorityEdit(t.target.value)} className="input" type="text" name="name" value={priorityEdit} />
            <input type="submit" value="salvar" onClick={() => saveButtonCard()} />
            <input type="submit" value="delete" onClick={() => deleteCardData(cardIndex, cardId)} />
            <input type="submit" value="X" onClick={() => closeEditCard()} />
        </div>
    );
};

export default InputEditCard;