import testimonial1 from "../_images/image-1.jpg";
import testimonial2 from "../_images/image-2.jpg";
import testimonial3 from "../_images/image-3.jpg";

export const testimonials: TestimonialType [] = [
	{
		rating: 4,
		fullName: "temi davies",
		profession: "sales executive",
		testimony: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
		image: testimonial1.src,
	},
	{
		rating: 4,
		fullName: "ajibola ahmed",
		profession: "CEO rainbow inc.",
		testimony: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
		image: testimonial2.src,
	},
	{
		rating: 4,
		fullName: "nnamdi julius",
		profession: "MD bua feeds",
		testimony: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
		image: testimonial3.src,
	},
]

export type TestimonialType = {
	rating: number,
	fullName: string,
	profession: string,
	testimony: string,
	image: any,
}