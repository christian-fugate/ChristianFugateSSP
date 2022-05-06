import React, { useState } from "react";
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import axios from "axious";
const IndexPage = () => {
  return (
    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const getPokemon = async () =>{
        const toArray = [];
        try {
            const url = 'https://pokeapi.co/api/v2/pokemon/${pokemon}'
            const res = await axios.get(url)
            console.log(res)
        }catch(e){
            console.log(e)
        }
    }
    <Layout pageTitle="Home Page">
      <p>The start of my pokedex</p>
      
    </Layout>
  )
}

export default IndexPage
