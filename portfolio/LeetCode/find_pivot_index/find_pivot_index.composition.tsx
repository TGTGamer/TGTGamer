import React, { useState } from 'react';
import * as findPivotIndex from './find_pivot_index';
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
			{state && <div>Result: "{findPivotIndex.pivotIndex(input).toString()}"</div>}
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
			{state && <div>Result: "{findPivotIndex.pivotIndexSlow(input).toString()}"</div>}
		</div>
	)
}