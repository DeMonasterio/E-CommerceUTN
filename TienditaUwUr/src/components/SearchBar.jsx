import "./css/SearchBar.css"

const SearchBar = ({ onChangeText }) => {
  return (
    <>
      <form>

        <input
          onChange={onChangeText}
          type="search"
          name="search"
          id="search"
          placeholder="There's a search to do"
        />
      <input type="submit" value="Buscar!" />
      </form>

    </>
  );
};

export default SearchBar;