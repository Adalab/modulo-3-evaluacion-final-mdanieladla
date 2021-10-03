import alien from '../images/alien.png';
import person from '../images/person.png';
import dead from '../images/dead.png';
import alive from '../images/alive.png';
const CharacterCard = (props) => {
  //console.log('CharacterCard', props);
  return (
    <>
      <img
        className='container__info--img'
        src={props.characterData.image}
        alt={`Img of ${props.characterData.name}`}
      />
      <h3 className='container__info--name'>{props.characterData.name}</h3>
      <img src={alien} width='100' height='100' alt='a' />
      <img src={person} width='100' height='100' alt='a' />
      <img src={dead} width='100' height='100' alt='a' />
      <img src={alive} width='100' height='100' alt='a' />
      <h4 className='container__info--specie'>{props.characterData.species}</h4>
    </>
  );
};

export default CharacterCard;
