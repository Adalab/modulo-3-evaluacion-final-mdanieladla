const CharacterCard = (props) => {
  return (
    <>
      <img
        className='container__info--img'
        src={props.character.image}
        alt={`Img of ${props.character.name}`}
      />
      <h3 className='container__info--name'>{props.character.name}</h3>
      <h4 className='container__info--specie'>{props.character.species}</h4>
    </>
  );
};

export default CharacterCard;
