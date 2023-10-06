import Link from "next/link";

import { FacilityType } from "../__props/facilities";

export default function Component({ id, index, name, imagePath, description }: FacilityType) {
	const imageRootPath = `/images/resources/facilities/${id}/`;

	return (
		<div className={`flex flex-wrap ${(typeof index === "number") && index % 2 ? "flex-row-reverse" : "flex-row"}`}>
			<div className="w-full sm:w-2/5">
				<div className="h-[200px] md:h-[300px] relative">
					<img
						alt="Facility image"
						src={imageRootPath + imagePath[0]}
						className="w-full h-full block rounded-xl"
						style={{ objectFit: "cover", objectPosition: "center" }}
					/>
				</div>
			</div>
			<div className="w-full sm:w-3/5">
				<div className="md:p-5 md:pb-20 space-y-7 md:space-y-5">
					<div className="pt-5 md:py-5 md:p-5">
						<div className="font-bold capitalize text-xl md:text-3xl mb-3">{name}</div>
						<div className="text-base md:text-xl md:text-justify text-gray-600 font-medium double-line">
							{description}
						</div>
					</div>
					<div className="md:px-5">
						<Link href={`/facilities#${id}`} className="py-4 px-5 capitalize text-black font-bold text-lg rounded-full bg-yellow-300">
							read more
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}