import NewsletterInput from "./NewsletterInput";

export default function Component() {
	return (
		<section className="py-20">
			<div className="container">
				<div className="bg-gray-200 shadow-md rounded-3xl py-20 px-5 md:px-10">
					<div className="max-w-[550px] mx-auto space-y-5">
						<div className="text-2xl md:text-4xl text-center font-bold leading-normal capitalize">
							subscribe to our newsletter and promotions
						</div>
						<div className="text-base md:text-xl text-center font-normal text-gray-500">
							Don&apos;t wanna miss something? Subscribe right now and get the special discount and monthly newsletter
						</div>
						<div>
							<NewsletterInput />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}