import { useState } from "react";
import ApartmentList from "../Apartment/ApartmentList";
import useFetch from "../../Hooks/useFetch";

const Search = () => {
  const [enteredLocation, setEnteredLocation] = useState('Cairo');
  const {data: apartments, error} = useFetch('http://localhost:8000/apartments');

  return (
      <div className="Search">
          <h2>Search for a new apartment</h2>
          <form>
              <label>Apartment Location:</label>
              <select value={enteredLocation} onChange={(e) => setEnteredLocation(e.target.value)}>
                  <option value="Hurghada">Hurghada</option>
                  <option value="Dahab">Dahab</option>
                  <option value="Cairo">Cairo</option>
                </select>
            </form>
            <br/>
            { error && <div>error</div>}
            {apartments && <ApartmentList apartments={ apartments.filter(apartment => apartment.location === enteredLocation) } />}
        </div>
  );
}
 
export default Search;