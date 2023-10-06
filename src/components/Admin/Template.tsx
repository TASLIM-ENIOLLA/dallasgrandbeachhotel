import Link from "next/link";

import { routes, RouteType } from "@/components/Admin/__props/routes";

export default function Component({ children }: { children: React.ReactNode }) {
	return (
		<section className="bg-gray-100">
			<div className="flex h-screen overflow-hidden">
				<div className="h-full min-w-[300px] p-5">
					<div className="h-full w-full flex flex-col space-y-10 bg-white shadow rounded-xl">
						<div className="text-center space-y-5 p-5">
							<img src="/favicon.ico" className="inline-block" width="60" height="60" />
							<div>
								<span className="p-2 rounded-lg bg-gray-100 capitalize font-medium">administrator</span>
							</div>
						</div>
						<div className="overflow-y-auto px-5 space-y-5">
							{routes.map(({ title, color, subtitle, href }: RouteType, index: number) => (
								<Link key={index} className={`${color || "hover:bg-blue-600 hover:text-white"} p-5 capitalize font-semibold block w-full border rounded-lg`} href={href}>
									{title}
								</Link>
							))}
						</div>
					</div>
				</div>
				<div className="h-full overflow-y-auto flex-1 over p-5 md:pl-0 space-y-10">
					<div className="bg-white py-3 px-5 shadow rounded-xl">
						<div>
							<div className="font-semibold text-xl capitalize">dashboard</div>
							<div className="text-normal text-gray-500 capitalize">lorem ipsum dolor sit amet consectuer</div>
						</div>
					</div>
					<div>
						{children}
					</div>
				</div>
			</div>
		</section>
	);
}