import "./SearchBar.scss";

const SearchBar = ({ src }) => {
  return (
    <form className='search'>
      <div className='search__container'>
        <img src={src} alt='Search Icon' className='search__icon' />
        <input
          name='search'
          value='search'
          placeholder='search'
          className='search__input'
        />
      </div>
    </form>
  );
};

export default SearchBar;
