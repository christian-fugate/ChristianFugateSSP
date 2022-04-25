import React, { useState, PureComponent } from 'react';
import axios from "axios";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import '../components/pokedexLayout.css';
import { PieChart } from 'react-minimal-pie-chart';
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

            
            <div>
                {pokemonData.map((data) => {
                    return (
                        <div>
                            <div className='image'>
                                <img src={data.sprites["front_default"]}/>
                                <img src={data.sprites["back_default"]}/>
                                
                            </div>
                            <div className='Type'>
                                <div>Type: {pokemonType}</div>
                                <div> Height: {Math.round((data.height/10)*3.9)}"</div>
                                <div> Weight: {((data.weight / 10)*2.2).toFixed(1)} lbs</div>
                            </div>
                            <ResponsiveContainer width="50%" height="50%" className="radar">
                            <RadarChart cx="50%" 
                                        cy="50%"
                                        outerRadius="80%" 
                                        data={ 
                                            [
                                                {
                                                    subject: "Special Attack",
                                                    A:data.stats[3].base_stat,
                                                    fullMark: 150,
                                                  },
                                                  {
                                                    subject: 'Attack',
                                                    A: data.stats[1].base_stat,
                                                    
                                                    fullMark: 150,
                                                  },
                                                  {
                                                    subject: 'Defense',
                                                    A: data.stats[2].base_stat,
                                                    fullMark: 150,
                                                  },
                                                  {
                                                    subject: 'Special Defense',
                                                    A: data.stats[4].base_stat,
                                                    fullMark: 150,
                                                  },
                                                  {
                                                    subject: 'HP',
                                                    A: data.stats[0].base_stat,
                                                    fullMark: 150,
                                                  },
                                                  {
                                                    subject: 'Speed',
                                                    A: data.stats[5].base_stat,
                                                    fullMark: 150,
                                                  },
                                            ]
                                        }>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                            </ResponsiveContainer>
s                        </div>
                    )
                })}  
            </div>
            
            
        
        </div>
        
    );
    
};

export default IndexPage;
