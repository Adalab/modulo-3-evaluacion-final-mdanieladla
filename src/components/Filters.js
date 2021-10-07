import '../styles/layout/filter.scss';
import PropTypes from 'prop-types';

const FilterCharacterByName = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className='container__form' onSubmit={handleSubmit}>
      <label className='container__form--label'>
        Busca por el nombre del personaje
      </label>
      <input
        className='container__form--input'
        placeholder='Morty'
        value={props.search}
        onChange={props.handleChangeSearch}
      />
      <label className='container__form--label'>Busca por localización</label>
      <input
        className='container__form--input'
        placeholder='Earth'
        value={props.location}
        onChange={props.handleChangeLocation}
      />
      <label className='container__form--label'>Especie</label>
      <select
        className='container__form--select'
        name='species'
        id='species'
        value={props.species}
        onChange={props.handleChangeSpecie}
      >
        <option value='all'>Todos</option>
        <option value='Alien'>Aliens</option>
        <option value='Human'>Humanos</option>
      </select>
      <label className='container__form--label'>Estado</label>
      <select
        className='container__form--select'
        name='status'
        id='status'
        value={props.status}
        onChange={props.handleChangeStatus}
      >
        <option value='all'>Todos</option>
        <option value='Alive'>Vivos</option>
        <option value='Dead'>Muertos</option>
        <option value='unknown'>Desconocido</option>
      </select>
    </form>
  );
};

FilterCharacterByName.defaultProps = {
  inputType: 'text',
};

FilterCharacterByName.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default FilterCharacterByName;
