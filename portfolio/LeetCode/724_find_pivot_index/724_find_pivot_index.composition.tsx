/**
 * @format
 * -----
 * Project: TGTGamer
 * File: 724_find_pivot_index.composition.tsx
 * Path: \portfolio\LeetCode\724_find_pivot_index\724_find_pivot_index.composition.tsx
 * Created Date: Tuesday, January 16th 2024
 * Author: Jonathan Stevens (Email: jonathan@resnovas.com, Github: https://github.com/TGTGamer)
 * -----
 * Contributing: Please read through our contributing guidelines. Included are directions for opening
 * issues, coding standards, and notes on development. These can be found at https://github.com/TGTGamer/blob/develop/CONTRIBUTING.md
 * 
 * Code of Conduct: This project abides by the Contributor Covenant, version 2.0. Please interact in ways that contribute to an open,
 * welcoming, diverse, inclusive, and healthy community. Our Code of Conduct can be found at https://github.com/TGTGamer/blob/develop/CODE_OF_CONDUCT.md
 * -----
 * Copyright (c) 2024 Resnovas - All Rights Reserved
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
 */

import React, { useState } from 'react';
import * as FindPivotIndex from './724_find_pivot_index';
import TextField from '@mui/material/TextField';

export function ShouldPivotIndex () {
	const [state, setState] = useState<string>('[1, 7, 3, 6, 5, 6]');
	const handleChange = (e) => {
		const value: string = e.target.value;
		setState(value);
	}

	const input = JSON.parse(state)

	return (
		<div>
			<TextField 
				label="Input"
				helperText='Paste your values, should be an array' 
				variant="outlined"
				value={state}
				multiline={true}
				maxRows={10}
				onChange={handleChange}
			/>
			{state && <div>Result: "{FindPivotIndex.pivotIndex(input).toString()}"</div>}
		</div>
	)
}

export function ShouldPivotIndexSlower () {
	const [state, setState] = useState<string>('[1, 7, 3, 6, 5, 6]');
	const handleChange = (e) => {
		const value: string = e.target.value;
		setState(value);
	}

	const input = JSON.parse(state)

	return (
		<div>
			<TextField 
				label="Input"
				helperText='Paste your values, should be an array' 
				variant="outlined"
				value={state}
				multiline={true}
				maxRows={10}
				onChange={handleChange}
			/>
			{state && <div>Result: "{FindPivotIndex.pivotIndexSlow(input).toString()}"</div>}
		</div>
	)
}