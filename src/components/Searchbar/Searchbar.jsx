import PropTypes from 'prop-types';
import { useState } from 'react';
import {Wrapper, Input, Button} from "./Searchbar.styled";


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
   <Wrapper>
  <form onSubmit={handleSubmit}>
  <Input
      type="text"
      autoComplete="off"
      onChange={handleNameChange}
      autoFocus
      placeholder="Enter movie name"
    />
    <Button type="submit" >
     Search movie
    </Button>
  </form>
  </Wrapper>
</>
)
}

export default Searchbar;


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }












