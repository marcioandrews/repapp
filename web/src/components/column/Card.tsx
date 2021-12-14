import '../../styles/Global.css';
import '../../styles/Variables.css';
import '../../styles/components/column/Card.css';
import { Card } from '../../types/Columns';
import { useState } from 'react';
import InputEditCard from './InputEditCard';

interface CardProps {
    card: Card;
    cardIndex: number;
    deleteCardData: Function
}

const CardContent: React.FC<CardProps> = ({ card, cardIndex, deleteCardData }) => {
    const [edit, setEdit] = useState(false)

    function saveEditCard(title: string, description: string, tags: string, priority: string,) {
        card.title = title
        card.description = description
        card.tags = tags
        card.priority = priority
        setEdit(!edit)
    }
    function closeEditCard() {
        setEdit(!edit)
    }

    return (
        <div className="card">
            {edit ?
                <InputEditCard key={card.cardId} titleCard={card.title} description={card.description} tags={card.tags} priority={card.priority} cardId={card.cardId} closeEditCard={closeEditCard} saveEditCard={saveEditCard} deleteCardData={deleteCardData} cardIndex={cardIndex} />
                :
                <p onClick={() => setEdit(!edit)}>
                    <b>{card.title}</b><br />
                    <b>{card.description}</b><br />
                    <b>{card.tags}</b><br />
                    <b>{card.priority}</b><br />
                </p>
            }
        </div>
    );
}

export default CardContent;