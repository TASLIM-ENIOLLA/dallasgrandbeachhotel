import { Fragment } from "react";

import Link from "next/link";

import Banner from "@/components/Banner";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

export default function Page() {
	return (
		<Fragment>
			<Banner justHeader={true} darkText={true} />
			<section className="py-20">
				<div className="container space-y-10 md:space-y-20">
					<div className="text-2xl md:text-4xl text-center leading-normal font-bold capitalize">
						contact us
					</div>
					<div className="flex flex-wrap flex-row-reverse">
						<div className="md:pl-10 pb-10 md:pb-0 w-full md:w-7/12">
							<div className="space-y-10">
								<div className="text-2xl md:text-3xl text-center leading-normal font-bold">
									Leave a message
								</div>
								<div className="grid grid-cols-2 gap-10">
									<div className="col-span-2 col-span-1">
										<div className="space-y-3">
											<div className="text-lg capitalize font-medium">full name</div>
											<input name="name" className="p-4 rounded-md border border-gray-300 block w-full" />
										</div>
									</div>
									<div className="col-span-2 col-span-1">
										<div className="space-y-3">
											<div className="text-lg capitalize font-medium">email address</div>
											<input name="email" className="p-4 rounded-md border border-gray-300 block w-full" />
										</div>
									</div>
									<div className="col-span-2 col-span-2">
										<div className="space-y-3">
											<div className="text-lg capitalize font-medium">write message</div>
											<textarea name="message" rows={7} className="block resize-none w-full rounded-md border border-gray-300 p-4"></textarea>
										</div>
									</div>
									<div className="col-span-2">
										<button className="py-5 px-5 uppercase font-bold text-lg rounded-full text-black bg-yellow-300 shadow-lg">
											send message
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full md:w-5/12">
							<iframe
								loading="lazy"
								allowFullScreen={true}
								referrerPolicy="no-referrer-when-downgrade"
								className="w-full h-full shadow-xl border rounded-xl"
								style={{ minHeight: "400px", objectFit: "cover", objectPosition: "center" }}
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d496.08689504387917!2d5.67961!3d5.898374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040e31a53d481b5%3A0xec37b21306a676fb!2sDallas%20Grand%20Beach%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sng!4v1696285128144!5m2!1sen!2sng" 
							></iframe>
							{/*<iframe
								loading="lazy"
								allowFullScreen={true}
								referrerPolicy="no-referrer-when-downgrade"
								className="w-full h-full shadow-xl border rounded-xl"
								style={{ objectFit: "cover", objectPosition: "center" }}
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.04348884433327!2d5.67954112142896!3d5.898281607641612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040e31a53d481b5%3A0xec37b21306a676fb!2sDallas%20Grand%20Beach%20Hotel%20%26%20Resort!5e0!3m2!1sen!2sng!4v1695851774763!5m2!1sen!2sng"
							></iframe>*/}
						</div>
					</div>
					<div className="flex flex-wrap justify-center gap-10 pt-20">
						<div className="md:w-1/4">
							<div className="text-center space-y-3">
								<div className="capitalize text-xl font-semibold">physical address</div>
								<address className="capitalize text-lg font-normal">1 &amp; 5 court road, oghara, delta state, nigeria</address>
							</div>
						</div>
						<div className="md:w-1/4">
							<div className="text-center space-y-3">
								<div className="capitalize text-xl font-semibold">phone numbers</div>
								<Link href="tel://+234-907-4554-875" className="capitalize underline block w-full text-lg font-normal">
									Tel. 1: +234 907 4554 875
								</Link>
								<Link href="tel://+234-907-9533-262" className="capitalize underline block w-full text-lg font-normal">
									Tel. 2: +234 907 9533 262
								</Link>
							</div>
						</div>
						<div className="md:w-1/4">
							<div className="text-center space-y-3">
								<div className="capitalize text-xl font-semibold">email address</div>
								<Link href="mailto://info@dallasgrandbeachhotel.com" className="underline block w-full text-lg font-normal">
									info@dallasgrandbeachhotel.com
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Subscription />
			<Footer />
		</Fragment>
	);
}