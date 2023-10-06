import Link from "next/link";

import { routes, RouteType } from "./_props/routes";

export default function Page({ darkText }: { darkText?: boolean }) {
	const textColor = darkText ? "text-black" : "text-white";

	return (
		<header className={`py-3 md:py-5 shadow ${textColor}`}>
			<div className="container">
				<div className="flex items-center justify-between">
					<div>
						<Link href="/">
							<img
								width="70"
								height="70"
								alt="Site logo"
								src="/images/resources/logo.png"
							/>
						</Link>
					</div>
					<div className="sm:hidden">
						<button className="px-3">
							<span className={`material-icons text-3xl ${textColor}`}>menu</span>
						</button>
					</div>
					<div className="hidden sm:flex gap-10 items-center">
						{routes.map(({ name, href }: RouteType, index: number) => (
							<Link key={index} href={href} className={`${textColor} text-normal tracking-wide capitalize font-medium`}>
								{name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}