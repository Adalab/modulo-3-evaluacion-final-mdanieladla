import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  console.log('characterlist=', props);
  const htmlList = props.data.map((characterData, i) => (
    <li className='container__info' key={characterData.id}>
      <Link to={`/character/${characterData.id}`}>
        <CharacterCard characterData={characterData} />
      </Link>
    </li>
  ));
  return <ul className='container'>{htmlList}</ul>;
};

export default CharacterList;
