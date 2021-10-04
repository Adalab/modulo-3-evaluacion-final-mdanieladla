import { Link } from 'react-router-dom';
import alien from '../images/alien.png';
import person from '../images/person.png';
import dead from '../images/dead.png';
import alive from '../images/alive.png';
import '../styles/layout/characterDetail.scss';
import NotFoundPage from './NotFoundPage';
const CharacterDetail = (props) => {
  console.log('CharacterDetail props=', props);
  if (props.data !== undefined) {
    return (
      <>
        <Link to='/'>
          <p>Volver atrás</p>
        </Link>
        <ul className='container-detail'>
          <li className='containerDetail'>
            <img src={props.data.image} alt={`Img of ${props.data.name}`} />
            <div>
              <h3 className='containerDetail--name'>Name: {props.data.name}</h3>
              <p className='containerDetail--status'>
                Status:{' '}
                {props.data.status === 'Alive' ? (
                  <img src={alive} width='60' height='60' alt='a' />
                ) : (
                  <img src={dead} width='60' height='60' alt='a' />
                )}
              </p>
              <p className='containerDetail--species'>
                Species:{' '}
                {props.data.species === 'Human' ? (
                  <img src={person} width='60' height='60' alt='a' />
                ) : (
                  <img src={alien} width='60' height='60' alt='a' />
                )}
              </p>
              <p className='containerDetail--origin'>
                Origin: {props.data.origin}
              </p>
              <p className='containerDetail--episodes'>
                Episodes: {props.data.episode}
              </p>
            </div>
          </li>
        </ul>
      </>
    );
  } else {
    return <NotFoundPage />;
  }
};

export default CharacterDetail;
