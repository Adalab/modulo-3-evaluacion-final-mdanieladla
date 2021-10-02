import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const htmlList = props.data.map((characterData, i) => (
    <li className='container__info' key={characterData.id}>
      <CharacterCard characterData={characterData} />
    </li>
  ));
  return <ul className='container'>{htmlList}</ul>;
};

export default CharacterList;
