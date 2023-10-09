import { useMemo, useState, useEffect } from "react";

import Link from "next/link";

import RoomFeatures from "../RoomFeatures";

export default function Component({ id, name, priceUnit, price, images }: RoomCardType) {
	const [conversionRates, setConversionRates] = useState();

	useEffect(() => {
		fetch("/api/admin/dashboard/conversion-rates")
		.then((response) => response.json())
		.then(({ data }: { data: any }) => setConversionRates(data))
	}, [])

	// const price = useMemo(() => {
	// 	if(conversionRates && priceUnit) {
	// 		const { USD, NGN }: { USD: number, NGN: number } = conversionRates;

	// 		return NGN * priceUnit;
	// 	}

	// 	return 0;
	// }, [priceUnit, conversionRates])

	return (
		<div className="overflow-hidden rounded-3xl hover:shadow-lg cursor-pointer transition ease-in-out duration-500">
			<div className="bg-gray-200 relative">
				<div className="relative h-full w-full">
					<img
						src={images[0]}
						alt="Room image"
						className="w-full h-full block"
						style={{ objectFit: "contain", objectPosition: "center" }}
					/>
				</div>
				<div className="hidden absolute top-0 left-0 h-full w-full flex justify-between flex-col">
					<div className="flex justify-end p-3">
						<div className="bg-gray-900 rounded-3xl p-3 bg-opacity-50 text-white font-semibold text-sm uppercase">
							standard
						</div>
					</div>
					<div className="flex justify-end p-3">
						<Link href={`./rooms/${id}`} className="bg-gray-900 rounded-3xl text-center bg-opacity-50 text-white font-semibold uppercase w-[60px]">
							<span className="material-icons">arrow_right_alt</span>
						</Link>
					</div>
				</div>
			</div>
			<div className="p-5 space-y-3">
				<div className="font-semibold text-black capitalize text-lg md:text-xl">{name} room</div>
				<div>
					<RoomFeatures />
				</div>
				<div>
					<span className="font-semibold capitalize text-lg md:text-xl">
						NGN {new Intl.NumberFormat().format(parseInt(price))}
					</span>
					<span className="text-gray-600 font-medium"> / night</span>
				</div>
			</div>
		</div>
	);
}

export type RoomCardType = {
	id: number | string,
	priceUnit: number,
	price: number,
	name: string,
	images: string [],
}