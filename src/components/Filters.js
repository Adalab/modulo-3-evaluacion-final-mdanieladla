import '../styles/layout/filter.scss';

const FilterCharacterByName = (props) => {
  return (
    <form className='container__form'>
      <label className='container__form--label'>
        Busca por el nombre del personaje
      </label>
      <input
        className='container__form--input'
        type='text'
        placeholder='Morty'
        value={props.search}
        onChange={props.handleChangeSearch}
      />
    </form>
  );
};

export default FilterCharacterByName;
