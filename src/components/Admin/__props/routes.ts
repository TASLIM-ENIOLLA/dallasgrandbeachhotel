export const routes: RouteType [] = [
	{
		title: "rooms",
		href: "/admin/dashboard/rooms",
		subtitle: ""
	},
	{
		title: "room categories",
		href: "/admin/dashboard/room-categories",
		subtitle: ""
	},
	{
		title: "logout",
		href: "/admin/dashboard/logout",
		subtitle: "",
		color: "hover:bg-red-600 hover:text-white"
	},
]

export type RouteType = {
	title: string,
	href: string,
	subtitle?: string,
	color?: string
}