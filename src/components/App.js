//import Proptypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
//Componentes
import Header from './Header';
import FilterCharacterByName from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';
//Servicios
import callToApi from '../services/api';
//Estilos
import '../styles/App.scss';
import '../styles/layout/list.scss';

const App = () => {
  //Variable estado para el array con los datos que devuelve el api.
  const [data, setData] = useState([]);
  //Variable de estado para guardar el value del input.
  const [search, setSearch] = useState('');
  //Variable para escoger la especie
  const [species, setSpecies] = useState('all');
  //Variable para escoger por estado
  const [status, setStatus] = useState('all');

  //Ordenar alfabéticamente
  const orderedData = data.sort((a, b) => a.name.localeCompare(b.name));
  console.log('sort=', orderedData);

  //Llamar al api con useEffect
  useEffect(() => {
    callToApi().then((response) => {
      setData(response);
    });
  }, []);

  const routeData = useRouteMatch('/character/:id');

  const characterId = routeData !== null ? routeData.params.id : '';

  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );

  //con el filter filtamos por nombre para se pueda buscar por el nombre de cada personaje; y en el select que se pueda seleccionar por especie/estado. Con el map pintamos cada personaje en el HTML.
  const filteredData = data
    .filter((character) => {
      return character.name
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    })
    .filter((character) => species === 'all' || species === character.species)
    .filter((character) => status === 'all' || status === character.status);

  //Función que sincronica el value del input donde la usuaria teclea su búsqueda y la variable de estado search.
  const handleChangeSearch = (ev) => {
    ev.preventDefault();
    setSearch(ev.currentTarget.value);
  };

  //Función para filtrar por especies
  const handleChangeSpecie = (ev) => {
    setSpecies(ev.currentTarget.value);
  };

  //Función para filtrar por estado
  const handleChangeStatus = (ev) => {
    setStatus(ev.currentTarget.value);
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path='/character/:id'>
          <CharacterDetail data={selectedCharacter} />
        </Route>
        <Route exact path='/'>
          <FilterCharacterByName
            search={search}
            handleChangeSearch={handleChangeSearch}
            handleChangeSpecie={handleChangeSpecie}
            handleChangeStatus={handleChangeStatus}
          />
          <section className='section__container'>
            <CharacterList data={filteredData} />
          </section>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
