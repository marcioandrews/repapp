import '../../styles/Global.css';
import '../../styles/Variables.css';
import '../../styles/components/column/Column.css';
import InputCard from './InputCard';
import InputEditColumn from './InputEditColumn';
import { useState } from 'react';
import CardContent from './Card';
import { Column } from '../../types/Columns';
import { deleteCard, deleteColumn } from '../../context/AuthProvider/util'

interface ColumnsProps {
    column: Column;
    columnIndex: number;
    saveCard: Function
    deleteColumnData: Function
}

const ColumnContent: React.FC<ColumnsProps> = ({ column, columnIndex, saveCard, deleteColumnData }) => {

    const [inputSaveCard, setInputSaveCard] = useState(false)
    const [inputDeleteCard, setInputDeleteCard] = useState(false)
    const [inputEdit, setInputEdit] = useState(false)

    function saveEditColumn(title: string) {
        column.title = title
        setInputEdit(!inputEdit)
    }

    function deleteCardData(cardIndex: number, cardId: string) {
        deleteCard(cardId)
        column.cards.splice(cardIndex, 1)
        setInputDeleteCard(!inputDeleteCard)
    }

    function closeEditColumn() {
        setInputEdit(!inputEdit)
    }
    function closeSaveColumn() {
        setInputSaveCard(!inputSaveCard)
    }


    return (
        <div id="list">
            <div className="list-content">
                <div className="list-header">
                    {inputEdit ?
                        <InputEditColumn titleColumn={column.title} closeEditColumn={closeEditColumn} saveEditColumn={saveEditColumn} columnId={column.id} deleteColumnData={deleteColumnData} columnIndex={columnIndex} />
                        :
                        <b onClick={() => setInputEdit(!inputEdit)}>{column.title}</b>
                    }
                </div>
                <div className="list-cards">
                    {column.cards.map((card, cardIndex: number) =>
                        <CardContent key={card.cardId} cardIndex={cardIndex} card={card} deleteCardData={deleteCardData} />
                    )}
                </div>
                <div className="card-composer">
                    {inputSaveCard ?
                        <InputCard saveCard={saveCard} columnId={column.id} columnIndex={columnIndex} closeSaveCard={closeSaveColumn} />
                        :
                        <p onClick={() => setInputSaveCard(!inputSaveCard)}>+ Adicionar um cartão</p>}
                </div>

            </div>

        </div>

    );
}

export default ColumnContent;