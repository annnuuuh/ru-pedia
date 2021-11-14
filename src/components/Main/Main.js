import Queens from '../Queens/Queens';
import QueenDetails from '../QueenDetails/QueenDetails';
impport { Route } from 'react-router-dom';
import './Main.css';

const Main = () => {

  return (
    <div className="main-container">
      <Queens />
    </div>
  )
}

export default Main;
