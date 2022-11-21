import React, { useState } from 'react';
import * as runningSumOf1DArray from './running_sum_of_1d_array';
import TextField from '@mui/material/TextField';

export function ShouldRunningSum () {
	const [state, setState] = useState<string>('[1, 2, 3, 4]');
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
			{state && <div>Result: "{runningSumOf1DArray.runningSum(input).toString()}"</div>}
		</div>
	)
}

export function ShouldRunningSumV2 () {
	const [state, setState] = useState<string>('[1, 2, 3, 4]');
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
			{state && <div>Result: "{runningSumOf1DArray.runningSumv2(input).toString()}"</div>}
		</div>
	)
}