/*
 * Project: TGTGamer
 * File: evolution_chain_graphql.ts
 * Last Modified: 2026-09-25
 *
 * Contributing: Please read through our contributing guidelines. Included are directions for opening issues, coding standards,
 * and notes on development. These can be found at
 * https://github.com/TGTGamer/TGTGamer/blob/main/CONTRIBUTING.md
 *
 * Code of Conduct: This project abides by the Contributor Covenant, v2.0. Please interact in ways that contribute to an open,
 * welcoming, diverse, inclusive, and healthy community. Our Code of Conduct can be found at
 * https://github.com/TGTGamer/TGTGamer/blob/main/CODE_OF_CONDUCT.md
 *
 * Copyright (c) 2026 Jonathan Stevens T/A Resnovas. All Rights Reserved
 * LICENSE: Fair Core License, Version 1.0, MIT Future License (FCL-1.0-MIT)
 *
 * This program has been provided under confidence of the copyright holder and is licensed for copying, distribution and
 * modification under the terms of the Fair Core License, Version 1.0, MIT Future License (FCL-1.0-MIT) published as the License, or
 * (at your option) any later version of this license. You must not move, change, disable, or circumvent the license key functionality
 * in the Software; or modify any portion of the Software protected by the license key to: enable access to the protected
 * functionality without a valid license key; or remove the protected functionality. This program is distributed in the hope that it
 * will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE. See the Fair Core License, Version 1.0, MIT Future License for more details. You should have received a
 * copy of the Fair Core License, Version 1.0, MIT Future License along with this program. If not, please write to:
 * hello@resnovas.com, see the official website https://fcl.dev/ or review the GitHub repository
 * https://github.com/keygen-sh/fcl.dev/
 *
 * This project abides the Resnovas Cooperation Commitment. Adapted from the GPL Cooperation Commitment (GPLCC). Before filing
 * or continuing to prosecute any legal proceeding or claim (other than a Defensive Action) arising from termination of a Covered
 * License, we commit to adhering to the Resnovas Cooperation Commitment. You should have received a copy of the Resnovas
 * Cooperation Commitment along with this program. If not, please write to: hello@resnovas.com, or see
 * https://github.com/TGTGamer/TGTGamer/blob/main/COOPERATION_COMMITMENT.md
 *
 * DELETING THIS NOTICE AUTOMATICALLY VOIDS YOUR LICENSE
 */

import type { Variations } from "./global_types.js"


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
async function fetchGraphQL(query: string, variables: Variables, operationName: string): Promise<unknown> {
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
              evolves_from_species_id: number | null
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

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

function pokemonResults(value: unknown): unknown[] | undefined {
  if (!isRecord(value) || !isRecord(value.data)) return undefined
  const pokemon: unknown = value.data.pokemon_v2_pokemon
  return Array.isArray(pokemon) ? pokemon : undefined
}

/** Validate the nested fields used by the evolution transformation. */
function isPokemonResponse(value: unknown): value is { data: Pokemon } {
  const pokemon = pokemonResults(value)?.[0]
  if (!isRecord(pokemon) || typeof pokemon.name !== "string") return false
  const species = pokemon.pokemon_v2_pokemonspecy
  if (!isRecord(species) || typeof species.evolution_chain_id !== "number") return false
  const chain = species.pokemon_v2_evolutionchain
  if (!isRecord(chain)) return false
  const entries: unknown = chain.pokemon_v2_pokemonspecies
  return Array.isArray(entries) && entries.length > 0 && entries.every((entry: unknown) =>
    isRecord(entry) && typeof entry.name === "string" && typeof entry.id === "number" &&
    (entry.evolves_from_species_id === null || typeof entry.evolves_from_species_id === "number"))
}


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
export async function evolutionChainRaw(variables: Variables): Promise<Pokemon['pokemon_v2_pokemon'] | []> {
  /**
   * Defines the GraphQL query to be sent to the PokeAPI
   * @date 8/15/2023 - 7:17:43 PM
   * @author Jonathan Stevens (@TGTGamer)
   *
   * @type {*}
   */
  const query = `
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

  const result = await fetchGraphQL(query, variables, variables?.id !== undefined ? "byID" : "byName")
  if (pokemonResults(result)?.length === 0) return []
  if (!isPokemonResponse(result)) {
    throw new Error("PokeAPI returned an unexpected response shape")
  }
  return result.data.pokemon_v2_pokemon
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
export async function evolutionChainGraphQL (variables: Variables = {id: 1}): Promise<Variations | undefined> {
  const results = await evolutionChainRaw(variables)
  if (results.length === 0) return undefined
  const data = results[0]

  const routeSpecies = data.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies[0].id
  
  const variations: {[name: number]: Variations} = data.pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies.reduce<Record<number, Variations>>((acc, cur) => {
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
 