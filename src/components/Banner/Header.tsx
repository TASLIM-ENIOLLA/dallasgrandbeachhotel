import Link from "next/link";
import { useState, useMemo } from "react";

import { routes, RouteType } from "./_props/routes";

export default function Page({ darkText }: { darkText?: boolean }) {
	const textColor = darkText ? "text-black" : "text-white";
	
	const [sideBar, setSideBar] = useState <boolean> (false);

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
								style={{ filter: "drop-shadow(0px 0px 1px black)" }}
							/>
						</Link>
					</div>
					<div className="sm:hidden">
						<button className="px-3">
							<span onClick={() => setSideBar(true)} className={`material-icons text-3xl ${textColor}`}>menu</span>
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
			{useMemo(() => {
				if(sideBar) return (
					<div className="fixed top-0 left-0 h-screen w-screen pr-20" style={{backdropFilter: "blur(3px)", zIndex: 1000}}>
						<div className="h-full flex flex-col gap-5 max-w-[350px] bg-yellow-300 shadow-lg">
							<div className="flex flex-row justify-between items-center">
								<div>
									<img
										width="70"
										height="70"
										alt="Site logo"
										src="/images/resources/logo.png"
										style={{ filter: "drop-shadow(0px 0px 1px black)" }}
									/>
								</div>
								<div className="p-5">
									<button onClick={() => setSideBar(false)} className="border border-black rounded-lg border-2 px-3">
										<span className="material-icons text-3xl text-black">close</span>
									</button>
								</div>
							</div>
							<div className="p-5 overflow-y-auto">
								<div className="flex flex-col gap-5">
									{routes.map(({ name, href }: RouteType, index: number) => (
										<Link key={index} href={href} className="block w-full px-3 py-5 rounded-lg tranition ease-in-out duration-500 text-black capitalize font-medium hover:bg-white hover:bg-opacity-75">{name}</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				)
			}, [sideBar])}
		</header>
	);
}