// Fichero src/components/App.js
//import Proptypes from 'prop-types';
//import { Route } from 'react-router-dom';
import Header from './Header';
import '../styles/App.scss';
import '../styles/layout/list.scss';
import photo from '../images/wallpaper.png';
const App = () => {
  return (
    <>
      <Header />
      <ul className='container'>
        <li className='container__info'>
          <img
            className='container__info--img'
            src={photo}
            alt='photo'
            width='200px'
            height='200px'
          />
          <h3 className='container__info--name'>Name</h3>
          <h4 className='container__info--specie'>Specie</h4>
        </li>
        <li className='container__info'>
          <img
            className='container__info--img'
            src={photo}
            alt='photo'
            width='200px'
            height='200px'
          />
          <h3 className='container__info--name'>Name</h3>
          <h4 className='container__info--specie'>Specie</h4>
        </li>
        <li className='container__info'>
          <img
            className='container__info--img'
            src={photo}
            alt='photo'
            width='200px'
            height='200px'
          />
          <h3 className='container__info--name'>Name</h3>
          <h4 className='container__info--specie'>Specie</h4>
        </li>
        <li className='container__info'>
          <img
            className='container__info--img'
            src={photo}
            alt='photo'
            width='200px'
            height='200px'
          />
          <h3 className='container__info--name'>Name</h3>
          <h4 className='container__info--specie'>Specie</h4>
        </li>
        <li className='container__info'>
          <img
            className='container__info--img'
            src={photo}
            alt='photo'
            width='200px'
            height='200px'
          />
          <h3 className='container__info--name'>Name</h3>
          <h4 className='container__info--specie'>Specie</h4>
        </li>
        <li className='container__info'>
          <img
            className='container__info--img'
            src={photo}
            alt='photo'
            width='200px'
            height='200px'
          />
          <h3 className='container__info--name'>Name</h3>
          <h4 className='container__info--specie'>Specie</h4>
        </li>
        <li className='container__info'>
          <img
            className='container__info--img'
            src={photo}
            alt='photo'
            width='200px'
            height='200px'
          />
          <h3 className='container__info--name'>Name</h3>
          <h4 className='container__info--specie'>Specie</h4>
        </li>
      </ul>
    </>
  );
};

export default App;
