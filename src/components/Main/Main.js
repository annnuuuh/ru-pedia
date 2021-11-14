import Queens from '../Queens/Queens';
import QueenDetails from '../QueenDetails/QueenDetails';
impport { Route } from 'react-router-dom';
import './Main.css';

const Main = () => {

  return (
    <div className="main-container">
      <Route
        exact path="/"
        render={() => <Queens />}
        />
      <Route
        exact path="/"
        render={({match}) => {
          return <QueenDetails
          id={match.params.id} />
        }}
        />
    </div>
  )
}

export default Main;
