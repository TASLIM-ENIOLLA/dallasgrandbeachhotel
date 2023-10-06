export type RouteType = {
	name: string,
	href: string
}

export const routes: RouteType [] = [
	{ name: "home", href: "/" },
	{ name: "rooms", href: "/rooms" },
	{ name: "facilities", href: "/facilities" },
	{ name: "reviews", href: "https://www.google.com/travel/search?q=dallas%20hotel%20beachand%20resort%20on%20google&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4308226%2C4570333%2C4597339%2C4757164%2C4814050%2C4864715%2C4874190%2C4886480%2C4893075%2C4924070%2C4963887%2C4965990%2C4990494%2C10207532%2C10207769%2C72298667%2C72302247%2C72317059%2C72321071%2C72355050%2C72364736%2C72370226%2C72373155%2C72379816&hl=en-NG&gl=ng&ssta=1&ts=CAESCAoCCAMKAggDGh4SHBIUCgcI5w8QChgEEgcI5w8QChgFGAEyBAgAEAAqBwoFOgNOR04&qs=CAEyKENob0ktLTJadGJEQzdKdnNBUm9OTDJjdk1URndkM2xrYzNNNVl4QUI4CEIJCZe_1_QqnHDwQgkJm2o01ZHwlKFCCQn7dqYGE7I37A&ap=aAG6AQdyZXZpZXdz&ictx=1&sa=X" },
	{ name: "contact & support", href: "/contact-us" },
];