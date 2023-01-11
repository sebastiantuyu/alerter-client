import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SearchBar.scss'

const SearchBar = () =>  {
  return (
    <>
    <div className="adl-dashboard--search">
        <div className="adl-dashboard--search--container">
            <FontAwesomeIcon icon={faSearch}/>
            Search
        </div>
        
        <input 
          type={'text'} 
          placeholder="Write service name..." 
          className="adl-dashboard--search--input"
        />
    </div>
    </>
  )
};

export default SearchBar;