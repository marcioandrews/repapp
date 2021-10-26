import '../../styles/Global.css';
import '../../styles/Variables.css';
import '../../styles/components/column/Card.css';
import { Card } from '../../types/Columns';

interface CardProps {
    card: Card;
}

const CardContent: React.FC <CardProps> = ( {card} ) => {

    return (
        <div className="card">
            <p>{card.discription}</p>
        </div>
    );
}

export default CardContent;