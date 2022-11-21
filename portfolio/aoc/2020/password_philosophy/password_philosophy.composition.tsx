/**
 * Project: TGTGamer
 * File: password_philosophy.composition.tsx
 * Path: /portfolio/aoc/2020/password_philosophy/password_philosophy.composition.tsx
 * Created Date: Friday, November 11th 2022
 * Author: Jonathan Stevens (jonathan@resnovas.com)
 * -----
 * Last Modified: Mon Nov 14 2022
 * Modified By: Jonathan Stevens
 * Current Version: <<projectversion>>
 * -----
 * Copyright (c) 2022 Resnovas - All Rights Reserved
 * -----
 * LICENSE: GNU General Public License v3.0 or later (GPL-3.0+)
 * 
 * This program has been provided under confidence of the copyright holder and is 
 * licensed for copying, distribution and modification under the terms of
 * the GNU General Public License v3.0 or later (GPL-3.0+) published as the License,
 * or (at your option) any later version of this license.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License v3.0 or later for more details.
 * 
 * You should have received a copy of the GNU General Public License v3.0 or later
 * along with this program. If not, please write to: jonathan@resnovas.com ,
 * or see https://www.gnu.org/licenses/gpl-3.0-standalone.html
 * 
 * DELETING THIS NOTICE AUTOMATICALLY VOIDS YOUR LICENSE - PLEASE SEE THE LICENSE FILE FOR DETAILS
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

// import { passwordPhilosophy } from './password_philosophy';

// export function ReturnsCorrectValue() {
//   return <div>{passwordPhilosophy()}</div>;
// }

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import * as passwordPhilosophy from './password_philosophy';
import { values } from './values';

export function ShouldCountValid () {
	const [state, setState] = useState<string>(values);
	const handleChange = (e) => {
		const value: string = e.target.value;
		setState(value);
	}

	const input = state.split('\n')

	return (
		<div>
			<TextField 
				label="Input"
				helperText='Paste your values, should contain new lines' 
				variant="outlined"
				value={state}
				multiline={true}
				maxRows={10}
				onChange={handleChange}
			/>
			{state && <div>Result: "{passwordPhilosophy.countValid(input).toString()}"</div>}
		</div>
	)
}

export function ShouldPossitionValid () {
	const [state, setState] = useState<string>(values);
	const handleChange = (e) => {
		const value: string = e.target.value;
		setState(value);
	}

	const input = state.split('\n')

	return (
		<div>
			<TextField 
				label="Input"
				helperText='Paste your values, should contain new lines' 
				variant="outlined"
				value={state}
				multiline={true}
				maxRows={10}
				onChange={handleChange}
			/>
			{state && <div>Result: "{passwordPhilosophy.positionValid(input).toString()}"</div>}
		</div>
	)
}
