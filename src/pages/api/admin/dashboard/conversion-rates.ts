import Database from "@/libs/database";

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function GET(request: NextApiRequest, response: NextApiResponse) {
	const [ rows ] = await Database.query("SELECT `code`, `conversionRate` FROM `currency`");

	response.status(200).json({
		data: rows.reduce((acc, { code, conversionRate }) => {
			return ({
				...acc,
				[code]: conversionRate
			})
		}, {})
	})
}