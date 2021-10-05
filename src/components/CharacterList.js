import { Link } from 'react-router-dom';
//Componentes
import CharacterCard from './CharacterCard';
import NotACharacter from './NotACharacter';

const CharacterList = (props) => {
  if (props.data.length === 0) {
    return <NotACharacter />;
  } else {
    const htmlList = props.data.map((characterData, i) => (
      <li className='container__info' key={characterData.id}>
        <Link to={`/character/${characterData.id}`} className='link'>
          <CharacterCard characterData={characterData} />
        </Link>
      </li>
    ));
    return <ul className='container'>{htmlList}</ul>;
  }
};

export default CharacterList;
