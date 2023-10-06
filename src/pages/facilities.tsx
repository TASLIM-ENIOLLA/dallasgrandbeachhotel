import { Fragment, useMemo, useEffect, useState } from "react";

import Banner from "@/components/Banner";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

import { facilities, FacilityType } from "@/components/Facilities/__props/facilities";

export default function Page() {
	return (
		<Fragment>
			<Banner />
			<section className="py-20">
				<div className="container space-y-10 md:space-y-20">
					<div className="text-2xl md:text-4xl text-center leading-normal font-bold capitalize">
						our facilities
					</div>
					<div className="space-y-10 md:space-y-20">
						{facilities.map((props: FacilityType, index: number) => (
							<FacilityCard key={index} index={index} {...props} />
						))}
					</div>
				</div>
			</section>
			<Subscription />
			<Footer />
		</Fragment>
	);
}

function FacilityCard({ id, index, name, imagePath, description }: FacilityType) {
	const imageRootPath = `/images/resources/facilities/${id}/`;

	const [counter, setCounter] = useState <number> (0);
	const [imageSrc, setImageSrc] = useState <string> ("");

	useEffect(() => {
		const timer = setInterval(() => {
			return setCounter((counter: number) => {
				return ((counter + 1) % imagePath.length);
			});
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		setImageSrc(imageRootPath + imagePath[counter])
	}, [counter])

	return (
		<div id={id} className={`flex py-5 flex-wrap ${(typeof index === "number") && index % 2 ? "flex-row-reverse" : "flex-row"}`}>
			<div className="w-full md:w-2/5">
				<div className="h-[250px]">
					<img
						src={imageSrc}
						loading="lazy"
						className="shadow-2xl w-full h-full bg-gray-200 rounded-2xl"
						style={{ objectFit: "cover", objectPosition: "center" }}
					/>
				</div>
			</div>
			<div className="w-full md:w-3/5">
				<div className={`py-3 md:p-10 space-y-3 ${(typeof index === "number") && index % 2 ? "md:pl-0" : "md:pr-0"}`}>
					<div className="font-bold capitalize text-xl md:text-3xl">{name}</div>
					<div className="text-lg md:text-xl text-justify font-normal tracking-loose text-black">
						{description}
					</div>
				</div>
			</div>
		</div>
	);
}