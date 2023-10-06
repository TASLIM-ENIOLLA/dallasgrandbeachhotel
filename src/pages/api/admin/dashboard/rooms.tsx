import Database from "@/libs/database";

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function GET(request: NextApiRequest, response: NextApiResponse) {
	const [ imagesRows ] = await Database.query("SELECT `imgID`, `imgURL` from `room_images`");
	const [ roomRows ] = await Database.query("SELECT DISTINCT `room_type`.*, `rooms`.`roomImageID` FROM `room_type` LEFT JOIN `rooms` ON `room_type`.`id` = `rooms`.`roomTypeID`");
	const imagesObject = imagesRows.reduce((accumulator, { imgID, imgURL}) => {
		return ({
			...accumulator,
			[imgID]: accumulator[imgID] ? [ ...accumulator[imgID], imgURL ] : [imgURL]
		})
	}, {});


	response.status(200).json({
		data: roomRows.map((each) => {
			return ({
				...each,
				images: imagesObject[each.roomImageID]
			})
		})
	});
}
