const FilterCharacterByName = (props) => {
  return (
    <form>
      <input
        type='text'
        value={props.search}
        onChange={props.handleChangeSearch}
      />
    </form>
  );
};

export default FilterCharacterByName;
