import logo from '../images/Rick_and_Morty_-_logo.png';
import '../styles/layout/header.scss';

const Header = () => {
  return (
    <header>
      <div className='container__header'>
        <img
          src={logo}
          alt='Logo Rick and Morty'
          className='container__header--img'
        />
      </div>
    </header>
  );
};

export default Header;
