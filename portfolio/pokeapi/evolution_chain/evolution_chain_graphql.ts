/**
 * @format
 * -----
 * Project: TGTGamer
 * File: evolution_chain_graphql.ts
 * Path: \portfolio\pokeapi\evolution_chain\evolution_chain_graphql.ts
 * Created Date: Monday, August 14th 2023
 * Author: Jonathan Stevens (Email: jonathan@resnovas.com, Github: https://github.com/TGTGamer)
 * -----
 * Contributing: Please read through our contributing guidelines. Included are directions for opening
 * issues, coding standards, and notes on development. These can be found at https://github.com/TGTGamer/blob/develop/CONTRIBUTING.md
 * 
 * Code of Conduct: This project abides by the Contributor Covenant, version 2.0. Please interact in ways that contribute to an open,
 * welcoming, diverse, inclusive, and healthy community. Our Code of Conduct can be found at https://github.com/TGTGamer/blob/develop/CODE_OF_CONDUCT.md
 * -----
 * Copyright (c) 2023 Resnovas - All Rights Reserved
 * LICENSE: Creative Commons Zero v1.0 Universal (CC0-1.0)
 * -----
 * This program has been provided under confidence of the copyright holder and is 
 * licensed for copying, distribution and modification under the terms of
 * the Creative Commons Zero v1.0 Universal (CC0-1.0) published as the License,
 * or (at your option) any later version of this license.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * Creative Commons Zero v1.0 Universal for more details.
 * 
 * You should have received a copy of the Creative Commons Zero v1.0 Universal
 * along with this program. If not, please write to: jonathan@resnovas.com,
 * or see https://creativecommons.org/publicdomain/zero/1.0/legalcode
 * 
 * DELETING THIS NOTICE AUTOMATICALLY VOIDS YOUR LICENSE - PLEASE SEE THE LICENSE FILE FOR DETAILS
 * -----
 * Last Modified: 15-08-2023
 * By: Jonathan Stevens (Email: jonathan@resnovas.com, Github: https://github.com/TGTGamer)
 * Current Version: 1.0.0
 */

import { gql } from 'graphql-request'
import fetch from 'node-fetch'
import { Variations } from './global_types'


/**
 * Fetches the GraphQL data from the PokeAPI and returns the json result
 * @date 8/15/2023 - 7:18:13 PM
 * @author Jonathan Stevens (@TGTGamer)
 *
 * @async
 * @param {*} query The GraphQL query to be sent to the PokeAPI
 * @param {*} variables Any variables to be passed to the query
 * @param {*} operationName The name of the operation to be performed as per the query
 * @returns {unknown} The json result of the query or throws an error
 */
async function fetchGraphQL(query, variables, operationName) {
  const result = await fetch(
    "https://beta.pokeapi.co/graphql/v1beta",
    {
      method: "POST",
      body: JSON.stringify({
        query: query,
        variables: variables,
        operationName: operationName
      })
    }
  )

  return await result.json()
}


/**
 * Defines the returned object from the PokeAPI - specifically for the evolution chain query
 * @date 8/15/2023 - 7:18:13 PM
 * @author Jonathan Stevens (@TGTGamer)
 *
 * @export
 * @typedef {Pokemon}
 */
export type Pokemon = {
  pokemon_v2_pokemon: [
    {
      name: string,
      pokemon_v2_pokemonspecy: {
        evolution_chain_id: number,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              name: string
              evolves_from_species_id: number
              id: number
            }
          ]
        }
      }
    }
  ]
}


/**
 * Description placeholder
 * @date 8/15/2023 - 7:16:09 PM
 * @author Jonathan Stevens (@TGTGamer)
 *
 * @typedef {Variables}
 */
type Variables = {id?: number, name?: string }



/**
 * Gets the pokemon information by name or id and uses the defined query to call the fetchGraphQL function
 * @date 8/15/2023 - 7:16:45 PM
 * @author Jonathan Stevens (@TGTGamer)
 *
 * 
 * @async
 * @export
 * @param {{id?: number, name?: string }} [variables={id: 1}]
 * @returns {Promise<Pokemon>}
 */
export async function evolutionChainRaw(variables: Variables): Promise<Pokemon['pokemon_v2_pokemon']> {
  /**
   * Defines the GraphQL query to be sent to the PokeAPI
   * @date 8/15/2023 - 7:17:43 PM
   * @author Jonathan Stevens (@TGTGamer)
   *
   * @type {*}
   */
  const query = gql`
    query byID ($id: Int){
      pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
        name
        pokemon_v2_pokemonspecy {
          evolution_chain_id
          pokemon_v2_evolutionchain {
            pokemon_v2_pokemonspecies {
              name
              evolves_from_species_id
              id
            }
          }
        }
      }
    }

    query byName ($name: String) {
      pokemon_v2_pokemon(where: {name: {_eq: $name}}) {
        name
        pokemon_v2_pokemonspecy {
          evolution_chain_id
          pokemon_v2_evolutionchain {
            pokemon_v2_pokemonspecies {
              name
              evolves_from_species_id
              id
            }
          }
        }
      }
    }
  `

  if (variables?.id !== undefined) {
    return ((await fetchGraphQL(query, variables, "byID")).data as Pokemon).pokemon_v2_pokemon
  } else {
    return ((await fetchGraphQL(query, variables, "byName")).data as Pokemon).pokemon_v2_pokemon
  }
}

/**
* Gets the evolutions chain in the format requested in the task description
 * @date 8/15/2023 - 7:17:16 PM
 * @author Jonathan Stevens (@TGTGamer)
 *
* @export
* @async
* @param {?Variables} [variables={id: 1}]
* @returns {Promise<Variations>}
 */
export async function evolutionChainGraphQL (variables: Variables = {id: 1}): Promise<Variations> {
  const data = (await evolutionChainRaw(variables))[0]

  const routeSpecies = data.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies[0].id
  
  const variations: {[name: number]: Variations} = data.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.reduce((acc, cur) => {
    acc[cur.id] = {
      name: cur.name,
      variations: []
    }

    if (cur.evolves_from_species_id !== null) {
      acc[cur.evolves_from_species_id].variations.push(acc[cur.id])
      
      if (cur.evolves_from_species_id !== routeSpecies) {
        acc[routeSpecies].variations.push(acc[cur.id])
      }
    }

    return acc
  }, {})

  return variations[routeSpecies]
}

evolutionChainGraphQL({name: "metapod"}) //? 