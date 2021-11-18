import { Link } from "react-router-dom";

const ApartmentList = ( { apartments }) => {

    return ( 
        <div>
            { apartments.map((apartment) => (
                <Link to={`/apartments/${apartment.id}`}>
                <div className="apartment-list">
                    <div className="column">
                        <img src={apartment.imgLink} width="100%"/>
                    </div>
                    <div className="column apartment-preview" key= {apartment.id}>
                        <h2>{ apartment.title }</h2>
                        <p>{ apartment.shortDescription }</p>
                        <p>{ apartment.price + ' EGP' }</p>
                    </div>
                </div>
                </Link>
            )) }
        </div>
     );
}
 
export default ApartmentList;