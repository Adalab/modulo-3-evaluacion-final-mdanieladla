import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  console.log('CharacterDetail props=');
  return (
    <>
      <Link to='/'>
        <p>Volver atrás</p>
      </Link>
      <div className='container-detail'>
        <img src={props.data.image} alt='img' />
        <h3>Name: {props.data.name}</h3>
        <p>Status: {props.data.status}</p>
        <p>Species: {props.data.species}</p>
        <p>Origin: {props.data.origin}</p>
        <p>Episodes: {props.data.episode}</p>
      </div>
    </>
  );
};

export default CharacterDetail;
