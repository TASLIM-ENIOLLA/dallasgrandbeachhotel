import Template from "@/components/Admin/Template";

import Link from "next/link";

import { routes, RouteType } from "@/components/Admin/__props/routes";

export default function Page() {
	return (
		<Template>
			<div className="space-y-5">
				<div className="bg-white rounded-lg shadow p-5 space-y-5">
					<div className="font-semibold text-xl capitalize">quick links</div>
					<div className="grid gap-10 grid-cols-4">
						{routes.map(({ title, href, subtitle, color }: RouteType, index: number) => (
							<div className="col-span-1" key={index}>
								<Link href={href} className={`${color || "hover:bg-blue-600 hover:text-white"} border rounded-lg p-5 h-full block w-full`}>
									<div className="font-semibold text-lg capitalize">{title}</div>
									<div className="capitalize">{subtitle}</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</Template>
	);
}