// import Database from "@/libs/database";

// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function GET(request: NextApiRequest, response: NextApiResponse) {
// 	const [ imagesRows ] = await Database.query("SELECT `imgID`, `imgURL` from `room_images`");
// 	const [ roomRows ] = await Database.query("SELECT DISTINCT `room_type`.*, `rooms`.`roomImageID` FROM `room_type` LEFT JOIN `rooms` ON `room_type`.`id` = `rooms`.`roomTypeID`");
// 	const imagesObject = imagesRows.reduce((accumulator, { imgID, imgURL}) => {
// 		return ({
// 			...accumulator,
// 			[imgID]: accumulator[imgID] ? [ ...accumulator[imgID], imgURL ] : [imgURL]
// 		})
// 	}, {});


// 	response.status(200).json({
// 		data: roomRows.map((each) => {
// 			return ({
// 				...each,
// 				images: imagesObject[each.roomImageID]
// 			})
// 		})
// 	});
// }

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function GET(request: NextApiRequest, response: NextApiResponse) {
	return response.status(200).json(JSON.parse('{"data":[{"id":1,"name":"deluxe","code":"RM_STNRD","priceUnit":"0.98","timestamp":"2023-09-24T01:46:41.000Z","roomImageID":1,"images":["/images/resources/rooms/1.JPG","/images/resources/rooms/2.JPG","/images/resources/rooms/3.JPG"]},{"id":3,"name":"executive deluxe","code":"RM_SUITE","priceUnit":"2.54","timestamp":"2023-09-24T01:48:24.000Z","roomImageID":3,"images":["/images/resources/rooms/8.JPG","/images/resources/rooms/10.JPG"]},{"id":4,"name":"executive suite","code":"RM_EXSUITE","priceUnit":"3.34","timestamp":"2023-09-24T01:48:24.000Z","roomImageID":2,"images":["/images/resources/rooms/4.JPG","/images/resources/rooms/5.JPG","/images/resources/rooms/6.JPG","/images/resources/rooms/7.JPG","/images/resources/rooms/9.JPG"]}]}'))
}

