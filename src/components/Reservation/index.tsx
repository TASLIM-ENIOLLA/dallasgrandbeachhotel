import Link from "next/link";

export default function Page() {
	return (
		<section className="py-20 max-w-full overflow-auto">
			<div className="container">
				<div className="">
					<div className="max-w-[500px] mx-auto space-y-5">
						<div className="text-2xl md:text-4xl text-center font-bold leading-normal capitalize">
							make reservation with our preferred OTA agent
						</div>
						<div className="text-base md:text-xl text-center font-normal text-gray-500">
							Find out more about our rates and facilities
						</div>
						<div className="text-center">
							<Link
								className="inline-block px-10 py-5 bg-yellow-300 text-black font-bold text-lg capitalize rounded-full shadow-lg"
								href="https://www.expedia.com/Dallas-Grand-Beach-Hotel-Resort.h66261659.Hotel-Information"
							>
								make reservation
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

// import { useState, useEffect } from "react";

// import DatePicker from "./DatePicker";
// import RatePicker from "./RatePicker";

// export default function Component() {
// 	const [dates, setDates] = useState({
// 		checkIn: "",
// 		checkOut: ""
// 	});

// 	useEffect(() => {
		
// 	}, [dates.checkIn])

// 	return (
// 		<section className="py-20">
// 			<div className="container">
// 				<div className="space-y-10">
// 					<div className="max-w-[600px] mx-auto">
// 						<div className="text-2xl md:text-4xl text-center leading-normal font-bold capitalize">
// 							make reservation
// 						</div>
// 					</div>
// 					<form action="/make-reservation" method="GET" className="px-7 md:px-10 py-5 border flex flex-wrap items-center gap-5 rounded-md">
// 						<div className="flex flex-1 w-full gap-5 flex-wrap items-center justify-between">
// 							<div className="w-full md:flex-1 space-y-2 py-3">
// 								<div className="font-semibold uppercase text-gray-600">Check in</div>
// 								<DatePicker
// 									name="checkIn"
// 									type="check-in"
// 									date={dates.checkIn}
// 									onDateChange={({ date }) => setDates((n) => ({
// 										...n,
// 										checkIn: date
// 									}))}
// 								/>
// 							</div>
// 							<div className="w-full md:flex-1 space-y-2 py-3">
// 								<div className="font-semibold uppercase text-gray-600">Check out</div>
// 								<DatePicker
// 									name="checkOut"
// 									type="check-out"
// 									date={dates.checkOut}
// 									onDateChange={({ date }) => setDates((n) => ({
// 										...n,
// 										checkOut: date
// 									}))}
// 								/>
// 							</div>
// 							<div className="w-full md:flex-1 space-y-2 py-3">
// 								<div className="font-semibold uppercase text-gray-600">stay duration</div>
// 								<div className="capitalize font-medium text-lg p-3 border-b">2 nights</div>
// 							</div>
// 							<div className="w-full md:flex-1 space-y-2 py-3">
// 								<div className="font-semibold uppercase text-gray-600">special rates</div>
// 								<RatePicker
// 									value=""
// 									name="rate"
// 									onRateChange={() => null}
// 								/>
// 							</div>
// 						</div>
// 						<div className="w-full lg:w-auto">
// 							<div className="flex-1 space-y-2 py-3">
// 								<button type="submit" className="p-5 block w-full rounded-full bg-yellow-300 uppercase font-bold">proceed</button>
// 							</div>
// 						</div>
// 					</form>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// // DELUXE 20, EXECUTIVE DELUXE 21, EXECUTIVE SUITE 5