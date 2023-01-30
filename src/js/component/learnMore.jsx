import React from "react";

const LearMore = () => {

    return (
        <div className="container">
            <div className="card justify-content-center">
                <div className="row g-0">
                    <div className="col-md-4 col-xs-12">
                            <img src="..." style={{maxWidth:"500px"}}/>
                    </div>
                    <div className="col-md-8 col-xs-12">
                            <h2 className="d-flex justify-content-center textcolor">Nombre</h2>
                            <p className="text-center textcolor">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                    </div>
                    <div className="d-flex flex-row mb-3 border-top border-warning justify-content-evenly">
                        <h6 className="col-md-2 textcolor"><p className="ms-2">Eye Color</p> <p className="ms-2">Info1</p> </h6>
                        <h6 className="col-md-2 textcolor"><p className="ms-2">Eye Color</p> <p className="ms-2">Info1</p> </h6>
                        <h6 className="col-md-2 textcolor"><p className="ms-2">Eye Color</p> <p className="ms-2">Info1</p> </h6>
                        <h6 className="col-md-2 textcolor"><p className="ms-2">Eye Color</p> <p className="ms-2">Info1</p> </h6>
                        <h6 className="col-md-2 textcolor"><p className="ms-2">Eye Color</p> <p className="ms-2">Info1</p> </h6>
                        <h6 className="col-md-2 textcolor"><p className="ms-2">Eye Color</p> <p className="ms-2">Info1</p> </h6>
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