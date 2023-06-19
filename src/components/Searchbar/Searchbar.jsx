import PropTypes from 'prop-types';
import { useState } from 'react';


function Searchbar ({onSubmit}){
const [searchingName, setSearchingName] = useState('');


const handleNameChange = evt =>{
    setSearchingName(evt.target.value.toLowerCase().trim());
  }
  
  
  const handleSubmit = evt =>{
  evt.preventDefault();
  evt.target.reset();
  return onSubmit(searchingName);
  };

return(
   <>
  <form onSubmit={handleSubmit}>
  <input
      type="text"
      autoComplete="off"
      onChange={handleNameChange}
      autoFocus
      placeholder="Enter movie name"
    />
    <button type="submit" >
     Search movie
    </button>

   

  </form>
</>
)
}

export default Searchbar;


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }












