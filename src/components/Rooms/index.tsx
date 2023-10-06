import Link from "next/link";
import { useState, useMemo, useEffect, Fragment } from "react";

import RoomCard, { RoomCardType } from "./RoomCard";

export default function Component() {
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		fetch("/api/admin/dashboard/rooms")
		.then((response) => response.json())
		.then(({ data, error }: { data: any, error: any }) => {
			if(data) {
				setRooms(data);
			}
		})
	}, []);

	const content = useMemo(() => {
		if(rooms.length) return rooms.map((props: RoomCardType, index: number) => (
			<Fragment key={index}>
				<RoomCard {...props} />
			</Fragment>
		));
		else return (
			<div className="col-span-1 sm:col-span-2 lg:col-span-3 3xl:col-span-4">
				<div className="text-center space-y-5">
					<div className="inline-flex bg-gray-100 justify-center items-center w-[100px] h-[100px] rounded-lg">
						<span className="animate-spin">
							<span className="material-icons text-gray-600 text-5xl">cached</span>
						</span>
					</div>
					<div className="text-semibold text-gray-600 text-lg md:text-xl">Loading rooms...</div>
				</div>
			</div>
		);
	}, [rooms]);

	return (
		<section className="py-20">
			<div className="container space-y-10 md:space-y-20">
				<div className="flex flex-wrap items-center justify-between">
					<div className="w-full md:w-2/5">
						<div className="text-2xl md:text-4xl font-bold leading-normal capitalize">
							rooms we recommend to our customers
						</div>
					</div>
					<div className="w-full md:w-auto my-7">
						<Link href="/rooms" className="py-4 px-5 capitalize font-bold text-lg rounded-full text-black bg-yellow-300">
							view all rooms
						</Link>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-10 sm:gap-20">
					{content}
				</div>
			</div>
		</section>
	);
}