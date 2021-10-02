//import Proptypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import '../styles/App.scss';
import '../styles/layout/list.scss';
//import photo from '../images/wallpaper.png';

import callToApi from '../services/api';
import FilterCharacterByName from './Filters';
import CharacterList from './CharacterList';
//import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
//import CharacterDetail from './CharacterDetail';

const App = () => {
  //Variable estado para el array con los datos que devuelve el api.
  const [data, setData] = useState([]);
  //Variable de estado para guardar el value del input.
  const [search, setSearch] = useState('');

  //Llamar al api con useEffect
  useEffect(() => {
    callToApi(data).then((response) => {
      setData(response);
      console.log(response);
    });
  }, []);

  //con el filter filtamos por nombre para se pueda buscar por el nomrbe de cada personaje. Con el map pintamos cada personaje en el HTML.
  const filteredData = data.filter((character) => {
    return character.name
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });

  //Función que sincronica el value del input donde la usuaria teclea su búsqueda y la variable de estado search.
  const handleChangeSearch = (ev) => {
    setSearch(ev.currentTarget.value);
  };

  return (
    <>
      <Switch>
        <Route path='/'>
          <Header />
          <FilterCharacterByName
            search={search}
            handleChangeSearch={handleChangeSearch}
          />
          <CharacterList data={filteredData} />
        </Route>
        <Route path='/CharacterDetail/:id'>{/* <CharacterDetail /> */}</Route>
        <Route>La página que buscas no existe, sorry.</Route>
      </Switch>
    </>
  );
};

export default App;
