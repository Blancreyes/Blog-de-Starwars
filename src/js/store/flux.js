const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            infoCharacter:[],
            infoPlanet:[],
			infoVehicle:[],
            favorites:[]

        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            //Creando la función para el click favorites
            addFavorites: (name) => {
                const store = getStore();
                setStore({favorites:[...store.favorites,name]})
                // console.log(store.favorites)
                // console.log(name)
            },

            loadSomeData: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            },
            getCharactersInfo: () => {

                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        infoCharacter: data.results
                    }))
                    .catch(err => console.error(err))

            },
            getPlanetsInfo: () => {

                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({infoPlanet: data.results}))
                    .catch(err => console.error(err))
            },
			getVehiclesInfo() {

				fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({infoVehicle:data.results}))
					.catch(err => console.error(err))
	
			}

        }
    };
};

export default getState;