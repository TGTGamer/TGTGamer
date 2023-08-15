/**
 * @format
 * -----
 * Project: TGTGamer
 * File: evolution_chain.composition.tsx
 * Path: \portfolio\pokeapi\evolution_chain\evolution_chain.composition.tsx
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

import React from 'react';
import { evolutionChainGraphQL } from './evolution_chain_graphql';

export function ReturnsCorrectValue() {

  const [evolutionChain, setEvolutionChain] = React.useState({});

  // useEffect hook to run the async function evolutionChainGraphQL and present the data to the user as a json object in the browser
  React.useEffect(async () => {
    const data = await evolutionChainGraphQL({id: 10});
    setEvolutionChain(data);
  }, []);

  return (
    <>
      {
      // display the results
      }
      <div>
        <h3>Evolution Chain GraphQL Result</h3>
        <p>{JSON.stringify(evolutionChain)}</p>
      </div>
    </>
  );

}
  