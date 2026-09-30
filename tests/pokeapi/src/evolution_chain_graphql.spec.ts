/*
 * Project: TGTGamer
 * File: evolution_chain_graphql.spec.ts
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

import { afterEach, beforeEach, expect, it, vi } from "vitest"
import { evolutionChainGraphQL, evolutionChainRaw } from "../../../packages/pokeapi/src/evolution_chain_graphql.js";

const response = {
  data: {
    pokemon_v2_pokemon: [{
      name: "metapod",
      pokemon_v2_pokemonspecy: {
        evolution_chain_id: 4,
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            { name: "caterpie", id: 10, evolves_from_species_id: null },
            { name: "metapod", id: 11, evolves_from_species_id: 10 },
            { name: "butterfree", id: 12, evolves_from_species_id: 11 }
          ]
        }
      }
    }]
  }
}

const fetchMock = vi.fn<typeof fetch>()
beforeEach(() => {
  fetchMock.mockReset().mockResolvedValue(Response.json(response))
  vi.stubGlobal("fetch", fetchMock)
})
afterEach(() => vi.unstubAllGlobals())

it('Should return all variations by name', async () => {
  expect(await evolutionChainGraphQL({name: "metapod"})).toMatchObject({
		name: 'caterpie',
		variations: [
			{
				name: 'metapod',
				variations: [
					{
						name: 'butterfree',
						variations: []
					}
				]
			},
			{ name: 'butterfree', variations: [] }
		]
	});
  expect(JSON.parse(String(fetchMock.mock.calls[0][1]?.body))).toMatchObject({
    operationName: "byName", variables: { name: "metapod" }
  })
});
it('Should return all variations by ID', async () => {
  expect(await evolutionChainGraphQL({id: 11})).toMatchObject({
		name: 'caterpie',
		variations: [
			{
				name: 'metapod',
				variations: [
					{
						name: 'butterfree',
						variations: []
					}
				]
			},
			{ name: 'butterfree', variations: [] }
		]
	});
  expect(JSON.parse(String(fetchMock.mock.calls[0][1]?.body))).toMatchObject({
    operationName: "byID", variables: { id: 11 }
  })
});

it('returns no evolution for an empty result', async () => {
  fetchMock.mockImplementation(async () => Response.json({ data: { pokemon_v2_pokemon: [] } }))
  expect(await evolutionChainRaw({ name: "missing" })).toEqual([])
  expect(await evolutionChainGraphQL({ name: "missing" })).toBeUndefined()
})

it.each([
  null,
  {},
  { data: {} },
  { data: { pokemon_v2_pokemon: [null] } },
  { data: { pokemon_v2_pokemon: [{}] } },
  { data: { pokemon_v2_pokemon: [{ name: "metapod", pokemon_v2_pokemonspecy: null }] } },
  ...[null, {}, { pokemon_v2_pokemonspecies: [] }, {
    pokemon_v2_pokemonspecies: [{ id: 10, name: "caterpie" }]
  }].map(chain => ({ data: { pokemon_v2_pokemon: [{
    name: "metapod", pokemon_v2_pokemonspecy: {
      evolution_chain_id: 4, pokemon_v2_evolutionchain: chain
    }
  }] } }))
])('rejects malformed responses: %j', async value => {
  fetchMock.mockResolvedValue(Response.json(value))
  await expect(evolutionChainGraphQL()).rejects.toThrow("unexpected response shape")
})
