import React, { useState } from 'react';
import * as richestCustomerWealth from './richest_customer_wealth';
import TextField from '@mui/material/TextField';

export function ShouldMaximumWealth () {
	const [state, setState] = useState<string>('[[1,2,3],[3,2,1]]');
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
			{state && <div>Result: "{richestCustomerWealth.maximumWealth(input).toString()}"</div>}
		</div>
	)
}
export function ShouldMaximumWealthV2 () {
	const [state, setState] = useState<string>('[[1,2,3],[3,2,1]]');
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
			{state && <div>Result: "{richestCustomerWealth.maximumWealthV2(input).toString()}"</div>}
		</div>
	)
}