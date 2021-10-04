import { Link } from 'react-router-dom';
//Estilos
import '../styles/layout/notFoundPage.scss';
//Imágenes
import portal from '../images/rick-and-morty-portal.png';
const NotFouondPage = () => {
  return (
    <div className='page'>
      <Link to='/' className='link'>
        <img
          src={portal}
          alt='Portal de vuelta a inicio'
          className='portal-img2'
          title='Volver a incio'
        />
      </Link>
      <p className='no-page--par2'>La galaxia que buscas no existe, sorry.</p>
    </div>
  );
};

export default NotFouondPage;
