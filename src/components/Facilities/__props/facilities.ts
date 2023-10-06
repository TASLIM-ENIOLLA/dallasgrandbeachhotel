export const facilities = [
	{
		id: "casino",
		name: "casino",
		imagePath: ["1.jpg", "2.jpg"],
		description: "Experience world-class gaming, upscale accommodations, exquisite dining, and entertainment that never sleeps. Whether you're here to try your luck at the tables, indulge in gourmet cuisine, or simply relax in opulent surroundings, our hotel casino promises an unforgettable stay that combines thrill and sophistication."
	},
	{
		id: "sports-bar",
		name: "sports bar",
		imagePath: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
		description: "Immerse yourself in the ultimate sports fan experience at our hotel's sports bar. Enjoy thrilling game-day action on large screens, relish delectable cuisine, and join in the spirited camaraderie as you support your preferred teams. Whether you're a passionate sports aficionado or seeking a lively night out, our sports bar promises a fantastic atmosphere for relaxation, socializing, and sharing in the excitement."
	},
	{
		id: "wine-bar",
		name: "wine bar",
		imagePath: ["1.jpg", "2.jpg"],
		description: "Indulge in the refined art of wine appreciation at our hotel's wine bar. Discover a curated selection of exquisite wines from around the world, expertly paired with delectable cuisine. Whether you're a seasoned oenophile or new to the world of wine, our bar offers an inviting ambiance to savor the nuances of each pour, making it the perfect setting for wine lovers and enthusiasts alike."
	},
	{
		id: "pool-bar",
		name: "pool bar",
		imagePath: Array(19).fill("").map((_, i) => `${i + 1}.jpg`),
		description: "Dive into relaxation and refreshment at our hotel's pool bar. Enjoy a tropical oasis where you can sip on cool cocktails, savor delicious bites, and soak up the sun while taking in stunning poolside views. Whether you're unwinding with a refreshing drink or socializing with friends, our pool bar offers a delightful escape to elevate your leisurely moments."
	},
	{
		id: "night-club",
		name: "night club",
		imagePath: ["1.jpg", "2.jpg"],
		description: "Step into the vibrant heart of nightlife at our hotel's night club. Experience electrifying beats, a dazzling dance floor, and expertly crafted cocktails. With a chic and energetic atmosphere, our night club is the perfect destination to dance the night away, mingle with fellow revelers, and create unforgettable memories in the heart of the city's nightlife scene."
	},
	{
		id: "gym",
		name: "gym",
		imagePath: ["1.jpg"],
		description: "Elevate your fitness routine at our hotel's gym center. With modern equipment, a motivating atmosphere, and expert trainers, we provide everything you need to stay active and healthy during your stay. Whether you're a fitness enthusiast or simply looking to unwind, our gym offers a well-equipped space to help you achieve your wellness goals while away from home."
	},
	{
		id: "event-center",
		name: "event center",
		imagePath: ["1.jpg", "2.jpg"],
		description: "Discover the ideal venue for your next event at our hotel's event center. With versatile spaces, state-of-the-art facilities, and attentive service, we're ready to host your special occasions, from weddings and conferences to celebrations and meetings. Let us bring your vision to life in a setting that combines elegance and functionality, ensuring an unforgettable event experience for you and your guests."
	},
];

export type FacilityType = {
	id: string,
	index?: number,
	name: string,
	imagePath: string [],
	description: string,
}