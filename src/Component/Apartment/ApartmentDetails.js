import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const ApartmentDetails = () => {
  const { id } = useParams();
  const { data: apartment, error } = useFetch('http://localhost:8000/apartments/' + id);

  return (
    <div className="apartment-details">
      { error && <div>{ error }</div> }
      { apartment && (
        <article>
            <img src={apartment.imgLink} width="100%"/>
            <h2>{ apartment.title }</h2>
            <div>{ apartment.body }</div>
            <p>It costs: { apartment.price } EGP</p>
        </article>
      )}
    </div>
  );
}
 
export default ApartmentDetails;