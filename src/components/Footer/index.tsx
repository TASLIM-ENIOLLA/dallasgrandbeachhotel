import Link from "next/link";

import { socials, SocialType } from "./_props/socials";

export default function Component() {
	return (
		<section className="py-10">
			<div className="container space-y-7">
				<div className="flex flex-wrap gap-3 md:gap-10 justify-center">
					{socials.map(({ name, href, icon }: SocialType, index: number) => (
						<Link
							key={index}
							href={href}
							title={name}
							className="flex p-3 transition duration-500 bg-transparent hover:bg-yellow-300 rounded-xl capitalize text-gray-600 flex-col space-y-2 items-center"
						>
							<img
								width="35"
								height="35"
								src={icon.src}
								alt="Social media icon"
								className=""
							/>
							<span className="text-sm md:text-base font-medium">{name}</span>
						</Link>
					))}
				</div>
				<div className="text-center font-medium text-lg">
					All rights reserved. &copy; {new Date().getFullYear()} Dallas Grand Beach Hotel and Resort.
				</div>
			</div>
		</section>
	);
}