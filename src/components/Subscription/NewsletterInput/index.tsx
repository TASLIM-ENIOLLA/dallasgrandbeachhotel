import { useState } from "react";

export default function Component() {
	const [ email, setEmail ] = useState <string> ("");

	function sendEmail (event: any) {
		event.preventDefault();

		fetch(`/api/newsletter/subscribe?email=${email}`)
		.then((response) => response.json())
		.then(({ data, error }) => {
			if(error) {
				alert(error.message);
			}
		})
	}
		
	return (
		<form onSubmit={sendEmail} className="flex rounded-full shadow-lg overflow-hidden">
			<div className="flex-1">
				<input
					type="email"
					value={email}
					placeholder="Enter your email address..."
					onChange={({ target: { value } }) => setEmail(value)}
					className="p-5 font-medium outline-none text-sm md:text-base border-none block w-full"
				/>
			</div>
			<div className="">
				<button
					type="submit"
					className="text-sm md:text-base py-5 px-5 md:px-10 bg-yellow-300 capitalize font-medium tracking-loose text-black"
				>
					subscribe
				</button>
			</div>
		</form>
	);
}