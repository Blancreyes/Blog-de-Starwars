import React, {useState, useEffect, useContext} from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";




const Planets = (props) => {
    const { store, actions } = useContext(Context);
    const [infoPlanet, setInfoPlanet] = useState([])
    const params = useParams();
    

    // function getPlanetsInfo() {

    //     fetch("https://www.swapi.tech/api/planets/")
    //     .then(res => res.json())
	// 	.then(data => setInfoPlanet(data.results))
	// 	.catch(err => console.error(err))
        
    // }

    // useEffect(()=>{
	// 	actions.getPlanetsInfo()
	// },[])

    // console.log(infoPlanet.properties?.name);



    return (
        <div className="container mt-3">
                <h3 className="text-warning text-start">Planets</h3>
            <div className="d-flex flex-row overflow-scroll">
                {store.infoPlanet.length > 0? store.infoPlanet.map((planet,index)=>{
                    return <Card 
                        key={planet.uid} 
                        id={planet.uid} 
                        image={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} 
                        name={planet.name} 
                        type={"planets"}
                        
                        />}):null}
            </div>
        </div>              
    )
                }
        

export default Planets