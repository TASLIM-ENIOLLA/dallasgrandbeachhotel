import Facebook from "../_icons/facebook.svg";
import Instagram from "../_icons/instagram.svg";
import TwitterX from "../_icons/twitterx.svg";
import Youtube from "../_icons/youtube.svg";

export const socials: SocialType [] = [
	{
		name: "facebook",
		icon: Facebook,
		href: "https://www.facebook.com/dallasgrandbeachhotel/"
	},
	{
		name: "instagram",
		icon: Instagram,
		href: "https://www.instagram.com/dallasgrandbeach/"
	},
	{
		name: "X (Twitter)",
		icon: TwitterX,
		href: ""
	},
	{
		name: "youtube",
		icon: Youtube,
		href: ""
	},
]

export type SocialType = {
	name: string,
	icon: any,
	href: string
}