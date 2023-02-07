import React, {
    useState,
    useEffect,
    useContext
} from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import {
    Link,
    useParams
} from "react-router-dom";
import {
    Context
} from "../store/appContext";



const Vehicles = (props) => {
        const {
            store,
            actions
        } = useContext(Context);
        const [infoVehicle, setInfoVehicle] = useState([])
        const params = useParams();


        // function getVehiclesInfo() {

        //     fetch("https://www.swapi.tech/api/vehicles/")
        //         .then(res => res.json())
        //         .then(data => setInfoVehicle(data.results))
        //         .catch(err => console.error(err))

        // }

        // useEffect(() => {
        //     actions.getVehiclesInfo()
        // }, [])

        // console.log(infoVehicle.properties?.name);

        return ( <
                div className = "container mt-3" >
                <
                h3 className = "text-warning text-start" > Vehicles < /h3> <
                div className = "d-flex flex-row overflow-scroll" > {
                    store.infoVehicle.length > 0 ? store.infoVehicle.map((vehicle, index) => {
                            return <Card
                            key = {
                                vehicle.uid
                            }
                            id = {
                                vehicle.uid
                            }
                            image = {
                                `https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`
                            }
                            name = {
                                vehicle.name
                            }
                            type = {
                                "vehicle"
                            }

                            />}):null} <
                            /div> <
                            /div>              
                        )
                    }


                    export default Vehicles