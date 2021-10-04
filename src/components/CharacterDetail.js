import { Link } from 'react-router-dom';
//Imágenes
import alien from '../images/alien.png';
import person from '../images/person.png';
import dead from '../images/dead.png';
import alive from '../images/alive.png';
import portal from '../images/portal.png';
//Estilos
import '../styles/layout/characterDetail.scss';
//Componentes
import NotFoundPage from './NotFoundPage';

const CharacterDetail = (props) => {
  //console.log('CharacterDetail props=', props);
  if (props.data !== undefined) {
    return (
      <>
        <Link to='/' className='link'>
          <img
            src={portal}
            alt='Volver atrás'
            title='Volver atrás'
            className='portal-img'
          />
        </Link>
        <ul className='container-detail'>
          <li className='containerDetail'>
            <img src={props.data.image} alt={`Img of ${props.data.name}`} />
            <div>
              <h3 className='containerDetail--nameDetail'>
                Name: {props.data.name}
              </h3>
              <p className='containerDetail--status'>
                Status:{' '}
                {props.data.status === 'Alive' ? (
                  <img src={alive} width='70' height='70' alt='Alive icon' />
                ) : (
                  <img src={dead} width='70' height='70' alt='Dead icon' />
                )}
              </p>
              <p className='containerDetail--species'>
                Species:{' '}
                {props.data.species === 'Human' ? (
                  <img src={person} width='70' height='70' alt='Person icon' />
                ) : (
                  <img src={alien} width='70' height='70' alt='Alien icon' />
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
