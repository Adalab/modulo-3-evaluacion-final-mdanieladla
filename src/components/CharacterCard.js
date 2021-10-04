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
      <h4 className='container__info--specie'>{props.characterData.species}</h4>
    </>
  );
};

export default CharacterCard;
