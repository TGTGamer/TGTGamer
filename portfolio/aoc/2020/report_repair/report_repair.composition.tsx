/**
 * Project: TGTGamer
 * File: report_repair.composition.tsx
 * Path: /portfolio/aoc/2020/report_repair/report_repair.composition.tsx
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

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { get2, get3, getall } from './report_repair';


export function shouldGet2 () {
	const [state, setState] = useState<string>(`
    1721,
    979,
    366,
    299,
    675,
    1456
`);
	const handleChange = (e) => {
		const value: string = e.target.value;
		setState(value);
	}

	const values = state.split(',').map(value => Number(value))

	return (
		<div>
			<TextField 
				label="Input"
				helperText='Comma Seperated' 
				variant="outlined"
				value={state}
				multiline={true}
				onChange={handleChange}
			/>
			{state && <div>Result: "{get2(values).toString()}"</div>}
		</div>
	)
}


export function shouldGet3 () {
	const [state, setState] = useState<string>(`
    1721,
    979,
    366,
    299,
    675,
    1456
`);
	const handleChange = (e) => {
		const value: string = e.target.value;
		setState(value);
	}

	const values = state.split(',').map(value => Number(value))

	return (
		<div>
			<TextField 
				label="Input"
				helperText='Comma Seperated' 
				variant="outlined"
				value={state}
				multiline={true}
				onChange={handleChange}
			/>
			{state && <div>Result: "{get3(values).toString()}"</div>}
		</div>
	)
}