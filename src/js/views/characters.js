import React, {useState, useEffect} from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";




const Characters = (props) => {
    // const { store, actions } = useContext(Context);
    const [infocharacter, setInfoCharacter] = useState([])
    const params = useParams();
    

    function getCharactersInfo() {

        https://swapi.dev/api/people
        fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
		.then(data => setInfoCharacter(data.results))
		.catch(err => console.error(err))
        
    }

    useEffect(()=>{
		getCharactersInfo()
	},[])

    // console.log(infocharacter.properties?.name);



    return (
        <div className="container mt-3">
                <h3 className="text-warning text-start">Characters</h3>
            <div className="d-flex flex-row overflow-scroll">
                {infocharacter.length > 0? infocharacter.map((character,index)=>{
                    return <Card 
                        key={character.uid} 
                        id={character.uid} 
                        image={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
                        name={character.name} 
                        property2={character.gender} 
                        property3={character.hair_color} 
                        property4={character.eye_color}
                        type={"people"}
                        
                        />}):null}
            </div>
        </div>
                     
    )
                }
        

export default Characters
