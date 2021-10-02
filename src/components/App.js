//import Proptypes from 'prop-types';
//import { Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import '../styles/App.scss';
import '../styles/layout/list.scss';
//import photo from '../images/wallpaper.png';

import callToApi from '../services/api';
import FilterCharacterByName from './Filters';
import CharacterList from './CharacterList';

const App = () => {
  //Variable estado para el array con los datos que devuelve el api.
  const [data, setData] = useState([]);
  //Variable de estado para guardar el value del input.
  const [search, setSearch] = useState('');

  //Llamar al api con useEffect
  useEffect(() => {
    callToApi(data).then((response) => {
      setData(response);
    });
  }, []);

  //con el filter filtamos por nombre para se pueda buscar por el nomrbe de cada personaje. Con el map pintamos cada personaje en el HTML.
  const filteredData = data.filter((character) => {
    return character.name
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });
  // .map((character) => {
  //   return (
  //     <li key={character.id} className='container__info'>
  //       <img
  //         src={character.image}
  //         alt='img'
  //         className='container__info--img'
  //       />
  //       <h3 className='container__info--name'>{character.name}</h3>
  //       <h4 className='container__info--specie'>{character.species}</h4>
  //     </li>
  //   );
  // });

  //Función que sincronica el value del input donde la usuaria teclea su búsqueda y la variable de estado search.
  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };

  return (
    <>
      <Header />
      <FilterCharacterByName
        search={search}
        handleChangeSearch={handleChangeSearch}
      />
      <CharacterList renderCharacters={data} />
    </>
  );
};

export default App;
