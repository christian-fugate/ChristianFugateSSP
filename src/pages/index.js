import React, { useState } from 'react';
import axios from "axios";
import '../components/pokedexLayout.css'
//import * as d3 from 'd3';

const IndexPage = () => {
    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const res = await axios.get(url);
            toArray.push(res.data);
            setPokemonType(res.data.types[0].type.name);
            setPokemonData(toArray);
            console.log(pokemonData)
            console.log(url);
            console.log(res.data.id)
            console.log(res.data)
            console.log(res.data.stats[0].stat.name)
        } catch (e) {
            console.log(e);
        }

    };

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    }
    return (
        <div className="IndexPage">
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text"
                        onChange={handleChange}
                        placeholder="enter pokemon Name" />
                </label>
            </form>
        
            {pokemonData.map((data) => {
                return (
                    <div className="container">
                        <div className='image'>
                            <img src={data.sprites["front_default"]}/>
                            <img src={data.sprites["back_default"]}/>
                        <div className='Type'>
                            <div>Type: {pokemonType}</div>
                        </div>
                        <div className="heightWeight">
                            <div> Height: {Math.round((data.height/10)*3.9)}"</div>
                            <div> Weight: {((data.weight / 10)*2.2).toFixed(1)} lbs</div>
                        </div>
                        </div>
                        
                    </div>
                    
                )
            })}
        </div>
    );
};

export default IndexPage;
