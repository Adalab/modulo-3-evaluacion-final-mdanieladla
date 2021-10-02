import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const renderCharacters = () => {
    return props.data.map((dataCharacter) => {
      return (
        <li className='container__info' key={dataCharacter.id}>
          <CharacterCard characterData={dataCharacter} />
        </li>
      );
    });
  };
  return <ul className='container'>{renderCharacters()}</ul>;
};

export default CharacterList;
