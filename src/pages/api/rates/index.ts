import Database from "@/libs/database";

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function GET(request: NextApiRequest, response: NextApiResponse) {
	const [ rows ] = await Database.query("SELECT * FROM `rates` ORDER BY `name` ASC");

	response.status(200).json({
		data: rows
	})
}