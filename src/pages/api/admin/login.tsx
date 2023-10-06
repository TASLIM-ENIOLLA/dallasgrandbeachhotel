import Database from "@/libs/database";

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function GET(request: NextApiRequest, response: NextApiResponse) {
	const { username, password } = request.body;

	console.log({ username, password });

	response.status(200).json({
		data: ""
	})
}