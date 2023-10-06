import Image from "next/image";

import StarRating from "./StarRating";

import { TestimonialType } from "../_props/testimonials";

export default function Component({ image, rating, fullName, testimony, profession }: TestimonialType) {
	return (
		<div className="min-w-full md:min-w-[800px]">
			<div className="flex flex-wrap w-full md:w-auto gap-5 md:gap-0">
				<div className="bg-gray-200 relative h-[200px] md:h-[300px] rounded-2xl overflow-hidden xs:w-full sm:w-1/2 md:w-2/6">
					<img
						src={image}
						alt="testimonial image"
						className="block w-full h-full"
						style={{ objectFit: "cover", objectPosition: "center" }}
					/>
				</div>
				<div className="md:px-5 w-full md:w-4/6 md:py-10 md:space-y-3">
					<div className="space-y-1">
						<div className="font-semibold text-2xl md:text-3xl capitalize">{fullName}</div>
						<div className="font-normal text-gray-500 capitalize text-lg md:text-xl">{profession}</div>
					</div>
					<div>
						<StarRating
							count={rating}
						/>
					</div>
					<div className="font-medium text-gray-500 text-lg md:text-xl leading-loose">
						{testimony}
					</div>
				</div>
			</div>
		</div>
	);
}