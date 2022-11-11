/*
 * Project: TGTGamer
 * File: richest_customer_wealth.spec.ts
 * Path: \portfolio\LeetCode\richest_customer_wealth\richest_customer_wealth.spec.ts
 * Created Date: Friday, November 11th 2022
 * Author: Jonathan Stevens (Email: jonathan@resnovas.com, Github: https://github.com/TGTGamer)
 * -----
 * Contributing: Please read through our contributing guidelines. Included are directions for opening
 * issues, coding standards, and notes on development. These can be found at https://github.com/TGTGamer/CONTRIBUTING.md
 * 
 * Code of Conduct: This project abides by the Contributor Covenant, version 2.0. Please interact in ways that contribute to an open,
 * welcoming, diverse, inclusive, and healthy community. Our Code of Conduct can be found at https://github.com/TGTGamer/CODE_OF_CONDUCT.md
 * -----
 * Copyright (c) 2022 Resnovas - All Rights Reserved
 * LICENSE: GNU General Public License v3.0 or later (GPL-3.0+)
 * -----
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
 * along with this program. If not, please write to: jonathan@resnovas.com,
 * or see https://www.gnu.org/licenses/gpl-3.0-standalone.html
 * 
 * DELETING THIS NOTICE AUTOMATICALLY VOIDS YOUR LICENSE - PLEASE SEE THE LICENSE FILE FOR DETAILS
 * -----
 * Last Modified: 11-11-2022
 * By: Jonathan Stevens (Email: jonathan@resnovas.com, Github: https://github.com/TGTGamer)
 * Current Version: <<projectversion>>
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import * as richestCustomerWealth from './richest_customer_wealth';

describe('maximumWealth', () => {
	test('1', () => {
		const param = [[1,2,3],[3,2,1]]
		const test = richestCustomerWealth.maximumWealth(param)
		expect(test).toBe(6)
	})
	test('2', () => {
		const param = [[1,5],[7,3],[3,5]]
		const test = richestCustomerWealth.maximumWealth(param)
		expect(test).toBe(10)
	})
	test('3', () => {
		const param = [[2,8,7],[7,1,3],[1,9,5]]
		const test = richestCustomerWealth.maximumWealth(param)
		expect(test).toBe(17)
	})
})

describe('maximumWealthV2', () => {
	test('1', () => {
		const param = [[1,2,3],[3,2,1]]
		const test = richestCustomerWealth.maximumWealthV2(param)
		expect(test).toBe(6)
	})
	test('2', () => {
		const param = [[1,5],[7,3],[3,5]]
		const test = richestCustomerWealth.maximumWealthV2(param)
		expect(test).toBe(10)
	})
	test('3', () => {
		const param = [[2,8,7],[7,1,3],[1,9,5]]
		const test = richestCustomerWealth.maximumWealthV2(param)
		expect(test).toBe(17)
	})
})