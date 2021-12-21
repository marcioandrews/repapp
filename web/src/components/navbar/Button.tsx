import '../../styles/components/navbar/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='/login'>
      <button className='btn'>ENTRAR</button>
    </Link>
  );
}