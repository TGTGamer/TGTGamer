/**
 * Project: TGTGamer
 * File: toboggan_trajectory.composition.tsx
 * Path: /portfolio/aoc/2020/toboggan_trajectory/toboggan_trajectory.composition.tsx
 * Created Date: Friday, November 11th 2022
 * Author: Jonathan Stevens (jonathan@resnovas.com)
 * -----
 * Last Modified: Sun Nov 13 2022
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

 import React, { useState } from 'react';
 import * as toboggan_trajectory from './toboggan_trajectory'
 import TextField from '@mui/material/TextField';
 import { values } from './input';
 
 export function ShouldCheckTrees () {
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
			 {state && <div>Result: "{toboggan_trajectory.checkTrees(input, 3, 1).toString()}"</div>}
		 </div>
	 )
 }
 export function ShouldCheckTreesV2 () {
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
			 {state && <div>Result: "{toboggan_trajectory.checkTreesv2(input, 3, 1).toString()}"</div>}
		 </div>
	 )
 }
 
export function ShouldMultiply () {
	const [state, setState] = useState<string>(values);
	const [slopes, setSlopes] = useState<string>('[[1,1], [3,1], [5,1], [7,1], [1,2]]');
	const handleStateChange = (e) => {
		const value: string = e.target.value;
		setState(value);
	}
	const handleSlopeChange = (e) => {
		const value: string = e.target.value;
		setState(value);
	}
	const slope: number[][] = JSON.parse(slopes)
	const input = state.split('\n')

	return (
		<div>
			<div>
			<TextField 
				label="Input"
				helperText='Paste your slope values as Array<Array<number>> ([[1,2]]' 
				variant="outlined"
				value={slopes}
				multiline={true}
				maxRows={10}
				onChange={handleSlopeChange}
				/>
			</div>
			<div>
			<TextField 
				label="Input"
				helperText='Paste your values, should contain new lines' 
				variant="outlined"
				value={state}
				multiline={true}
				maxRows={10}
				onChange={handleStateChange}
				/>
			</div>
			{state && <div>Result: "{toboggan_trajectory.multiply(slope, input).toString()}"</div>}
		</div>
	)
}