import React from "react";

const LearMore = (props) => {

    return (
        <div className="container">
            <div className="card justify-content-center">
                <div className="row g-0">
                    <div className="col-md-4 col-xs-12">
                            <img src={props.image} style={{maxWidth:"500px"}}/>
                    </div>
                    <div className="col-md-8 col-xs-12">
                            <h2 className="d-flex justify-content-center textcolor">{props.name}</h2>
                            <p className="text-center textcolor">{props.description}</p>
                    </div>
                    <div className="d-flex flex-row mb-3 border-top border-warning justify-content-evenly">
                        <h6 className="col-md-2 textcolor"><p className="ms-2">Birth Year</p><p className="ms-2">{props.property1}</p></h6>
                        <h6 className="col-md-2 textcolor"><p className="ms-2">Gender</p><p className="ms-2">{props.property2}</p></h6>
                        <h6 className="col-md-2 textcolor"><p className="ms-2">Heigth</p><p className="ms-2">{props.property3}</p></h6>
                        <h6 className="col-md-2 textcolor"><p className="ms-2">Skin Color</p><p className="ms-2">{props.property4}</p></h6>
                        <h6 className="col-md-2 textcolor"><p className="ms-2">Eye Color</p><p className="ms-2">{props.property5}</p></h6>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default LearMore

                        // key={character.uid} 
                        // id={character.uid} 
                        // image={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} 
                        // name={character.name} 
                        // property2={character.gender} 
                        // property3={character.hair_color} 
                        // property4={character.eye_color}
                        // type={"people"}