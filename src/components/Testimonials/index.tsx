import Link from "next/link";

import { testimonials, TestimonialType } from "./_props/testimonials";

export default function Component() {
	return (
		<section className="py-20 max-w-full overflow-auto">
			<div className="container">
				<div className="">
					<div className="max-w-[500px] mx-auto space-y-5">
						<div className="text-2xl md:text-4xl text-center font-bold leading-normal capitalize">
							our testimonials and reviews are handled by google.
						</div>
						<div className="text-base md:text-xl text-center font-normal text-gray-500">
							To know more or add your own review, simply click below
						</div>
						<div className="text-center">
							<Link
								className="inline-block px-10 py-5 bg-yellow-300 text-black font-bold text-lg capitalize rounded-full shadow-lg"
								href="https://www.google.com/travel/search?q=dallas%20hotel%20beachand%20resort%20on%20google&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4308226%2C4570333%2C4597339%2C4757164%2C4814050%2C4864715%2C4874190%2C4886480%2C4893075%2C4924070%2C4963887%2C4965990%2C4990494%2C10207532%2C10207769%2C72298667%2C72302247%2C72317059%2C72321071%2C72355050%2C72364736%2C72370226%2C72373155%2C72379816&hl=en-NG&gl=ng&ssta=1&ts=CAESCAoCCAMKAggDGh4SHBIUCgcI5w8QChgEEgcI5w8QChgFGAEyBAgAEAAqBwoFOgNOR04&qs=CAEyKENob0ktLTJadGJEQzdKdnNBUm9OTDJjdk1URndkM2xrYzNNNVl4QUI4CEIJCZe_1_QqnHDwQgkJm2o01ZHwlKFCCQn7dqYGE7I37A&ap=aAG6AQdyZXZpZXdz&ictx=1&sa=X"
							>
								see reviews
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}