import '../../styles/components/navbar/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='/'>
      <button className='btn'>Sign Up</button>
    </Link>
  );
}