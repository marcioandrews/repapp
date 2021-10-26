import '../../styles/Global.css';
import '../../styles/Variables.css';
import '../../styles/components/column/Column.css';
import Input from './Input';
import { useState } from 'react';
import CardContent from './Card';
import { Column } from '../../types/Columns';

interface ColumnsProps {
    column: Column;
}

const ColumnContent: React.FC <ColumnsProps> = ( {column} ) =>{
    const [input, setInput] = useState(false)
    const [saveContent, setSaveContent] = useState('')
    
    function content(content:string) {
        console.log(content)
        setSaveContent(content)
    }
    function saveButton() {
        // addCard(index, saveContent)
        setInput(!input)
    }
    
    return (
        <div className="list">
            <div className="list-content">
                <div className="list-header">
            {/* <p onClick={() => fnt()}>+ Adicionar um cartão</p> */}
                    <p>{column.title}</p>
                </div>
                <div className="list-cards">
                    {column.card.map(card =>               
                     <CardContent card={card} />
                     )}
                </div>
                <div className="card-composer">
                    {input ?
                        <Input content={content}>
                            <div className="buttons-content">
                                <div className="button">
                                    <p onClick={saveButton}>Salvar</p>
                                </div>
                                <div>
                                    <p onClick={() => setInput(!input)}>X</p>
                                    <p onClick={() => console.log(saveContent)}>V</p>
                                </div>
                            </div>
                        </Input>
                        :
                        <p onClick={() => setInput(!input)}>+ Adicionar um cartão</p>}
                </div>
                
            </div>

        </div>

    );
}

export default ColumnContent;