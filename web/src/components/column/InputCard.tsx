import '../../styles/Global.css';
import '../../styles/Variables.css';
import '../../styles/components/column/InputCard.css'
import { SetStateAction, useState, } from 'react';
import { createCard } from '../../context/AuthProvider/util';

interface Content {
    saveCard: Function
    columnId: string
    columnIndex: number
    closeSaveCard: Function
}

const InputCard: React.FC<Content> = ({ saveCard, columnId, columnIndex, closeSaveCard }) => {

    const [saveInputTitle, setSaveInputTitle] = useState('')
    const [saveInputDescription, setSaveInputDescription] = useState('')
    const [saveInputTags, setSaveInputTags] = useState('')
    const [saveInputPriority, setSaveInputPriority] = useState('')

    function title(title: string) {
        setSaveInputTitle(title)
    }
    function description(description: string) {
        setSaveInputDescription(description)
    }
    function tags(tags: string) {
        setSaveInputTags(tags)
    }
    function priority(priority: string) {
        setSaveInputPriority(priority)
    }

    async function saveButtonCard() {
        const newCard = await createCard(saveInputTitle, saveInputDescription, saveInputTags, saveInputPriority, columnId)
        console.log(newCard)
        console.log(saveInputPriority)
        saveCard(newCard, columnIndex)
        closeSaveCard()
    };

    function value(t: SetStateAction<string>, content: Function) {
        content(t)
    }
    return (
        <div>
            <input onChange={t => value(t.target.value, title)} className="input" type="text" name="name" placeholder="Insira um título para este card..." />
            <input onChange={t => value(t.target.value, description)} className="input" type="text" name="name" placeholder="Descrição." />
            <input onChange={t => value(t.target.value, tags)} className="input" type="text" name="name" placeholder="Tags." />
            <input onChange={t => value(t.target.value, priority)} className="input" type="text" name="name" placeholder="Prioridade." />
            <div className="buttons-content">
                <div className="button">
                    <p onClick={saveButtonCard}>Salvar</p>
                </div>
                <div>
                    <p onClick={() => closeSaveCard()}>X</p>
                </div>
            </div>
        </div>
    );
};

export default InputCard;