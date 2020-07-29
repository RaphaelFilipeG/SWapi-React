import React, { Component } from 'react';
import api from '../../services/api';
import "./index.css";


export default class Main extends Component {

    state = {
        Planets: []
    };

    componentDidMount() {
        this.loadPlanets();
    }

    loadPlanets = async () =>{
        const response = await api.get("planets/");
        
        this.setState({ Planets: response.data.results})

        
        console.log(this.state.Planets)
    };

    render() {

    return (
    
     <div className="planet-list">
         
     
    <h2>Tem {this.state.Planets.length} Planetas</h2>
    
       
        
            {this.state.Planets.map( (item, index) => {
                console.log(item)
                return  <div id="card">
                            <div key={index}>
                                <h5>Planeta: {item.name} </h5>
                                <h5>Clima: {item.climate}</h5>
                                <h5 id="niver"> Aniversario: {new Date(item.created)} </h5>
                            </div>

                        </div>
            }
 
           
   
            )}
         
    
    </div>
    )

      
    
}
}