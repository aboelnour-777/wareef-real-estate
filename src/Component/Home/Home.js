import ApartmentList from "../Apartment/ApartmentList";
import useFetch from "../../Hooks/useFetch";

const Home = () => {

const {data: apartments, error} = useFetch('http://localhost:8000/apartments');

    return ( 
        <div className="home">
            { error && <div>error</div>}
            {apartments && <ApartmentList apartments={ apartments } />}
        </div>
     );
}
 
export default Home;