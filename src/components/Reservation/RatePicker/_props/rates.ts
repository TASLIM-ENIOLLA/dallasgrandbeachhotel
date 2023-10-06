export const rates: RateType [] = [
	{
		id: "1",
		name: "regular rate"
	},
	{
		id: "2",
		name: "copr / promo code"
	},
	{
		id: "3",
		name: "senior discount"
	},
	{
		id: "4",
		name: "AAA / CAA"
	},
	{
		id: "5",
		name: "government & military"
	},
	{
		id: "6",
		name: "group code"
	},
	{
		id: "7",
		name: "marriott bonvoy points"
	}
];

export type RateType = {
	id: number | string,
	name: string
}